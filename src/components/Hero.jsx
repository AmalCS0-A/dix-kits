import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, setCartOpen } from '../store/actions';
import { products, formatPrice, LEAGUES } from '../data/products';
import Jersey from './Jersey';

// Kits shown on the hero stage (ids from data/products.js)
const FEATURED = [1, 12, 46, 7, 33, 45].map((id) => products.find((p) => p.id === id));

// Pitch markings, drawn once in SVG (viewBox 600 x 600, pitch seen from above)
function PitchLines() {
  return (
    <svg className="pitch-lines" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="30" y="30" width="540" height="540" rx="6" />
        <line x1="30" y1="300" x2="570" y2="300" />
        <circle cx="300" cy="300" r="92" />
        <rect x="150" y="30" width="300" height="118" />
        <rect x="222" y="30" width="156" height="46" />
        <path d="M250 148 A62 62 0 0 0 350 148" />
        <rect x="150" y="452" width="300" height="118" />
        <rect x="222" y="524" width="156" height="46" />
        <path d="M250 452 A62 62 0 0 1 350 452" />
      </g>
      <circle cx="300" cy="300" r="5" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0); // local state: which kit is on the pitch
  const p = FEATURED[index];

  const names = new Set(products.map((x) => x.name)).size;

  const add = () => {
    dispatch(addToCart(p.id, 'M'));
    dispatch(setCartOpen(true));
  };

  return (
    <section id="top" className="hero" style={{ '--glow': p.colors.accent }}>
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="live" /> Matchday · Season 2026/27
        </p>
        <h1 className="hero-title">
          <span>Wear the</span>
          <em>number.</em>
        </h1>
        <p className="hero-lead">
          Real clubs. National teams. From Algiers to Barcelona, pick the shirt
          you would die for and the number on its back.
        </p>

        <div className="now">
          <div>
            <p className="label">On the pitch</p>
            <p className="now-name">{p.name}</p>
            <p className="now-meta">
              {p.kit} kit · {p.type === 'National' ? 'National team' : p.league}
            </p>
          </div>
          <div className="now-buy">
            <p className="now-price">{formatPrice(p.price)}</p>
            <button className="btn btn-solid" onClick={add}>
              Add size M
            </button>
          </div>
        </div>

        <div className="scoreboard" aria-label="The store in numbers">
          <div><b>{products.length}</b><span>Kits</span></div>
          <div><b>{names}</b><span>Clubs &amp; nations</span></div>
          <div><b>{LEAGUES.length}</b><span>Leagues</span></div>
        </div>

        <a className="btn-link" href="#collection">See the full collection ↓</a>
      </div>

      <div className="hero-stage-wrap">
        <div className="stage">
          <PitchLines />
          <p className="stage-no" aria-hidden="true" key={`n${p.id}`}>{p.number}</p>
          <div className="stage-jersey" key={p.id}>
            <Jersey product={p} />
          </div>
        </div>

        <div className="picker" role="tablist" aria-label="Choose a featured kit">
          {FEATURED.map((f, i) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`${f.name} ${f.kit}`}
              className={i === index ? 'on' : ''}
              onClick={() => setIndex(i)}
            >
              <Jersey product={f} />
              <span>{f.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
