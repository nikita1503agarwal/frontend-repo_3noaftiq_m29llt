import Spline from '@splinetool/react-spline';
import { ShieldCheck, Truck, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0d] text-white">
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,197,99,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,215,128,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16 lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <p className="text-gold-300/90 font-serif text-lg tracking-wide mb-3" style={{color:'#F5C563'}}>
            Formula za kožu bez ijedne mane.
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">
            Tvoja koža, ali sjajnija.
          </h1>
          <p className="text-slate-200/90 text-lg md:text-xl mb-8">
            Serum s 24K zlatom koji Vam vraća sjaj.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <a href="#product" className="inline-flex items-center justify-center rounded-full px-7 py-3 text-slate-900 font-semibold bg-gradient-to-b from-[#F7E3AC] to-[#E7C873] shadow-[0_8px_24px_rgba(247,227,172,0.25)] hover:scale-[1.02] active:scale-[0.99] transition-transform">
              NARUČITE SVOJ SJAJ
            </a>
            <span className="text-sm text-slate-300/80">
              Garancija za nultu iritaciju – isprobajte bez rizika.
            </span>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div className="flex items-center gap-2 rounded-lg border border-amber-300/20 bg-white/5 px-4 py-3">
              <Truck className="h-5 w-5 text-amber-300" />
              <span className="text-sm">BESPLATNA DOSTAVA</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-amber-300/20 bg-white/5 px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-amber-300" />
              <span className="text-sm">PLAĆANJE POUZEĆEM</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-amber-300/20 bg-white/5 px-4 py-3">
              <BadgeCheck className="h-5 w-5 text-amber-300" />
              <span className="text-sm">GARANCIJA KVALITETE</span>
            </div>
          </div>
        </div>

        {/* 3D Spline */}
        <div className="mt-10 lg:mt-0 h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-amber-200/20 bg-white/5">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
