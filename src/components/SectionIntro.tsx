type SectionIntroProps = {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  wide?: boolean
  labelClassName?: string
}

export default function SectionIntro({
  label,
  title,
  description,
  align = 'left',
  wide = false,
  labelClassName = 'text-rust',
}: SectionIntroProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''
  const widthClass = wide ? 'section-intro-wide' : 'section-intro'

  return (
    <div className={`${widthClass} ${alignClass}`}>
      <span className={`font-mono text-xs uppercase tracking-widest ${labelClassName}`}>{label}</span>
      <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-paper min-[375px]:text-3xl sm:text-3xl lg:text-4xl lg:leading-none">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-steel sm:text-base lg:mt-4 lg:text-base lg:leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
