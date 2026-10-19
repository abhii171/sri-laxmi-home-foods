import { Filter, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/products';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

export function ShopPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim().toLowerCase() ?? '';
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>(slug ?? 'all');
  const [selectedPrice, setSelectedPrice] = useState<'all' | 'under-200' | '200-400' | 'over-400'>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<'all' | 'in-stock' | 'out-of-stock'>('all');
  const [selectedSpice, setSelectedSpice] = useState<'all' | 'Mild' | 'Medium' | 'Hot'>('all');
  const [sortBy, setSortBy] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setSelectedCategory(slug ?? 'all');
  }, [slug]);

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products];

    if (selectedCategory !== 'all') {
      const activeCat = categories.find((c) => c.slug.toLowerCase() === selectedCategory.toLowerCase());
      nextProducts = nextProducts.filter((product) => {
        const productCat = product.category.toLowerCase();
        const selected = selectedCategory.toLowerCase();
        if (productCat === selected) return true;
        if (activeCat && (productCat === activeCat.name.toLowerCase() || activeCat.slug.toLowerCase() === selected)) {
          return productCat.includes(activeCat.slug.toLowerCase()) || activeCat.name.toLowerCase().includes(productCat);
        }
        return false;
      });
    }

    if (query) {
      nextProducts = nextProducts.filter((product) => {
        const searchable = `${product.name} ${product.description} ${product.tags.join(' ')} ${product.category}`.toLowerCase();
        return searchable.includes(query);
      });
    }

    if (selectedPrice !== 'all') {
      nextProducts = nextProducts.filter((product) => {
        const price = product.variants[0]?.price ?? 0;
        if (selectedPrice === 'under-200') return price < 200;
        if (selectedPrice === '200-400') return price >= 200 && price <= 400;
        return price > 400;
      });
    }

    if (selectedAvailability !== 'all') {
      nextProducts = nextProducts.filter((product) => {
        const hasStock = product.variants.some((variant) => variant.stock > 0);
        return selectedAvailability === 'in-stock' ? hasStock : !hasStock;
      });
    }

    if (selectedSpice !== 'all') {
      nextProducts = nextProducts.filter((product) => product.spiceLevel === selectedSpice);
    }

    if (sortBy === 'price-asc') {
      nextProducts.sort((a, b) => (a.variants[0]?.price ?? 0) - (b.variants[0]?.price ?? 0));
    } else if (sortBy === 'price-desc') {
      nextProducts.sort((a, b) => (b.variants[0]?.price ?? 0) - (a.variants[0]?.price ?? 0));
    } else if (sortBy === 'newest') {
      nextProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return nextProducts;
  }, [query, selectedCategory, selectedPrice, selectedAvailability, selectedSpice, sortBy]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 rounded-[1.75rem] bg-[#F5EBD7] p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Our collection</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">
              {selectedCategory === 'all' ? 'Shop all' : categories.find((cat) => cat.slug.toLowerCase() === selectedCategory.toLowerCase())?.name || 'Shop'}
            </h1>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-[#e1d3bf] bg-white px-3 py-2 text-sm text-[#5A3E2B] sm:flex">
            <Sparkles className="h-4 w-4 text-[#C8631F]" />
            {filteredProducts.length} items
          </div>
        </div>

        {query && (
          <div className="flex items-center gap-2 text-sm text-[#5A3E2B]">
            <Search className="h-4 w-4 text-[#1F4D3A]" />
            Showing results for “{query}”
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-5 shadow-soft">
          <div className="flex items-center gap-2 text-[#1F4D3A]">
            <SlidersHorizontal className="h-4 w-4" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A3E2B]">Category</label>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`rounded-full px-3 py-1.5 text-sm ${selectedCategory === 'all' ? 'bg-[#1F4D3A] text-white' : 'bg-[#F5EBD7] text-[#2C1607]'}`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`rounded-full px-3 py-1.5 text-sm ${selectedCategory === category.slug ? 'bg-[#1F4D3A] text-white' : 'bg-[#F5EBD7] text-[#2C1607]'}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A3E2B]">Price</label>
              <select
                value={selectedPrice}
                onChange={(event) => setSelectedPrice(event.target.value as typeof selectedPrice)}
                className="mt-3 w-full rounded-xl border border-[#e7dccb] bg-[#fffaf4] px-3 py-2 text-sm text-[#2C1607] outline-none"
              >
                <option value="all">All prices</option>
                <option value="under-200">Under ₹200</option>
                <option value="200-400">₹200 - ₹400</option>
                <option value="over-400">Above ₹400</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A3E2B]">Availability</label>
              <select
                value={selectedAvailability}
                onChange={(event) => setSelectedAvailability(event.target.value as typeof selectedAvailability)}
                className="mt-3 w-full rounded-xl border border-[#e7dccb] bg-[#fffaf4] px-3 py-2 text-sm text-[#2C1607] outline-none"
              >
                <option value="all">All products</option>
                <option value="in-stock">In stock</option>
                <option value="out-of-stock">Out of stock</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A3E2B]">Spice level</label>
              <select
                value={selectedSpice}
                onChange={(event) => setSelectedSpice(event.target.value as typeof selectedSpice)}
                className="mt-3 w-full rounded-xl border border-[#e7dccb] bg-[#fffaf4] px-3 py-2 text-sm text-[#2C1607] outline-none"
              >
                <option value="all">All levels</option>
                <option value="Mild">Mild</option>
                <option value="Medium">Medium</option>
                <option value="Hot">Hot</option>
              </select>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#efe0cf] bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[#5A3E2B]">
              <Filter className="h-4 w-4 text-[#1F4D3A]" />
              <span className="text-sm font-medium">Sort by</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSortBy(option.value)}
                  className={`rounded-full px-3 py-2 text-sm ${sortBy === option.value ? 'bg-[#1F4D3A] text-white' : 'bg-[#F5EBD7] text-[#2C1607]'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + 12)}
                    className="rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#023625]"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-[#d0c0a6] bg-[#fffaf4] p-10 text-center">
              <h3 className="font-display text-3xl font-bold text-[#2C1607]">No products match your filters</h3>
              <p className="mt-3 text-[#5A3E2B]">Try a different category, lower your price range, or search for a broader keyword.</p>
              <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-semibold text-white">
                Reset filters
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
