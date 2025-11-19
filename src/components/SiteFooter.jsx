export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0b] text-slate-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <p className="font-serif text-xl text-white">Louré</p>
          <p className="text-sm text-slate-400 mt-1">Elegancija, kvaliteta i povjerenje.</p>
        </div>
        <nav className="flex flex-wrap gap-4 justify-center text-sm">
          <a href="#contact" className="hover:text-white">Kontakt</a>
          <a href="#privacy" className="hover:text-white">Privatnost</a>
          <a href="#terms" className="hover:text-white">Uvjeti</a>
        </nav>
        <div className="text-sm text-right md:text-left">
          <p>Dermatološki testirano • Plaćanje pouzećem • Besplatna dostava</p>
        </div>
      </div>
    </footer>
  )
}
