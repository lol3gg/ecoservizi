type LogoProps = {
  variant?: 'default' | 'light'
  size?: 'sm' | 'lg'
  className?: string
}

export default function Logo({ variant = 'default', size = 'sm', className = '' }: LogoProps) {
  const isLarge = size === 'lg'
  const heightClass = isLarge
    ? 'h-24 w-auto min-[375px]:h-28 sm:h-32 md:h-36'
    : 'h-9 w-auto min-[375px]:h-10 sm:h-11 md:h-12'

  const src = variant === 'light' ? '/images/logo-light.png' : '/images/logo.png'

  return (
    <img
      src={src}
      alt="ECO SERVIZI JMC"
      className={`${heightClass} max-w-[min(100%,200px)] object-contain object-left sm:max-w-none ${className}`}
      width={isLarge ? 180 : 72}
      height={isLarge ? 144 : 48}
      decoding="async"
    />
  )
}
