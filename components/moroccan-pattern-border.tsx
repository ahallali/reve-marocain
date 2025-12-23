export function MoroccanPatternBorder({ side }: { side: "left" | "right" }) {
  return (
    <div className={`absolute ${side === "left" ? "left-0" : "right-0"} top-0 bottom-0 w-16 lg:w-24 opacity-40`}>
      <svg className="w-full h-full" viewBox="0 0 100 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="moroccan-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M50 10L58 30L78 30L62 42L70 62L50 50L30 62L38 42L22 30L42 30z"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
              fill="none"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary/20" />
          </pattern>
        </defs>
        <rect width="100" height="800" fill="url(#moroccan-pattern)" />
      </svg>
    </div>
  )
}
