export default function Testimonial() {
  return (
    <section className="bg-paper-dim py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="ticket-edge border border-line bg-white px-4 py-6 pt-5 sm:px-10 sm:py-10 sm:pt-7">
          <span className="font-mono text-xs uppercase tracking-widest text-rust">Recensione cliente</span>
          <blockquote className="mt-4 text-base italic leading-relaxed text-ink sm:text-lg md:text-xl">
            &ldquo;Grazie a ECO SERVIZI JMC abbiamo semplificato la gestione dei
            nostri rifiuti ferrosi, con un servizio efficiente e un supporto
            documentale impeccabile. Professionalità e rapidità garantite.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
