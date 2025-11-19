import Hero from './components/Hero';
import Secrets from './components/Secrets';
import Feel from './components/Feel';
import Testimonials from './components/Testimonials';
import Product from './components/Product';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Elegant top bar */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-200 to-amber-500" />
            <span className="font-serif text-white">Louré</span>
          </div>
          <a href="#product" className="rounded-full px-4 py-2 text-slate-900 text-sm font-semibold bg-gradient-to-b from-[#F7E3AC] to-[#E7C873]">NARUČI</a>
        </div>
      </header>

      <main>
        <Hero />
        <Secrets />
        <Feel />
        <Testimonials />
        <Product />
        <FAQ />
        <Guarantee />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
