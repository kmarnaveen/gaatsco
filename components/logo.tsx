export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="currentColor" />

      {/* Letter G with Financial Graph Element */}
      <path
        d="M100 45 C70 45, 50 65, 50 95 C50 125, 70 145, 100 145 C115 145, 128 140, 138 132 L138 105 L105 105 L105 115 L125 115 C120 125, 110 135, 100 135 C75 135, 60 120, 60 95 C60 70, 75 55, 100 55 C115 55, 128 62, 135 73 L145 68 C135 55, 120 45, 100 45 Z"
        fill="white"
        opacity="0.95"
      />

      {/* Stylized Rising Graph Line */}
      <path
        d="M115 85 L125 75 L135 80 L145 65"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />

      {/* Graph Points */}
      <circle cx="115" cy="85" r="2.5" fill="white" opacity="0.8" />
      <circle cx="125" cy="75" r="2.5" fill="white" opacity="0.8" />
      <circle cx="135" cy="80" r="2.5" fill="white" opacity="0.8" />
      <circle cx="145" cy="65" r="2.5" fill="white" opacity="0.8" />
    </svg>
  )
}

export function LogoMark({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="currentColor" />

      {/* Letter G */}
      <path
        d="M100 45 C70 45, 50 65, 50 95 C50 125, 70 145, 100 145 C115 145, 128 140, 138 132 L138 105 L105 105 L105 115 L125 115 C120 125, 110 135, 100 135 C75 135, 60 120, 60 95 C60 70, 75 55, 100 55 C115 55, 128 62, 135 73 L145 68 C135 55, 120 45, 100 45 Z"
        fill="white"
        opacity="0.95"
      />

      {/* Rising Graph */}
      <path
        d="M115 85 L125 75 L135 80 L145 65"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <circle cx="115" cy="85" r="2.5" fill="white" opacity="0.8" />
      <circle cx="125" cy="75" r="2.5" fill="white" opacity="0.8" />
      <circle cx="135" cy="80" r="2.5" fill="white" opacity="0.8" />
      <circle cx="145" cy="65" r="2.5" fill="white" opacity="0.8" />
    </svg>
  )
}
