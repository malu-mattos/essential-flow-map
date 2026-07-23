export function EnergyOrb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C7E7F2" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#AFD6B8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FAFAF8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineMint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#AFD6B8" />
          <stop offset="100%" stopColor="#8E9E6F" />
        </linearGradient>
        <linearGradient id="linePetrol" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6BA1AF" />
          <stop offset="100%" stopColor="#C7E7F2" />
        </linearGradient>
        <linearGradient id="lineSand" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#E5D5B3" />
          <stop offset="100%" stopColor="#AFD6B8" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="300" r="240" fill="url(#orbGlow)" />

      {/* concentric organic circles */}
      <circle cx="300" cy="300" r="210" fill="none" stroke="url(#lineMint)" strokeWidth="1.5" opacity="0.7" />
      <circle cx="300" cy="300" r="230" fill="none" stroke="url(#linePetrol)" strokeWidth="1.5" opacity="0.55" strokeDasharray="480 60" />
      <circle cx="300" cy="300" r="250" fill="none" stroke="url(#lineSand)" strokeWidth="1.2" opacity="0.5" strokeDasharray="360 120" />
      <circle cx="300" cy="300" r="270" fill="none" stroke="#6BA1AF" strokeWidth="1" opacity="0.35" strokeDasharray="200 300" />

      {/* silhouette in lotus */}
      <g stroke="#8E9E6F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        {/* head */}
        <circle cx="300" cy="215" r="28" />
        {/* neck + shoulders */}
        <path d="M285 245 Q300 260 315 245" />
        <path d="M225 320 Q240 275 285 268 Q300 264 315 268 Q360 275 375 320" />
        {/* arms resting on knees */}
        <path d="M225 320 Q205 355 210 400 Q220 410 245 405" />
        <path d="M375 320 Q395 355 390 400 Q380 410 355 405" />
        {/* torso */}
        <path d="M255 320 Q270 380 275 405" />
        <path d="M345 320 Q330 380 325 405" />
        {/* lotus legs */}
        <path d="M215 405 Q260 395 300 400 Q340 395 385 405 Q400 430 380 445 Q300 470 220 445 Q200 430 215 405 Z" />
        {/* small leaf on chest */}
        <path d="M298 340 Q305 335 312 340 Q308 348 302 350 Q298 345 298 340 Z" stroke="#AFD6B8" />
      </g>

      {/* floating leaves */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" opacity="0.9">
        <path d="M120 180 Q135 165 150 180 Q140 195 125 195 Q118 190 120 180 Z" stroke="#AFD6B8" />
        <path d="M470 150 Q485 138 500 155 Q490 170 475 168 Q467 162 470 150 Z" stroke="#8E9E6F" />
        <path d="M105 420 Q120 408 135 422 Q126 438 112 436 Q100 430 105 420 Z" stroke="#6BA1AF" />
        <path d="M490 440 Q505 428 520 445 Q510 460 495 458 Q485 452 490 440 Z" stroke="#E5D5B3" />
      </g>

      {/* flowing energy lines */}
      <path d="M80 300 Q180 180 300 200 Q420 220 520 300" fill="none" stroke="#C7E7F2" strokeWidth="1.2" opacity="0.6" />
      <path d="M90 340 Q200 460 300 440 Q420 420 510 340" fill="none" stroke="#AFD6B8" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}
