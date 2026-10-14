import { Link, useLocation } from 'react-router-dom';

export function AuthPage() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';
  const isForgot = location.pathname === '/forgot-password';

  return (
    <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[1.75rem] border border-[#efe0cf] bg-white p-8 shadow-soft">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Demo account</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">
          {isLogin ? 'Login' : isRegister ? 'Register' : 'Reset password'}
        </h1>

        <div className="mt-6 space-y-4">
          {!isForgot && (
            <div>
              <label className="text-sm font-medium text-[#2C1607]">Email</label>
              <input className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]" placeholder="you@example.com" />
            </div>
          )}

          {isForgot && (
            <div>
              <label className="text-sm font-medium text-[#2C1607]">Mobile or email</label>
              <input className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]" placeholder="Enter your contact" />
            </div>
          )}

          {!isForgot && (
            <div>
              <label className="text-sm font-medium text-[#2C1607]">Password</label>
              <input type="password" className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]" placeholder="••••••••" />
            </div>
          )}

          {isRegister && (
            <div>
              <label className="text-sm font-medium text-[#2C1607]">Phone</label>
              <input className="mt-2 w-full rounded-xl border border-[#eae0d5] bg-[#fffaf4] px-4 py-3 outline-none focus:border-[#1F4D3A]" placeholder="98765 43210" />
            </div>
          )}

          <button type="button" className="mt-2 w-full rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-semibold text-white">
            {isLogin ? 'Login' : isRegister ? 'Create account' : 'Send reset link'}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-[#5A3E2B]">
          {isLogin && <Link to="/forgot-password" className="font-semibold text-[#1F4D3A]">Forgot password?</Link>}
          {isRegister && <Link to="/login" className="font-semibold text-[#1F4D3A]">Already have an account?</Link>}
          {!isLogin && !isRegister && <Link to="/login" className="font-semibold text-[#1F4D3A]">Back to login</Link>}
        </div>
      </div>
    </div>
  );
}
