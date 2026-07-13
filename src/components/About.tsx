export default function About() {
  return (
    <section id="chi-siamo" className="border-y border-paper/10 bg-ink-soft py-12 sm:py-14 lg:py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,10rem)_1fr] lg:gap-12 xl:gap-16">
          <div className="text-center lg:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-green">La nostra storia</span>
            <p className="mt-2 font-display text-5xl font-bold leading-none text-brand-green sm:text-6xl">2007</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-steel sm:text-xs">
              Dal nostro inizio
            </p>
          </div>

          <div className="max-w-3xl text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:text-4xl">
              Chi siamo
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/75 sm:text-base lg:text-lg lg:leading-relaxed">
              ECO SERVIZI JMC è gestita da due fratelli che dal 2007 si occupano di
              commercio e gestione di metalli ferrosi e non ferrosi nelle Marche.
              Conosciamo il territorio, i cantieri e chi ha bisogno di un referente
              diretto: niente intermediari, solo chi fa questo lavoro ogni giorno con
              serietà, rapidità e documentazione in regola.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
