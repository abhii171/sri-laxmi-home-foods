import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[#efe0cf] bg-white p-10 shadow-soft">
        <div className="font-display text-7xl font-bold text-[#1F4D3A]">404</div>
        <h1 className="mt-5 font-display text-4xl font-bold text-[#2C1607]">Page not found</h1>
        <p className="mt-3 text-[#5A3E2B]">The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#1F4D3A] px-6 py-3 text-sm font-semibold text-white">
          Go back home
        </Link>
      </div>
    </div>
  );
}
