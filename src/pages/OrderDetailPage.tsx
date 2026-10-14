import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import { formatCurrency } from '../utils/format';

export function OrderDetailPage() {
  const { orderId } = useParams();
  const { orders, cancelOrder } = useOrders();
  const order = orders.find((entry) => entry.id === orderId);

  if (!order) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-[#2C1607]">Order not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/account/orders" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F4D3A]">
        <ArrowLeft className="h-4 w-4" />
        Back to orders
      </Link>

      <div className="mt-8 rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Order details</div>
            <h1 className="mt-2 font-display text-4xl font-bold text-[#2C1607]">{order.id}</h1>
          </div>
          <div className="rounded-full bg-[#F5EBD7] px-4 py-2 text-sm font-semibold text-[#1F4D3A]">{order.status}</div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A3E2B]">Customer</div>
            <div className="mt-3 space-y-2 text-sm text-[#2C1607]">
              <div>{order.customer?.name || 'Customer'}</div>
              <div>{order.customer?.phone || ''}</div>
              <div>{order.customer?.address || ''}</div>
            </div>
          </div>

          <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A3E2B]">Items</div>
            <div className="mt-3 space-y-2 text-sm text-[#2C1607]">
              {(order.items || []).map((item) => (
                <div key={`${order.id}-${item.name}`} className="flex items-center justify-between gap-4">
                  <span>{item.name} x{item.qty}</span>
                  <span>{formatCurrency(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1rem] border border-[#efe0cf] bg-[#fffaf4] p-4 space-y-2">
          {order.paymentMethod && (
            <div className="flex items-center justify-between text-sm text-[#5A3E2B]">
              <span>Payment mode</span>
              <span className="font-semibold text-[#1F4D3A]">{order.paymentMethod}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-sm text-[#5A3E2B]">
            <span>Total</span>
            <span className="text-lg font-bold text-[#1F4D3A]">{formatCurrency(order.total)}</span>
          </div>
        </div>

        {order.status === 'Awaiting confirmation on WhatsApp' && (
          <div className="mt-6 flex justify-end">
            <button type="button" onClick={() => cancelOrder(order.id)} className="rounded-full bg-[#B3392F] px-5 py-3 text-sm font-semibold text-white">
              Cancel order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
