export default function FAQ() {
  return (
    <section className="bg-[#0b0b0c] text-slate-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="font-serif text-3xl text-center mb-10">Često Postavljana Pitanja (FAQ)</h3>
        <div className="space-y-4">
          <details className="rounded-xl border border-amber-200/20 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Kako koristiti serum?</summary>
            <p className="mt-2 text-slate-300">Nanijeti 2-3 kapi na čistu kožu ujutro i/ili navečer, prije kreme.</p>
          </details>
          <details className="rounded-xl border border-amber-200/20 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Je li pogodno za osjetljivu kožu?</summary>
            <p className="mt-2 text-slate-300">Da, dermatološki testirano i formulirano za minimalan rizik od iritacije.</p>
          </details>
          <details className="rounded-xl border border-amber-200/20 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Koliko brzo ću vidjeti rezultate?</summary>
            <p className="mt-2 text-slate-300">Prvi sjaj vidljiv je odmah, a puni efekt u roku od nekoliko tjedana redovite uporabe.</p>
          </details>
          <details className="rounded-xl border border-amber-200/20 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">Kako radi povrat?</summary>
            <p className="mt-2 text-slate-300">Ako niste zadovoljni u roku od 30 dana, ostvarujete puni povrat bez pitanja.</p>
          </details>
        </div>
      </div>
    </section>
  )
}
