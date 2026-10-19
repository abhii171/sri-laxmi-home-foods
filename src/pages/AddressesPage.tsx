import { MapPin, Plus } from 'lucide-react';

export function AddressesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8631F]">Addresses</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-[#2C1607]">Saved delivery addresses</h1>
      </div>

      <div className="space-y-5">
        <div className="rounded-[1.5rem] border border-[#efe0cf] bg-white p-5 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EBD7] text-[#1F4D3A]">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <div className="font-semibold text-[#2C1607]">Home</div>
                <div className="rounded-full bg-[#F5EBD7] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1F4D3A]">Default</div>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#5A3E2B]">
                123 Heritage Lane, Hyderabad, Telangana - 500001
              </p>
            </div>
          </div>
        </div>

        <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-semibold text-white">
          <Plus className="h-4 w-4" />
          Add address
        </button>
      </div>
    </div>
  );
}
