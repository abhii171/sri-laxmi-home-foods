import { MapPin, PackageCheck, ReceiptText, ShoppingBag, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';

export function AccountPage() {
  const { orders } = useOrders();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Account</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">My account</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EBD7] text-[#1F4D3A]">
              <UserCircle2 className="h-8 w-8" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-[#2C1607]">Demo user</div>
              <div className="text-sm text-[#5A3E2B]">hello@srilaxmihomefoods.in</div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Link to="/account" className="flex items-center gap-3 rounded-xl bg-[#F5EBD7] px-4 py-3 text-[#2C1607]">
              <ShoppingBag className="h-4 w-4" />
              Overview
            </Link>
            <Link to="/account/orders" className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#5A3E2B] hover:bg-[#F5EBD7]">
              <ReceiptText className="h-4 w-4" />
              Orders
            </Link>
            <Link to="/account/addresses" className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#5A3E2B] hover:bg-[#F5EBD7]">
              <MapPin className="h-4 w-4" />
              Addresses
            </Link>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
            <h2 className="font-display text-3xl font-bold text-[#2C1607]">Overview</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A3E2B]">Orders</div>
                <div className="mt-2 text-3xl font-bold text-[#1F4D3A]">{orders.length}</div>
              </div>
              <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A3E2B]">Saved</div>
                <div className="mt-2 text-3xl font-bold text-[#1F4D3A]">0</div>
              </div>
              <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5A3E2B]">Status</div>
                <div className="mt-2 text-xl font-bold text-[#1F4D3A]">Demo</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
            <h2 className="font-display text-3xl font-bold text-[#2C1607]">Recent orders</h2>
            <div className="mt-6 space-y-4">
              {orders.length > 0 ? orders.slice(0, 3).map((order) => (
                <Link key={order.id} to={`/account/orders/${order.id}`} className="flex items-center justify-between gap-4 rounded-[1rem] border border-[#eee3d4] bg-[#fffaf4] p-4">
                  <div>
                    <div className="font-semibold text-[#2C1607]">{order.id}</div>
                    <div className="text-sm text-[#5A3E2B]">{order.status}</div>
                  </div>
                  <div className="text-sm font-semibold text-[#1F4D3A]">₹{order.total}</div>
                </Link>
              )) : (
                <div className="rounded-[1rem] border border-dashed border-[#d7c8b0] bg-[#fffaf4] p-6 text-center text-[#5A3E2B]">
                  No orders yet. Start shopping to create your first demo order.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
