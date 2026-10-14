import { storeConfig } from '../config/store.config';

export interface CouponResult {
  code?: string;
  discount: number;
  finalTotal: number;
  message: string;
}

export const calculateCartTotals = (subtotal: number, shipping = 0) => {
  const deliveryFee = subtotal >= storeConfig.freeDeliveryThreshold ? 0 : shipping || storeConfig.deliveryFee;
  const total = subtotal + deliveryFee;

  return {
    subtotal,
    deliveryFee,
    total,
  };
};

export const applyCoupon = (subtotal: number, code: string): CouponResult => {
  const normalized = code.trim().toUpperCase();
  const coupon = storeConfig.coupons[normalized as keyof typeof storeConfig.coupons];

  if (!coupon) {
    return { discount: 0, finalTotal: subtotal, message: 'Coupon is invalid.' };
  }

  if (subtotal < coupon.minOrder) {
    return {
      discount: 0,
      finalTotal: subtotal,
      message: `Order must be above ₹${coupon.minOrder} for ${normalized}.`,
    };
  }

  if (coupon.type === 'percent') {
    const discount = (subtotal * coupon.value) / 100;
    return {
      code: normalized,
      discount,
      finalTotal: subtotal - discount,
      message: `Coupon ${normalized} applied successfully.`,
    };
  }

  const discount = coupon.value;
  return {
    code: normalized,
    discount,
    finalTotal: Math.max(subtotal - discount, 0),
    message: `Coupon ${normalized} applied successfully.`,
  };
};
