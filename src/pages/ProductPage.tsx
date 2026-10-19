import { Check, Heart, Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import { formatCurrency } from '../utils/format';

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id ?? '');
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { isSaved, toggle } = useWishlist();

  useEffect(() => {
    setSelectedVariantId(product.variants[0]?.id ?? '');
    setActiveImage(product.image);
    setQuantity(1);
    setAdded(false);
  }, [product]);

  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.id === selectedVariantId) ?? product.variants[0],
    [product, selectedVariantId],
  );

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedVariant.id}`,
      productId: product.id,
      name: product.name,
      variantId: selectedVariant.id,
      variantLabel: selectedVariant.label,
      price: selectedVariant.price,
      mrp: selectedVariant.mrp,
      qty: quantity,
      image: activeImage || product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBuyNow = () => {
    addItem({
      id: `${product.id}-${selectedVariant.id}`,
      productId: product.id,
      name: product.name,
      variantId: selectedVariant.id,
      variantLabel: selectedVariant.label,
      price: selectedVariant.price,
      mrp: selectedVariant.mrp,
      qty: quantity,
      image: activeImage || product.image,
    });
    navigate('/checkout');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-2 text-sm text-[#5A3E2B]">
        <Link to="/shop" className="hover:text-[#1F4D3A]">Shop</Link>
        <span>/</span>
        <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-[#1F4D3A]">{product.category}</Link>
        <span>/</span>
        <span className="text-[#1F4D3A]">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#f0e3d2] bg-white shadow-soft">
            <img src={activeImage || product.image} alt={product.name} className="h-[520px] w-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`overflow-hidden rounded-[1rem] border ${activeImage === image ? 'border-[#1F4D3A] ring-2 ring-[#1F4D3A]/20' : 'border-[#f0e3d2]'} bg-white p-1 shadow-soft transition hover:opacity-90`}
                >
                  <img src={image} alt={`${product.name} thumbnail`} className="h-20 w-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-[#F5EBD7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F4D3A]">
              {product.category}
            </span>
            <button
              type="button"
              onClick={() => toggle(product.id)}
              className="rounded-full border border-[#eae0d5] bg-white p-2"
              aria-label="Add to wishlist"
            >
              <Heart className={`h-4 w-4 ${isSaved(product.id) ? 'fill-red-500 text-red-500' : 'text-[#5A3E2B]'}`} />
            </button>
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold text-[#2C1607]">{product.name}</h1>

          <div className="mt-4 flex items-center gap-2 text-[#D9A21B]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
            <span className="text-sm font-medium text-[#5A3E2B]">4.8 • Sample review</span>
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-bold text-[#1F4D3A]">{formatCurrency(selectedVariant.price)}</span>
            <span className="text-lg text-[#7C5E48] line-through">{formatCurrency(selectedVariant.mrp)}</span>
          </div>

          <p className="mt-5 text-base text-[#5A3E2B]">{product.description}</p>

          <div className="mt-6 rounded-[1.25rem] border border-[#efe0cf] bg-[#fffaf4] p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-[#1F4D3A]">
              <ShieldCheck className="h-4 w-4" />
              Availability confirmed on WhatsApp
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-[#5A3E2B]">
              <Truck className="h-4 w-4 text-[#C8631F]" />
              Delivery options confirmed after order request on WhatsApp.
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5A3E2B]">Select variant</div>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${selectedVariantId === variant.id ? 'border-[#1F4D3A] bg-[#1F4D3A] text-white' : 'border-[#e1d5c6] bg-white text-[#2C1607]'}`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-[#e4d7c3] bg-[#fffaf4]">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="p-3 text-[#2C1607] hover:text-[#1F4D3A] transition"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.min(selectedVariant.stock || 1, prev + 1))}
                className="p-3 text-[#2C1607] hover:text-[#1F4D3A] transition"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              disabled={selectedVariant.stock === 0}
              onClick={handleAddToCart}
              className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition active:scale-95 ${
                added
                  ? 'bg-[#107A48] text-white shadow-md'
                  : selectedVariant.stock === 0
                  ? 'cursor-not-allowed bg-gray-200 text-gray-500'
                  : 'bg-[#1F4D3A] text-white hover:bg-[#023625] shadow-sm hover:shadow'
              }`}
            >
              {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
              <span>{added ? 'Added to Cart ✓' : 'Add to cart'}</span>
            </button>

            <button
              type="button"
              disabled={selectedVariant.stock === 0}
              onClick={handleBuyNow}
              className="rounded-full border border-[#1F4D3A] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F4D3A] hover:bg-[#FAF4ED] transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Buy now
            </button>
          </div>

          {added && (
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] p-4 text-sm font-medium text-[#1B5E20]">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-[#2E7D32]" />
                <span>Added {quantity} × {product.name} ({selectedVariant.label}) to cart!</span>
              </div>
              <Link to="/cart" className="font-bold underline hover:text-[#0D5328] ml-2 shrink-0">
                View Cart &rarr;
              </Link>
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A3E2B]">Ingredients</div>
              <ul className="mt-3 space-y-2 text-sm text-[#2C1607]">
                {product.ingredients.map((ingredient) => <li key={ingredient}>• {ingredient}</li>)}
              </ul>
            </div>
            <div className="rounded-[1rem] bg-[#F5EBD7] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A3E2B]">Storage</div>
              <p className="mt-3 text-sm text-[#2C1607]">{product.storage}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">You may also like</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Related products</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
