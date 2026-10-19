import { Link } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import { formatCurrency } from '../utils/format';

const statuses = ['Awaiting confirmation on WhatsApp', 'Confirmed', 'Preparing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled', 'Returned'];

export function OrdersPage() {
  const { orders } = useOrders();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Orders</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Order history</h1>
      </div>

      <div className="space-y-5">
        {orders.length > 0 ? orders.map((order) => (
          <Link key={order.id} to={`/account/orders/${order.id}`} className="block rounded-[1.5rem] border border-[#efe0cf] bg-white p-5 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-display text-2xl font-bold text-[#2C1607]">{order.id}</div>
                <div className="text-sm text-[#5A3E2B]">{order.customer?.name || 'Customer'}{order.customer?.phone ? ` • ${order.customer.phone}` : ''}</div>
              </div>
              <div className="text-sm font-semibold text-[#1F4D3A]">{order.status}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#5A3E2B]">
              {(order.items || []).map((item) => (
                <span key={`${order.id}-${item.name}`} className="rounded-full bg-[#F5EBD7] px-2 py-1">
                  {item.name} x{item.qty}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-sm text-[#5A3E2B]">
              <span>Order total</span>
              <span className="text-base font-bold text-[#1F4D3A]">{formatCurrency(order.total)}</span>
            </div>
          </Link>
        )) : (
          <div className="rounded-[1.5rem] border border-dashed border-[#d7c8b0] bg-[#fffaf4] p-10 text-center text-[#5A3E2B]">
            You have not placed any orders yet.
          </div>
        )}
      </div>

      <div className="mt-10 rounded-[1.5rem] border border-[#efe0cf] bg-white p-5 shadow-soft">
        <h2 className="font-display text-3xl font-bold text-[#2C1607]">Tracking timeline</h2>
        <div className="mt-6 space-y-4">
          {statuses.map((status, index) => (
            <div key={status} className="flex items-center gap-4">
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${index === 0 ? 'bg-[#1F4D3A] text-white' : 'bg-[#F5EBD7] text-[#1F4D3A]'}`}>
                {index + 1}
              </div>
              <div className="text-sm text-[#2C1607]">{status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
