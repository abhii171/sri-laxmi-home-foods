import { createContext, useContext, useMemo, useState } from 'react';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  variantId: string;
  variantLabel: string;
  price: number;
  mrp: number;
  qty: number;
  image: string;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'sri_laxmi_cart';

const readInitialCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(readInitialCart);

  const persist = (nextItems: CartItem[]) => {
    setItems(nextItems);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
    }
  };

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const nextItems = prev.some((entry) => entry.id === item.id)
        ? prev.map((entry) =>
            entry.id === item.id ? { ...entry, qty: entry.qty + item.qty } : entry,
          )
        : [...prev, item];

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
      }

      return nextItems;
    });
  };

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => {
      const nextItems = prev
        .map((entry) => (entry.id === id ? { ...entry, qty: Math.max(0, qty) } : entry))
        .filter((entry) => entry.qty > 0);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
      }

      return nextItems;
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const nextItems = prev.filter((entry) => entry.id !== id);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
      }
      return nextItems;
    });
  };

  const clearCart = () => {
    setItems([]);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
  };

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    return {
      items,
      count,
      subtotal,
      addItem,
      updateQty,
      removeItem,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return context;
};
