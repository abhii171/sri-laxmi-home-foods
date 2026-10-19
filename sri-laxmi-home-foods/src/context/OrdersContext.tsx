import { createContext, useContext, useMemo, useState } from 'react';

export interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

export interface OrderRecord {
  id: string;
  createdAt: string;
  status: 'Awaiting confirmation on WhatsApp' | 'Confirmed' | 'Preparing' | 'Shipped' | 'Out for Delivery' | 'Delivered' | 'Cancelled' | 'Returned';
  total: number;
  paymentMethod?: string;
  items: OrderItem[];
  customer: {
    name: string;
    phone: string;
    address: string;
  };
}

interface OrdersContextValue {
  orders: OrderRecord[];
  createOrder: (order: Omit<OrderRecord, 'id' | 'createdAt'> & { id?: string }) => OrderRecord;
  cancelOrder: (orderId: string) => void;
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined);
const STORAGE_KEY = 'sri_laxmi_orders';

const readInitialOrders = (): OrderRecord[] => {
  if (typeof window === 'undefined') return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as OrderRecord[];
  } catch {
    return [];
  }
};

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<OrderRecord[]>(readInitialOrders);

  const createOrder = (order: Omit<OrderRecord, 'id' | 'createdAt'> & { id?: string }) => {
    const nextOrder: OrderRecord = {
      ...order,
      id: order.id || `SLH-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      createdAt: new Date().toISOString(),
    };

    const nextOrders = [nextOrder, ...orders];
    setOrders(nextOrders);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextOrders));
    }
    return nextOrder;
  };

  const cancelOrder = (orderId: string) => {
    const nextOrders: OrderRecord[] = orders.map((order) =>
      order.id === orderId ? { ...order, status: 'Cancelled' } : order,
    );
    setOrders(nextOrders);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextOrders));
    }
  };

  const value = useMemo(() => ({ orders, createOrder, cancelOrder }), [orders]);

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used inside OrdersProvider');
  }
  return context;
};
