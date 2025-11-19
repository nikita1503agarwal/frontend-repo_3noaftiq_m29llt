export default function Testimonials() {
  return (
    <section className="bg-[#0b0b0c] text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="font-serif text-2xl md:text-3xl text-center mb-10">DIREKTNO IZ VAŠIH INBOXA I OBJAVA.</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <p className="italic text-slate-200 mb-3">“Cijeli život imam problem …”</p>
            <p className="text-sm text-slate-400">— Ivana, Zagreb</p>
            <div className="mt-4 h-44 rounded-xl bg-gradient-to-br from-amber-100/10 to-amber-300/10 border border-amber-200/20" />
          </div>
          <div className="rounded-2xl border border-amber-200/20 bg-white/5 p-6">
            <p className="italic text-slate-200 mb-3">“Nakon 40-te koža mi je počela gubiti sjaj …”</p>
            <p className="text-sm text-slate-400">— Marija, Osijek</p>
            <div className="mt-4 h-44 rounded-xl bg-gradient-to-br from-amber-100/10 to-amber-300/10 border border-amber-200/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
