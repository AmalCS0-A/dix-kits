import { products } from '../data/products';

// Scrolling strip of every club and nation in the store.
const NAMES = [...new Set(products.map((p) => p.name))];

export default function Ticker() {
  // The list is rendered twice so the CSS loop is seamless.
  const row = (suffix) =>
    NAMES.map((n) => (
      <li key={`${suffix}-${n}`}>
        {n}
        <i aria-hidden="true" />
      </li>
    ));
  return (
    <div className="ticker" aria-label="Clubs and national teams in the store">
      <ul className="ticker-track">
        {row('a')}
        {row('b')}
      </ul>
    </div>
  );
}
