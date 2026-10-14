import { CheckCircle2, HeartHandshake, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { storeConfig } from '../config/store.config';

interface PageContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  promises?: string[];
  contactDetails?: boolean;
}

const policyMap: Record<string, PageContent> = {
  about: {
    title: 'About Sri Laxmi Home Foods',
    subtitle: 'Where Tradition Meets Taste',
    paragraphs: [
      'Welcome to Sri Laxmi Home Foods — where tradition meets taste.',
      'At Sri Laxmi Home Foods, we believe food is more than just a meal; it carries memories, culture, and the warmth of home. Our journey began with a simple mission: to bring authentic homemade flavors to families across the world while preserving the traditional recipes passed down through generations.',
      'Every product at Sri Laxmi Home Foods is prepared with care using quality ingredients, traditional methods, and a passion for authenticity. From pure ghee sweets and traditional snacks to flavorful podis, pickles, and millet-based foods, we strive to deliver freshness and taste in every bite.',
      'We take pride in offering products that reflect the rich flavors of Indian kitchens while maintaining high standards of quality and consistency. Whether you are reliving childhood memories, sharing traditions with family, or discovering authentic flavors for the first time, Sri Laxmi Home Foods is here to bring a piece of home to your table.',
    ],
    promises: [
      'Authentic Traditional Recipes',
      'Quality Ingredients',
      'Homemade Taste',
      'Made with Love',
      'Worldwide Shipping',
    ],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with Sri Laxmi Home Foods',
    paragraphs: [
      'Have questions about an order, custom gift hampers, or bulk inquiries? We would love to hear from you!',
      'Reach out directly via WhatsApp for instant order support and availability confirmations.',
    ],
    contactDetails: true,
  },
  returns: {
    title: 'Returns & Refund Policy',
    subtitle: 'Our commitment to customer satisfaction',
    paragraphs: [
      'At Sri Laxmi Home Foods, we take immense pride in crafting and packaging each batch of sweets, snacks, and pickles with utmost care and hygiene.',
      'Because our products are freshly prepared food items, we accept returns or replacements in the rare event that an item is damaged in transit or incorrect. Please inspect your package upon delivery and contact us within 24 hours of delivery via WhatsApp with your order details and photos.',
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Protecting your personal information',
    paragraphs: [
      'At Sri Laxmi Home Foods, your privacy is critically important to us. We only collect the minimal necessary information required to fulfill and deliver your orders accurately.',
      'We do not sell, rent, or distribute your personal contact information to third parties. All order inquiries and payment confirmations are kept secure.',
    ],
  },
};

export function PolicyPage() {
  const { slug } = useParams();
  const page = policyMap[slug ?? 'about'] ?? policyMap.about;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[1.75rem] border border-[#efe0cf] bg-white p-8 sm:p-12 shadow-soft">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">
          {page.subtitle}
        </div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607] sm:text-5xl">{page.title}</h1>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5A3E2B]">
          {page.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {page.promises && page.promises.length > 0 && (
          <div className="mt-10 rounded-2xl bg-[#FFF1EA] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C8631F]">
              <HeartHandshake className="h-5 w-5" />
              Our Promise
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {page.promises.map((promise) => (
                <div key={promise} className="flex items-center gap-2 text-sm font-medium text-[#2C1607]">
                  <CheckCircle2 className="h-4 w-4 text-[#1F4D3A] shrink-0" />
                  <span>{promise}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 font-display text-lg font-bold text-[#1F4D3A]">
              Sri Laxmi Home Foods — Tradition. Quality. Love.
            </div>
          </div>
        )}

        {page.contactDetails && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#efe0cf] bg-[#fffaf4] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F4D3A]">
                <Phone className="h-4 w-4 text-[#C8631F]" />
                Phone &amp; WhatsApp
              </div>
              <p className="mt-2 text-base font-semibold text-[#2C1607]">{storeConfig.placeholder.phone}</p>
              <a
                href={`https://wa.me/${storeConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block rounded-full bg-[#1F4D3A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#023625]"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-[#efe0cf] bg-[#fffaf4] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F4D3A]">
                <Mail className="h-4 w-4 text-[#C8631F]" />
                Email Support
              </div>
              <p className="mt-2 text-base font-semibold text-[#2C1607] break-all">{storeConfig.placeholder.email}</p>
              <a
                href={`mailto:${storeConfig.placeholder.email}`}
                className="mt-3 inline-block rounded-full border border-[#d9c7ab] px-4 py-2 text-xs font-semibold text-[#2C1607] hover:bg-white"
              >
                Send Email
              </a>
            </div>

            <div className="sm:col-span-2 rounded-2xl border border-[#efe0cf] bg-[#fffaf4] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F4D3A]">
                <MapPin className="h-4 w-4 text-[#C8631F]" />
                Our Kitchen &amp; Physical Address
              </div>
              <p className="mt-2 text-base font-semibold text-[#2C1607]">{storeConfig.placeholder.address}</p>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#efe0cf] pt-6">
          <Link to="/shop" className="inline-flex rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#023625]">
            Explore our collection
          </Link>
          <Link to="/" className="inline-flex rounded-full border border-[#d9c7ab] px-6 py-3 text-sm font-semibold text-[#2C1607] hover:bg-[#f5ebda]">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
