interface LRLogoProps {
  size?: number
  className?: string
}

export function LRLogo({ size = 32, className = "" }: LRLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      {/* Simplified LR logo - L shape */}
      <path d="M15 15 L15 75 L45 75 L45 65 L25 65 L25 15 Z" />
      {/* R shape */}
      <path d="M55 15 L55 75 L65 75 L65 50 L75 50 L85 75 L95 75 L82 47 C87 45 90 40 90 32 C90 22 82 15 72 15 Z M65 25 L72 25 C76 25 80 27 80 32 C80 37 76 40 72 40 L65 40 Z" />
    </svg>
  )
}
