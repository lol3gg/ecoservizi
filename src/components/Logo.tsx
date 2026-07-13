import { asset } from '../lib/asset'

type LogoProps = {
  variant?: 'default' | 'light'
  size?: 'sm' | 'header' | 'lg'
  className?: string
}

export default function Logo({ variant = 'default', size = 'sm', className = '' }: LogoProps) {
  const heightClass =
    size === 'lg'
      ? 'h-24 w-auto min-[375px]:h-28 sm:h-32 md:h-36'
      : size === 'header'
        ? 'h-12 w-auto min-[375px]:h-14 max-w-none object-contain object-center lg:h-11 lg:object-left xl:h-12'
        : 'h-9 w-auto min-[375px]:h-10 sm:h-11 md:h-12'

  const src = variant === 'light' ? asset('images/logo-light.png') : asset('images/logo.png')

  return (
    <img
      src={src}
      alt="ECO SERVIZI JMC"
      className={`${heightClass} ${size === 'sm' ? 'max-w-[min(100%,200px)] object-contain object-left sm:max-w-none' : ''} ${className}`}
      width={size === 'lg' ? 180 : size === 'header' ? 96 : 72}
      height={size === 'lg' ? 144 : size === 'header' ? 56 : 48}
      decoding="async"
    />
  )
}
