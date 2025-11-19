import { Star } from 'lucide-react';

export default function Product() {
  return (
    <section id="product" className="bg-[#0c0c0d] text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* Image placeholder */}
        <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-4 flex items-center justify-center">
          <div className="h-[420px] w-full rounded-xl bg-gradient-to-br from-amber-100/10 to-amber-300/10 border border-amber-200/20" />
        </div>

        {/* Content */}
        <div>
          <h3 className="font-serif text-3xl mb-2">Louré 24K Gold Serum</h3>
          <p className="text-slate-300 mb-4">Garancija za nultu iritaciju – isprobajte bez brige.</p>
          <div className="flex items-center gap-1 mb-2 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-slate-400">4.9 • 1,248 recenzija</span>
          </div>

          <ul className="list-disc list-inside text-slate-200/90 space-y-1 mb-6">
            <li>Snažna hidratacija i zaglađivanje</li>
            <li>24K zlatne čestice za trenutačni sjaj</li>
            <li>Dermatološki testirano, bez iritacija</li>
            <li>Pogodno za sve tipove kože</li>
          </ul>

          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">1x Louré Serum</p>
                <p className="font-serif text-2xl">28.00€</p>
              </div>
              <button className="rounded-full px-6 py-3 text-slate-900 font-semibold bg-gradient-to-b from-[#F7E3AC] to-[#E7C873] shadow-[0_8px_24px_rgba(247,227,172,0.25)]">NARUČI</button>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Louré set od 2 seruma</p>
                <p className="font-serif text-2xl">50.00€</p>
              </div>
              <button className="rounded-full px-6 py-3 text-slate-900 font-semibold bg-gradient-to-b from-[#F7E3AC] to-[#E7C873] shadow-[0_8px_24px_rgba(247,227,172,0.25)]">NARUČI</button>
            </div>
          </div>

          <div className="mb-6 text-sm text-slate-400">
            <p>Akcija – Ograničeno vrijeme! Stara cijena: 35.00 eura • Popust vrijedi još danas!</p>
            <p>Besplatna dostava • Dermatološki testirano</p>
          </div>
        </div>
      </div>
    </section>
  )
}
