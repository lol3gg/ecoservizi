export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-paper/50">
          © {new Date().getFullYear()} ECO SERVIZI JMC SRLS · Fossombrone (PU)
          {' · P.IVA da inserire'}
        </p>
      </div>
    </footer>
  )
}
