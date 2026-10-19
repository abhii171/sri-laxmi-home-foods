import { Copy, MessageCircle } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import { storeConfig } from '../config/store.config';
import { buildWhatsAppMessage } from '../utils/whatsapp';

export function OrderRequestPage() {
  const { orderId } = useParams();
  const { orders } = useOrders();
  const order = orders.find((item) => item.id === orderId);

  const summary = useMemo(() => {
    if (!order) return '';
    return buildWhatsAppMessage(
      order.items || [],
      order.total || 0,
      {
        name: order.customer?.name || '',
        phone: order.customer?.phone || '',
        address: order.customer?.address || '',
      },
      order.id,
      order.paymentMethod,
    );
  }, [order]);

  if (!order) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-[#d7c8b0] bg-white p-10 shadow-soft">
          <h1 className="font-display text-4xl font-bold text-[#2C1607]">Order not found</h1>
          <p className="mt-3 text-[#5A3E2B]">We couldn't find this order request. You can check your order history or return to shop.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/shop" className="inline-flex rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white">
              Back to Shop
            </Link>
            <Link to="/account/orders" className="inline-flex rounded-full border border-[#d7c8b0] bg-white px-6 py-3 text-sm font-semibold text-[#2C1607]">
              View Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#efe0cf] bg-white p-8 shadow-soft">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Almost done</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Send your order on WhatsApp</h1>
        <p className="mt-3 text-[#5A3E2B]">Demo order. Your order is final only after confirmation on WhatsApp.</p>

        <div className="mt-8 rounded-[1.25rem] bg-[#F5EBD7] p-5">
          <div className="text-sm font-semibold text-[#1F4D3A]">Order reference</div>
          <div className="mt-2 font-display text-3xl font-bold text-[#2C1607]">{order.id}</div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href={`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-semibold text-white">
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp Again
          </a>
          <button type="button" onClick={() => navigator.clipboard.writeText(summary)} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9c7ab] bg-white px-5 py-3 text-sm font-semibold text-[#2C1607]">
            <Copy className="h-4 w-4" />
            Copy Order Details
          </button>
        </div>

        <div className="mt-8 rounded-[1.25rem] border border-[#efe0cf] bg-[#fffaf4] p-4">
          <div className="text-sm font-semibold text-[#1F4D3A]">Need help?</div>
          <p className="mt-2 text-sm text-[#5A3E2B]">WhatsApp didn't open? Please copy your order details and send them manually to the store owner.</p>
        </div>

        <div className="mt-8 flex justify-between gap-3 text-sm">
          <Link to="/shop" className="font-semibold text-[#1F4D3A]">Continue shopping</Link>
          <Link to="/account/orders" className="font-semibold text-[#1F4D3A]">View orders</Link>
        </div>
      </div>
    </div>
  );
}
