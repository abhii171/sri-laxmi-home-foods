export const storeConfig = {
  brandName: 'Sri Laxmi Home Foods',
  tagline: 'Tradition Meets Taste',
  whatsappNumber: '919160351146',
  freeDeliveryThreshold: 499,
  deliveryFee: 40,
  coupons: {
    WELCOME10: { type: 'percent', value: 10, minOrder: 0 },
    FLAT50: { type: 'fixed', value: 50, minOrder: 399 },
  },
  placeholder: {
    phone: '+91 91603 51146',
    email: 'srilaxmihomefoods.support@gmail.com',
    address: 'Sri Laxmi Home Foods, Manchirevula / Kokapet, Hyderabad, 500075 TS, India',
    socials: {
      instagram: '@srilaxmihomefoods',
      whatsapp: '+91 91603 51146',
    },
    fssai: '12345678901234',
  },
  bio: {
    title: 'Welcome to Sri Laxmi Home Foods — Where Tradition Meets Taste',
    short: 'Bringing homemade tradition and authentic flavors to your family, one bite at a time.',
    story:
      'At Sri Laxmi Home Foods, we believe food is more than just a meal; it carries memories, culture, and the warmth of home. Our journey began with a simple mission: to bring authentic homemade flavors to families across the world while preserving the traditional recipes passed down through generations.\n\nEvery product at Sri Laxmi Home Foods is prepared with care using quality ingredients, traditional methods, and a passion for authenticity. From pure ghee sweets and traditional snacks to flavorful podis, pickles, and millet-based foods, we strive to deliver freshness and taste in every bite.\n\nWe take pride in offering products that reflect the rich flavors of Indian kitchens while maintaining high standards of quality and consistency. Whether you are reliving childhood memories, sharing traditions with family, or discovering authentic flavors for the first time, Sri Laxmi Home Foods is here to bring a piece of home to your table.',
    taglineBottom: 'Tradition. Quality. Love.',
    promises: [
      'Authentic Traditional Recipes',
      'Quality Ingredients',
      'Homemade Taste',
      'Made with Love',
      'Worldwide Shipping',
    ],
  },
  paymentPreferences: ['UPI after confirmation', 'Cash on Delivery'],
};

export const siteRoutes = {
  home: '/',
  shop: '/shop',
  search: '/search',
  category: '/category/:slug',
  product: '/product/:slug',
  wishlist: '/wishlist',
  cart: '/cart',
  checkout: '/checkout',
  orderRequest: '/order-request/:orderId',
  account: '/account',
  orders: '/account/orders',
  orderDetail: '/account/orders/:orderId',
  addresses: '/account/addresses',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  policies: '/policies/:slug',
};
