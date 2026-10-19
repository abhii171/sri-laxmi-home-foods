import { ArrowRight, ChevronRight, ShieldCheck, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredCollections, products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const highlights = [
  { title: 'Home-made recipes', description: 'Prepared the old-fashioned way with fresh ingredients.' },
  { title: 'Freshly packed', description: 'Every batch is packed with care for flavor and quality.' },
  { title: 'Trusted by families', description: 'A premium pantry staple for everyday meals and gifting.' },
];

const testimonials = [
  { name: 'Asha R.', quote: 'The banana chips taste exactly like my mom used to make. Fresh, crisp and memorable.' },
  { name: 'Naveen K.', quote: 'Their mango pickle is bold and authentic—rich, spicy and incredibly balanced.' },
  { name: 'Meera S.', quote: 'The masalas feel fresh and fragrant. Perfect for home-cooked meals and festive dishes.' },
];

export function HomePage() {
  const heroProduct = products.find((p) => p.slug.includes('gongura-pachadi') || p.slug.includes('chegodi')) || products[0];

  return (
    <div className="pt-4">
      <section className="bg-[#FFF1EA] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full bg-[#F5EBD7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F4D3A]">
              Pure, homemade & handcrafted
            </div>
            <h1 className="mt-6 max-w-xl font-display text-5xl font-bold leading-tight text-[#2C1607] sm:text-6xl">
              Heritage taste, crafted for your everyday kitchen.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-[#5A3E2B]">
              Discover comforting snacks, aromatic pickles, traditional sweets, and kitchen essentials made with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#023625]">
                Shop now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/category/pickles" className="inline-flex items-center gap-2 rounded-full border border-[#d9c7ab] bg-white px-6 py-3 text-sm font-semibold text-[#2C1607] transition hover:border-[#1F4D3A]">
                Browse pickles
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-soft">
                  <h3 className="font-display text-xl font-bold text-[#1F4D3A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#5A3E2B]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#F5EBD7] p-4 shadow-soft">
            <Link to={`/product/${heroProduct.slug}`} className="group block">
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.2rem] bg-[#fff8f5]/90 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Best seller</div>
                    <h2 className="mt-2 truncate font-display text-2xl font-bold text-[#2C1607]">{heroProduct.name}</h2>
                  </div>
                  <div className="shrink-0 rounded-full bg-[#D9A21B] px-3 py-1 text-xs font-bold text-[#2C1607]">4.9 ★</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Categories</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Curated pantry picks</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F4D3A]">
            Explore all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredCollections.map((collection) => (
            <Link key={collection.slug} to={`/category/${collection.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-[#f0e3d2] bg-white shadow-soft">
              <img src={collection.image} alt={collection.title} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold text-[#2C1607]">{collection.title}</h3>
                <p className="mt-2 text-sm text-[#5A3E2B]">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F5EBD7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Featured picks</div>
              <h2 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Taste the tradition</h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F4D3A]">
              View collection <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: ShoppingBag, title: 'Authentic Recipes', text: 'Prepared the old-fashioned way with pure cow ghee and hand-pounded spices.' },
            { icon: ShieldCheck, title: 'Pure & Wholesome', text: 'Small-batch preparation with zero preservatives, no palm oil, and no artificial colors.' },
            { icon: Star, title: 'Worldwide Delivery', text: 'Delivering comforting homemade flavors fresh across India and internationally.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.5rem] border border-[#f0e3d2] bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EBD7] text-[#1F4D3A]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-[#2C1607]">{title}</h3>
              <p className="mt-2 text-sm text-[#5A3E2B]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-[#2C1607]">What families are saying</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-[1.5rem] border border-[#f0e3d2] bg-white p-6 shadow-soft">
                <div className="flex items-center gap-1 text-[#D9A21B]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-base text-[#5A3E2B]">“{item.quote}”</p>
                <footer className="mt-6 font-semibold text-[#1F4D3A]">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
