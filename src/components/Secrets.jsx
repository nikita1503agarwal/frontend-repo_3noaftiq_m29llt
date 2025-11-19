export default function Secrets() {
  return (
    <section className="bg-[#0b0b0c] text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">3 Tajne Ove Formule</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <h3 className="font-serif text-xl mb-2">PEPTIDI ZA LICE BEZ BORA</h3>
            <p className="text-slate-300">Peptidi su ključ …</p>
            <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-amber-100/10 to-amber-300/10 border border-amber-200/20" />
          </div>
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <h3 className="font-serif text-xl mb-2">5X JAČA HIDRATACIJA</h3>
            <p className="text-slate-300">Naša jedinstvena kombinacija …</p>
            <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-amber-100/10 to-amber-300/10 border border-amber-200/20" />
          </div>
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <h3 className="font-serif text-xl mb-2">ZLATNI SJAJ I ČISTOĆA</h3>
            <p className="text-slate-300">Čestice 24K zlata …</p>
            <div className="mt-4 h-28 rounded-xl bg-gradient-to-br from-amber-100/10 to-amber-300/10 border border-amber-200/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
