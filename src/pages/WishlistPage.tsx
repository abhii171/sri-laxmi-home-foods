import { Heart, SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

export function WishlistPage() {
  const { ids } = useWishlist();
  const wishlistItems = products.filter((product) => ids.includes(product.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Wishlist</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Saved favorites</h1>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.5rem] border border-dashed border-[#d7c8b0] bg-white p-10 text-center shadow-soft">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EBD7] text-[#1F4D3A]">
            <Heart className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold text-[#2C1607]">Your wishlist is empty</h2>
          <p className="mt-3 text-[#5A3E2B]">Add some items to keep track of your favorites.</p>
          <Link to="/shop" className="mt-8 inline-flex rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white">
            Explore products
          </Link>
        </div>
      )}
    </div>
  );
}
