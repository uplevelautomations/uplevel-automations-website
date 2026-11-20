// UpLevel logo: the step mark plus the serif wordmark (option C, chosen
// 2026-11-20). The same mark is public/favicon.svg.
export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true" style={{ flex: 'none' }}>
      <rect width="96" height="96" rx="22" fill="#c4532f" />
      <path
        d="M22 72H40V54H58V36H76"
        fill="none"
        stroke="#fffaf3"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="76" cy="36" r="7" fill="#fffaf3" />
    </svg>
  )
}

export default function Logo({ size = 30, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * 0.32 }}>
      <LogoMark size={size} />
      <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: size * 0.95, lineHeight: 1, letterSpacing: '-0.01em' }}>
        UpLevel
      </span>
    </span>
  )
}
