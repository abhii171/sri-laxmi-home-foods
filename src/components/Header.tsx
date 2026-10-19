import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { storeConfig } from '../config/store.config';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop All', to: '/shop' },
  { label: 'Sweets', to: '/category/sweets' },
  { label: 'Snacks', to: '/category/snacks' },
  { label: 'Pickles', to: '/category/pickles' },
  { label: 'Podis', to: '/category/podis' },
  { label: 'Masalas & Spices', to: '/category/masalas' },
  { label: 'Combos & Gifts', to: '/category/combos' },
];

export function Header() {
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1e6d5] bg-[#fff8f5]/95 backdrop-blur-sm">
      <div className="bg-[#023625] px-4 py-2 text-center text-xs font-medium tracking-[0.12em] text-[#f9f2eb] uppercase sm:text-sm">
        Authentic Telugu Foods, Snacks &amp; Sweets Delivered Fresh.
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-tight text-[#1F4D3A] sm:text-3xl">
              {storeConfig.brandName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8631F]">
              {storeConfig.tagline}
            </span>
          </Link>

          <div className="hidden flex-1 px-8 md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A3E2B]/70" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
                placeholder="Search sweets, snacks, pickles, podis, masalas..."
                className="w-full rounded-xl border border-[#e6dccd] bg-white px-11 py-3 text-sm text-[#2C1607] shadow-sm outline-none transition focus:border-[#1F4D3A] focus:ring-2 focus:ring-[#1F4D3A]/10"
              />
            </form>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/account" className="rounded-full p-2 transition hover:bg-[#f5ebda]" aria-label="Account">
              <User className="h-5 w-5 text-[#5A3E2B]" />
            </Link>
            <Link to="/wishlist" className="relative rounded-full p-2 transition hover:bg-[#f5ebda]" aria-label="Wishlist">
              <Heart className="h-5 w-5 text-[#5A3E2B]" />
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9A21B] text-[10px] font-bold text-[#2C1607]">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative rounded-full p-2 transition hover:bg-[#f5ebda]" aria-label="Cart">
              <ShoppingBag className="h-5 w-5 text-[#5A3E2B]" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D9A21B] text-[10px] font-bold text-[#2C1607]">
                  {count}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full border border-[#e6dccd] p-2 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-[#5A3E2B]" /> : <Menu className="h-5 w-5 text-[#5A3E2B]" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A3E2B]/70" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
              placeholder="Search products..."
              className="w-full rounded-xl border border-[#e6dccd] bg-white px-11 py-2.5 text-sm text-[#2C1607] shadow-sm outline-none transition focus:border-[#1F4D3A]"
            />
          </form>
        </div>

        <nav className={`mt-4 flex gap-2 overflow-x-auto pb-1 ${mobileMenuOpen ? 'flex flex-wrap' : 'hidden md:flex'}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-[#023625] text-white' : 'text-[#5A3E2B] hover:bg-[#f5ebda] hover:text-[#1F4D3A]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
