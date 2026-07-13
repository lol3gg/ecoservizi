import Reveal from './Reveal'

export default function About() {
  return (
    <section id="chi-siamo" className="border-y border-paper/10 bg-ink-soft py-12 sm:py-14 lg:py-16">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex flex-col items-center">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-green">
                La nostra storia
              </span>
              <p className="mt-2 font-display text-4xl font-bold leading-none text-brand-green sm:text-5xl lg:text-6xl">
                2007
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-steel sm:text-xs">
                Dal nostro inizio
              </p>
            </div>

            <h2 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:mt-10 sm:text-4xl lg:text-4xl lg:leading-none">
              Chi siamo?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-paper/75 sm:mt-6 sm:text-base lg:mt-7 lg:text-lg lg:leading-relaxed">
              ECO SERVIZI JMC è gestita da due fratelli che dal 2007 si occupano di
              commercio e gestione di metalli ferrosi e non ferrosi nelle Marche.
              Conosciamo il territorio, i cantieri e chi ha bisogno di un referente
              diretto: niente intermediari, solo chi fa questo lavoro ogni giorno con
              serietà, rapidità e documentazione in regola.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
