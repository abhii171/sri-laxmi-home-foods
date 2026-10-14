import { Check, Heart, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatCurrency } from '../utils/format';
import type { Product } from '../types/product';

export function ProductCard({ product }: { product: Product }) {
  const { isSaved, toggle } = useWishlist();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const variant = product.variants[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant || product.isOutOfStock || variant.stock === 0) return;

    addItem({
      id: `${product.id}-${variant.id}`,
      productId: product.id,
      name: product.name,
      variantId: variant.id,
      variantLabel: variant.label,
      price: variant.price,
      mrp: variant.mrp,
      qty: 1,
      image: product.image,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#f0e3d2] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="relative overflow-hidden bg-[#FAF4ED]">
          <Link to={`/product/${product.slug}`} className="block">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
          <button
            type="button"
            aria-label={isSaved(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={() => toggle(product.id)}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-sm transition hover:bg-white hover:scale-105"
          >
            <Heart className={`h-4 w-4 ${isSaved(product.id) ? 'fill-red-500 text-red-500' : 'text-[#5A3E2B]'}`} />
          </button>
          {product.isOutOfStock && (
            <span className="absolute left-3 top-3 rounded-full bg-[#B3392F] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
              Out of stock
            </span>
          )}
        </div>

        <div className="p-5 pb-2">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-[#F5EBD7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1F4D3A]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#D9A21B]">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="text-xs font-semibold text-[#5A3E2B]">4.8</span>
            </div>
          </div>

          <Link to={`/product/${product.slug}`} className="mt-3 block">
            <h3 className="font-display text-xl font-bold leading-snug text-[#2C1607] line-clamp-2 hover:text-[#1F4D3A] transition">
              {product.name}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-2 text-sm text-[#5A3E2B]">{product.description}</p>
        </div>
      </div>

      <div className="p-5 pt-3">
        <div className="flex items-center justify-between gap-3 border-t border-[#f4eae0] pt-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#1F4D3A]">{formatCurrency(variant.price)}</span>
              {variant.mrp > variant.price && (
                <span className="text-xs text-[#7C5E48] line-through">{formatCurrency(variant.mrp)}</span>
              )}
            </div>
            <div className="mt-0.5 text-[11px] font-medium text-[#7C5E48]">
              {variant.label} • {variant.stock > 0 ? `${variant.stock} in stock` : 'Sold out'}
            </div>
          </div>

          <button
            type="button"
            disabled={product.isOutOfStock || variant.stock === 0}
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition active:scale-95 ${
              added
                ? 'bg-[#107A48] text-white shadow-md'
                : product.isOutOfStock || variant.stock === 0
                ? 'cursor-not-allowed bg-gray-200 text-gray-500'
                : 'bg-[#1F4D3A] text-white hover:bg-[#023625] shadow-sm hover:shadow'
            }`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" />
                <span>Added ✓</span>
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" />
                <span>Add to cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
