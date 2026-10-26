import { useId } from 'react';

// One football shirt, drawn in SVG (viewBox 0 0 400 420).
// If a product has an `image`, the real photo is shown instead.

const BODY =
  'M158 20 L96 42 L20 112 L62 168 L102 138 L102 388 Q200 404 298 388 L298 138 L338 168 L380 112 L304 42 L242 20 Q200 66 158 20 Z';
const SLEEVE_L = 'M96 42 L20 112 L62 168 L102 138 Q110 90 96 42 Z';
const SLEEVE_R = 'M304 42 L380 112 L338 168 L298 138 Q290 90 304 42 Z';
const NECK_BACK = 'M158 20 Q200 -4 242 20 Q200 66 158 20 Z';
const COLLAR_FRONT = 'M158 20 Q200 66 242 20';

function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
const readableOn = (hex) => (luminance(hex) > 0.62 ? '#141414' : '#f6f6ef');

function Pattern({ type, color }) {
  switch (type) {
    case 'stripes': {
      const n = 9;
      const w = 400 / n;
      return Array.from({ length: n }, (_, i) =>
        i % 2 ? <rect key={i} x={i * w} y="0" width={w + 0.5} height="420" fill={color} /> : null
      );
    }
    case 'pinstripe':
      return Array.from({ length: 26 }, (_, i) => (
        <rect key={i} x={10 + i * 15} y="0" width="3" height="420" fill={color} opacity="0.85" />
      ));
    case 'hoops':
      return Array.from({ length: 10 }, (_, i) =>
        i % 2 ? <rect key={i} x="0" y={i * 42} width="400" height="42.5" fill={color} /> : null
      );
    case 'halves':
      return <rect x="200" y="0" width="200" height="420" fill={color} />;
    case 'sash':
      return <rect x="-120" y="185" width="640" height="76" fill={color} transform="rotate(32 200 223)" />;
    case 'vband':
      return <rect x="164" y="0" width="72" height="420" fill={color} />;
    case 'chestband':
      return <rect x="0" y="150" width="400" height="66" fill={color} />;
    default:
      return null;
  }
}

export default function Jersey({ product }) {
  const uid = useId().replace(/:/g, '');
  const label = `${product.name} ${product.kit} jersey`;

  if (product.image) {
    return <img className="jersey-svg jersey-img" src={product.image} alt={label} loading="lazy" />;
  }

  const { primary, secondary, accent, sleeve } = product.colors;
  const isGradient = product.pattern === 'gradient';
  const onAccent = readableOn(accent);
  const onBody = readableOn(primary);

  return (
    <svg
      viewBox="0 0 400 420"
      role="img"
      aria-label={label}
      className="jersey-svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={`c${uid}`}>
          <path d={BODY} />
        </clipPath>
        <linearGradient id={`g${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={primary} />
          <stop offset="1" stopColor={secondary} />
        </linearGradient>
        {/* light from top-left, shade to bottom-right */}
        <linearGradient id={`l${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id={`s${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        {/* breathable mesh fabric */}
        <pattern id={`m${uid}`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <circle cx="1.8" cy="1.8" r="0.9" fill="#000" opacity="0.1" />
          <circle cx="5.3" cy="5.3" r="0.9" fill="#fff" opacity="0.08" />
        </pattern>
      </defs>

      {/* inside of the back of the neck */}
      <path d={NECK_BACK} fill={primary} />
      <path d={NECK_BACK} fill="#000" opacity="0.38" />

      <g clipPath={`url(#c${uid})`}>
        <rect width="400" height="420" fill={isGradient ? `url(#g${uid})` : primary} />
        <Pattern type={product.pattern} color={secondary} />

        {sleeve && (
          <>
            <path d={SLEEVE_L} fill={sleeve} />
            <path d={SLEEVE_R} fill={sleeve} />
          </>
        )}

        {/* sleeve cuffs */}
        <line x1="21" y1="113" x2="63" y2="169" stroke={accent} strokeWidth="20" />
        <line x1="379" y1="113" x2="337" y2="169" stroke={accent} strokeWidth="20" />

        {/* sleeve shading + set-in seams */}
        <path d={SLEEVE_L} fill={`url(#s${uid})`} />
        <path d={SLEEVE_R} fill={`url(#s${uid})`} />
        <path d="M96 42 Q110 90 102 138" fill="none" stroke="#000" strokeOpacity="0.22" strokeWidth="2" />
        <path d="M304 42 Q290 90 298 138" fill="none" stroke="#000" strokeOpacity="0.22" strokeWidth="2" />

        {/* folds */}
        <path d="M150 170 Q166 290 148 392" stroke="#000" strokeOpacity="0.07" strokeWidth="16" fill="none" />
        <path d="M262 176 Q248 290 266 392" stroke="#000" strokeOpacity="0.06" strokeWidth="14" fill="none" />

        {/* hem stitching */}
        <path d="M102 378 Q200 394 298 378" fill="none" stroke="#000" strokeOpacity="0.2" strokeWidth="1.6" strokeDasharray="4 3" />

        {/* light + mesh */}
        <rect width="400" height="420" fill={`url(#l${uid})`} />
        <rect width="400" height="420" fill={`url(#m${uid})`} />
      </g>

      <path d={BODY} fill="none" stroke="#000" strokeOpacity="0.3" strokeWidth="1.6" strokeLinejoin="round" />

      {/* collar */}
      <path d={COLLAR_FRONT} fill="none" stroke={accent} strokeWidth="12" strokeLinecap="round" />
      <path d={COLLAR_FRONT} fill="none" stroke="#000" strokeOpacity="0.18" strokeWidth="1.5" transform="translate(0 6)" />

      {/* neutral badge (real crests are not reproduced) */}
      <g transform="translate(148 116)">
        <path
          d="M-15 -17 H15 V6 Q15 18 0 25 Q-15 18 -15 6 Z"
          fill={accent}
          stroke={onBody}
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
        <path
          d="M0 -9 L2.9 -2.7 L9.6 -2 L4.6 2.5 L6 9.2 L0 5.8 L-6 9.2 L-4.6 2.5 L-9.6 -2 L-2.9 -2.7 Z"
          fill={onAccent}
          opacity="0.92"
        />
      </g>

      {/* maker mark, opposite chest */}
      <g transform="translate(252 112)" fill={onBody} opacity="0.8">
        <rect x="-10" y="0" width="20" height="3.6" rx="1.8" />
        <rect x="-6" y="7.5" width="12" height="3.6" rx="1.8" />
      </g>
    </svg>
  );
}
