import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { storeConfig } from '../config/store.config';
import { applyCoupon } from '../utils/pricing';
import { formatCurrency } from '../utils/format';

export function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponResult, setCouponResult] = useState<{ discount: number; finalTotal: number; message: string } | null>(null);
  const navigate = useNavigate();

  const shipping = subtotal >= storeConfig.freeDeliveryThreshold ? 0 : storeConfig.deliveryFee;
  const discountedSubtotal = useMemo(() => {
    if (!couponResult) return subtotal;
    return couponResult.finalTotal;
  }, [couponResult, subtotal]);

  const total = discountedSubtotal + shipping;

  const handleApplyCoupon = () => {
    const result = applyCoupon(subtotal, couponCode);
    setCouponResult({
      discount: result.discount,
      finalTotal: result.finalTotal,
      message: result.message,
    });
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-[#d7c8b0] bg-white p-10 shadow-soft">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EBD7] text-[#1F4D3A]">
            <ShoppingCart className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold text-[#2C1607]">Your cart is empty</h1>
          <p className="mt-3 text-[#5A3E2B]">Add your favorite snacks, masalas, and pickles to get started.</p>
          <Link to="/shop" className="mt-8 inline-flex rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#023625]">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Cart</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-[#efe0cf] bg-white p-4 shadow-soft sm:flex-row">
              <img src={item.image} alt={item.name} className="h-28 w-full rounded-[1rem] object-cover sm:w-28" />

              <div className="flex flex-1 flex-col justify-between gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#2C1607]">{item.name}</h2>
                    <p className="text-sm text-[#5A3E2B]">{item.variantLabel}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} className="rounded-full p-2 text-[#B3392F] hover:bg-[#fff1ee]" aria-label="Remove item">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center rounded-full border border-[#e3d7c7] bg-[#fffaf4]">
                    <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} className="p-2 text-[#2C1607]" aria-label="Decrease quantity">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">{item.qty}</span>
                    <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} className="p-2 text-[#2C1607]" aria-label="Increase quantity">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-bold text-[#1F4D3A]">{formatCurrency(item.price * item.qty)}</div>
                    <div className="text-xs text-[#7C5E48] line-through">{formatCurrency(item.mrp * item.qty)}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
          <h2 className="font-display text-3xl font-bold text-[#2C1607]">Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-[#5A3E2B]">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            <div className="flex items-center justify-between text-[#5A3E2B]">
              <span>Delivery</span>
              <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
            </div>

            <div className="flex items-center justify-between text-[#5A3E2B]">
              <span>Coupon</span>
              <span>{couponResult ? `- ${formatCurrency(couponResult.discount)}` : '—'}</span>
            </div>

            <div className="rounded-[1rem] bg-[#F5EBD7] p-3">
              <div className="flex gap-2">
                <input
                  value={couponCode}
                  onChange={(event) => setCouponCode(event.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 rounded-full border border-[#e7dac4] bg-white px-3 py-2 text-sm text-[#2C1607] outline-none"
                />
                <button type="button" onClick={handleApplyCoupon} className="rounded-full bg-[#1F4D3A] px-4 py-2 text-sm font-semibold text-white">
                  Apply
                </button>
              </div>
              {couponResult && <p className="mt-2 text-xs text-[#1F4D3A]">{couponResult.message}</p>}
            </div>

            <div className="border-t border-[#efe0cf] pt-4">
              <div className="flex items-center justify-between text-lg font-bold text-[#2C1607]">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="mt-6 w-full rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#023625] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Checkout
          </button>

          <Link to="/shop" className="mt-3 block text-center text-sm font-semibold text-[#1F4D3A]">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
