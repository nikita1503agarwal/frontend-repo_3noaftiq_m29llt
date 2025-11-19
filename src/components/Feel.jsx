export default function Feel() {
  return (
    <section className="bg-[#0c0c0d] text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-amber-300/90 font-serif mb-2">Što Ćete Osjećati?</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <h4 className="font-serif text-xl mb-1">OSJEĆAJ SE KAO KRALJICA</h4>
            <p className="text-slate-300">Vrati samopouzdanje …</p>
          </div>
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <h4 className="font-serif text-xl mb-1">LAKOĆA I UGODA</h4>
            <p className="text-slate-300">Lagana formula …</p>
          </div>
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <h4 className="font-serif text-xl mb-1">NAJBOLJI POKLON ZA SEBE</h4>
            <p className="text-slate-300">Ovo je Vaš trenutak …</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#product" className="inline-flex items-center justify-center rounded-full px-7 py-3 text-slate-900 font-semibold bg-gradient-to-b from-[#F7E3AC] to-[#E7C873] shadow-[0_8px_24px_rgba(247,227,172,0.25)] hover:scale-[1.02] active:scale-[0.99] transition-transform">
            NARUČITE ODMAH I OSJETITE RAZLIKU
          </a>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300/80">
            <span>Dermatološki Testirano</span>
            <span>Garancija Povrata Novca</span>
            <span>Nije Testirano na Životinjama</span>
          </div>
        </div>
      </div>
    </section>
  )
}
