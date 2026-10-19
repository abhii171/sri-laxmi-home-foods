import type { ReactNode } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

export function Layout({ children }: { children: ReactNode }) {
  const { count, subtotal } = useCart();
  const location = useLocation();
  const hideCartBar = location.pathname.startsWith('/cart') || location.pathname.startsWith('/checkout');

  return (
    <div className="min-h-screen bg-[#FBF6EA] text-[#2C1607] antialiased">
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Floating Cart Bar when items are added */}
      {count > 0 && !hideCartBar && (
        <aside aria-label="Cart preview" className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-xl">
          <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#023625] px-5 py-3.5 text-white shadow-2xl border border-[#107A48]/30">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F4D3A] text-[#D9A21B]">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9A21B] text-[10px] font-bold text-[#2C1607]">
                  {count}
                </span>
              </div>
              <div className="truncate">
                <div className="text-xs text-[#d1e7dd]">{count} {count === 1 ? 'item' : 'items'} in cart</div>
                <div className="text-base font-bold text-white">{formatCurrency(subtotal)}</div>
              </div>
            </div>

            <Link
              to="/cart"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D9A21B] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#2C1607] hover:bg-[#e0ae30] transition active:scale-95 shadow-md"
            >
              View Cart <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
}
