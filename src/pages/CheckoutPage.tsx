import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { storeConfig } from '../config/store.config';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';
import { formatCurrency } from '../utils/format';
import { buildWhatsAppMessage } from '../utils/whatsapp';
import { isValidIndianMobile, isValidPin, normalizeMobile, normalizePin } from '../utils/validation';

const initialForm = {
  name: '',
  phone: '',
  address: '',
  city: '',
  state: 'Telangana',
  pin: '',
  addressType: 'Home',
};

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const { createOrder } = useOrders();
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(1);
  const [validationError, setValidationError] = useState('');
  const [preferredPayment, setPreferredPayment] = useState('Cash on Delivery');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderRefId] = useState(
    () => `SLH-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
  );
  const navigate = useNavigate();

  const shipping = subtotal >= storeConfig.freeDeliveryThreshold ? 0 : storeConfig.deliveryFee;
  const total = subtotal + shipping;

  const whatsappMessage = useMemo(
    () =>
      buildWhatsAppMessage(
        items.map((item) => ({ name: item.name, qty: item.qty, price: item.price })),
        total,
        {
          name: form.name,
          phone: normalizeMobile(form.phone) || form.phone,
          address: `${form.address}, ${form.city}, ${form.state} - ${form.pin}`,
        },
        orderRefId,
        preferredPayment,
      ),
    [items, total, form, orderRefId, preferredPayment],
  );

  const handleNextStep = () => {
    if (step === 1) {
      if (!form.name.trim()) {
        setValidationError('Please enter your full name.');
        return;
      }
      if (!form.phone.trim()) {
        setValidationError('Please enter your mobile number.');
        return;
      }
      if (!isValidIndianMobile(form.phone)) {
        setValidationError('Please enter a valid 10-digit mobile number (e.g. 9440057644).');
        return;
      }
      setValidationError('');
      const cleanPhone = normalizeMobile(form.phone);
      setForm((prev) => ({ ...prev, phone: cleanPhone }));
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!form.address.trim()) {
        setValidationError('Please enter your street address.');
        return;
      }
      if (!form.city.trim()) {
        setValidationError('Please enter your city.');
        return;
      }
      if (!form.pin.trim() || !isValidPin(form.pin)) {
        setValidationError('Please enter a valid 6-digit postal PIN code.');
        return;
      }
      setValidationError('');
      const cleanPin = normalizePin(form.pin);
      setForm((prev) => ({ ...prev, pin: cleanPin }));
      setStep(3);
      return;
    }
  };

  const handlePlaceOrder = () => {
    if (isSubmitting) return;

    const cleanPhone = normalizeMobile(form.phone);
    const cleanPin = normalizePin(form.pin);

    if (!form.name.trim() || !cleanPhone || !isValidIndianMobile(cleanPhone)) {
      setStep(1);
      setValidationError('Please verify your mobile number.');
      return;
    }

    if (!form.address.trim() || !form.city.trim() || !isValidPin(cleanPin)) {
      setStep(2);
      setValidationError('Please verify your delivery address & PIN code.');
      return;
    }

    setIsSubmitting(true);

    const order = createOrder({
      id: orderRefId,
      status: 'Awaiting confirmation on WhatsApp',
      total,
      paymentMethod: preferredPayment,
      items: items.map((item) => ({ name: item.name, qty: item.qty, price: item.price })),
      customer: {
        name: form.name,
        phone: cleanPhone,
        address: `${form.address}, ${form.city}, ${form.state} - ${cleanPin}`,
      },
    });

    clearCart();
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
    navigate(`/order-request/${order.id}`);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-dashed border-[#d7c8b0] bg-white p-10 shadow-soft">
          <h1 className="font-display text-4xl font-bold text-[#2C1607]">Your cart is empty</h1>
          <p className="mt-3 text-[#5A3E2B]">Please add items to your cart before proceeding to checkout.</p>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#023625]"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Checkout</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Complete your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
          <div className="mb-8 flex items-center gap-3">
            {[1, 2, 3].map((value) => (
              <div key={value} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${step === value ? 'bg-[#1F4D3A] text-white' : 'bg-[#F5EBD7] text-[#1F4D3A]'}`}>
                  {value}
                </div>
                {value < 3 && <div className="h-px w-8 bg-[#e4d7c3]" />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-[#2C1607]">Full name</label>
                <input
                  type="text"
                  placeholder="e.g. Surnar Abhijeeth"
                  value={form.name}
                  onChange={(event) => {
                    setForm({ ...form, name: event.target.value });
                    if (validationError) setValidationError('');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') handleNextStep();
                  }}
                  className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#2C1607]">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 9440057644 or 09440057644"
                  value={form.phone}
                  onChange={(event) => {
                    setForm({ ...form, phone: event.target.value });
                    if (validationError) setValidationError('');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') handleNextStep();
                  }}
                  className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]"
                />
                <p className="mt-1.5 text-xs text-[#7A5A40]">
                  Accepts 10-digit mobile number (e.g. 9440057644, with or without 0 or +91)
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-[#2C1607]">Address / Street</label>
                <textarea
                  placeholder="House / Flat no, Street name, Landmark"
                  value={form.address}
                  onChange={(event) => {
                    setForm({ ...form, address: event.target.value });
                    if (validationError) setValidationError('');
                  }}
                  className="mt-2 min-h-[110px] w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-[#2C1607]">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad"
                    value={form.city}
                    onChange={(event) => {
                      setForm({ ...form, city: event.target.value });
                      if (validationError) setValidationError('');
                    }}
                    className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#2C1607]">State</label>
                  <input
                    type="text"
                    value={form.state}
                    onChange={(event) => {
                      setForm({ ...form, state: event.target.value });
                      if (validationError) setValidationError('');
                    }}
                    className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#2C1607]">PIN Code</label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="e.g. 500001"
                  value={form.pin}
                  onChange={(event) => {
                    setForm({ ...form, pin: event.target.value });
                    if (validationError) setValidationError('');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') handleNextStep();
                  }}
                  className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#2C1607]">Address type</label>
                <div className="mt-2 flex gap-3">
                  {['Home', 'Work'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, addressType: type })}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${form.addressType === type ? 'bg-[#1F4D3A] text-white' : 'bg-[#F5EBD7] text-[#2C1607]'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1F4D3A]">Review Details</div>
                  <div className="rounded-md border border-[#dfceb6] bg-white px-2.5 py-1 text-xs font-mono font-bold text-[#1F4D3A]">
                    {orderRefId}
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-[#2C1607]">
                  <div><span className="font-semibold text-[#5A3E2B]">Order Reference:</span> <span className="font-mono font-bold text-[#1F4D3A]">{orderRefId}</span></div>
                  <div><span className="font-semibold text-[#5A3E2B]">Name:</span> {form.name}</div>
                  <div><span className="font-semibold text-[#5A3E2B]">Phone:</span> {form.phone}</div>
                  <div><span className="font-semibold text-[#5A3E2B]">Address:</span> {form.address}, {form.city}, {form.state} - {form.pin}</div>
                  <div><span className="font-semibold text-[#5A3E2B]">Payment Mode:</span> <span className="font-semibold text-[#1F4D3A]">{preferredPayment}</span></div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-[#2C1607]">Preferred payment</div>
                <div className="mt-3 space-y-2">
                  {storeConfig.paymentPreferences.map((method) => (
                    <label key={method} className="flex items-center gap-3 rounded-xl border border-[#ebdfd0] bg-[#fffaf4] p-3 text-sm text-[#2C1607] cursor-pointer">
                      <input type="radio" checked={preferredPayment === method} onChange={() => setPreferredPayment(method)} name="payment" />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-[1rem] border border-[#efe0cf] bg-[#fffaf4] p-4">
                <div className="text-sm font-semibold text-[#1F4D3A]">WhatsApp preview</div>
                <pre className="mt-3 whitespace-pre-wrap text-xs leading-6 text-[#2C1607]">{whatsappMessage}</pre>
              </div>
            </div>
          )}

          {validationError && (
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700 animate-fadeIn">
              <span>⚠️</span>
              <span>{validationError}</span>
            </div>
          )}

          <div className="mt-8 flex justify-between gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={() => {
                  setValidationError('');
                  setStep((current) => current - 1);
                }}
                className="rounded-full border border-[#e3d4bf] bg-white px-5 py-3 text-sm font-semibold text-[#2C1607] hover:bg-[#F5EBD7] transition"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="ml-auto rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#16382a] transition"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={isSubmitting}
                className="ml-auto rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#16382a] disabled:cursor-not-allowed disabled:opacity-60 transition"
              >
                {isSubmitting ? 'Sending order...' : 'Place Order on WhatsApp'}
              </button>
            )}
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-6 shadow-soft">
          <h2 className="font-display text-3xl font-bold text-[#2C1607]">Order summary</h2>
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-medium text-[#2C1607]">{item.name}</div>
                  <div className="text-xs text-[#5A3E2B]">Qty: {item.qty}</div>
                </div>
                <div className="text-sm font-semibold text-[#1F4D3A]">{formatCurrency(item.price * item.qty)}</div>
              </div>
            ))}
            <div className="border-t border-[#efe0cf] pt-4 space-y-2 text-sm text-[#5A3E2B]">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span></div>
              <div className="flex justify-between text-base font-bold text-[#2C1607]"><span>Total</span><span>{formatCurrency(total)}</span></div>
            </div>
          </div>

          <p className="mt-6 text-xs leading-5 text-[#5A3E2B]">
            No payment is taken on this website. We confirm your order on WhatsApp and share payment details.
          </p>
        </aside>
      </div>
    </div>
  );
}
