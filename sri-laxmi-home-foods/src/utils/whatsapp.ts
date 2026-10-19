import { storeConfig } from '../config/store.config';

export const buildWhatsAppMessage = (
  items: Array<{ name: string; qty: number; price: number }>,
  total: number,
  customer?: Record<string, string>,
  orderId?: string,
  paymentMode?: string,
) => {
  const lines = [
    '🛍️ *Sri Laxmi Home Foods - Order Request*',
  ];

  if (orderId) {
    lines.push(`📋 *Order Reference ID:* ${orderId}`);
  }

  lines.push(
    '',
    '*Items Ordered:*',
    ...items.map((item) => `• ${item.name} x ${item.qty} = ₹${item.price * item.qty}`),
    '',
    `*Total Amount:* ₹${total}`,
  );

  if (paymentMode) {
    lines.push(`💳 *Payment Mode:* ${paymentMode}`);
  }

  if (customer) {
    lines.push(
      '',
      '*Customer Details:*',
      `• *Name:* ${customer.name || ''}`,
      `• *Mobile:* ${customer.phone || ''}`,
      `• *Delivery Address:* ${customer.address || ''}`,
    );
  }

  lines.push(
    '',
    '--------------------------------',
    `🙏 Thank you for choosing Sri Laxmi Home Foods!`,
    `📞 Store WhatsApp: ${storeConfig.placeholder.phone}`,
  );

  return lines.filter((line) => line !== undefined).join('\n');
};
