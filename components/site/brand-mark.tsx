import { brandMarkPaths, brandMarkViewBox } from '@/content/brand'

type BrandMarkProps = {
  className?: string
  color?: string
  size?: number
}

export function BrandMark({ className, color = 'currentColor', size = 28 }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={color}
      focusable="false"
      height={size * 0.8}
      viewBox={brandMarkViewBox}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {brandMarkPaths.map((path) => <path d={path} key={path} />)}
    </svg>
  )
}
