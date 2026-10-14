import { Link } from 'react-router-dom';
import { storeConfig } from '../config/store.config';

export function Footer() {
  return (
    <footer className="bg-[#1F4D3A] text-[#f4eee8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-2xl font-bold">{storeConfig.brandName}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#dfe8e1]">
            {storeConfig.bio.short}
          </p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4b25a]">
            {storeConfig.bio.taglineBottom}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b25a]">Shop Collections</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#e8efe9]">
            <li><Link to="/shop" className="hover:text-white transition">Shop All</Link></li>
            <li><Link to="/category/sweets" className="hover:text-white transition">Traditional Sweets</Link></li>
            <li><Link to="/category/snacks" className="hover:text-white transition">Crispy Snacks</Link></li>
            <li><Link to="/category/pickles" className="hover:text-white transition">Authentic Pickles</Link></li>
            <li><Link to="/category/podis" className="hover:text-white transition">Aromatic Podis</Link></li>
            <li><Link to="/category/combos" className="hover:text-white transition">Gift Hampers &amp; Combos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b25a]">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#e8efe9]">
            <li><Link to="/policies/about" className="hover:text-white transition">Our Story / About Us</Link></li>
            <li><Link to="/policies/returns" className="hover:text-white transition">Return Policy</Link></li>
            <li><Link to="/policies/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/policies/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/account" className="hover:text-white transition">My Account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b25a]">Our Kitchen &amp; Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[#e8efe9]">
            <li><strong className="text-white">Phone / WhatsApp:</strong><br />{storeConfig.placeholder.phone}</li>
            <li><strong className="text-white">Email:</strong><br />{storeConfig.placeholder.email}</li>
            <li><strong className="text-white">Address:</strong><br />{storeConfig.placeholder.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-[#dfe8e1]">
        © 2026 {storeConfig.brandName}. Authentic Homemade Telugu Goodness.
      </div>
    </footer>
  );
}
