import { createContext, useContext, useMemo, useState } from 'react';

interface WishlistContextValue {
  ids: string[];
  count: number;
  toggle: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);
const STORAGE_KEY = 'sri_laxmi_wishlist';

const readInitialWishlist = (): string[] => {
  if (typeof window === 'undefined') return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
};

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [ids, setIds] = useState<string[]>(readInitialWishlist);

  const persist = (nextIds: string[]) => {
    setIds(nextIds);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
    }
  };

  const toggle = (id: string) => {
    setIds((prev) => {
      const nextIds = prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id];
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
      }
      return nextIds;
    });
  };

  const isSaved = (id: string) => ids.includes(id);

  const value = useMemo(
    () => ({
      ids,
      count: ids.length,
      toggle,
      isSaved,
    }),
    [ids],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider');
  }
  return context;
};
