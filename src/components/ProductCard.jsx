import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleFavorite, setCartOpen } from '../store/actions';
import { selectFavorites } from '../store/selectors';
import { SIZES, formatPrice, discountOf } from '../data/products';
import Jersey from './Jersey';

export default function ProductCard({ product, index }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFav = favorites.includes(product.id);

  const [size, setSize] = useState('M'); // local state per card
  const [justAdded, setJustAdded] = useState(false);
  const off = discountOf(product);

  const handleAdd = () => {
    dispatch(addToCart(product.id, size));
    dispatch(setCartOpen(true));
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article
      className="card"
      style={{ '--glow': product.colors.accent, '--i': index % 12 }}
    >
      <div className="card-stage">
        <span className="card-no" aria-hidden="true">{product.number}</span>
        <div className="card-jersey">
          <Jersey product={product} />
        </div>

        <span className={`card-tag ${product.kit === 'Retro' ? 'retro' : ''}`}>
          {product.kit === 'Retro' ? `Retro ${product.season}` : product.kit}
        </span>
        {off > 0 && <span className="card-off">−{off}%</span>}

        <button
          className={`fav ${isFav ? 'on' : ''}`}
          aria-pressed={isFav}
          aria-label={isFav ? 'Remove from saved' : 'Save this kit'}
          onClick={() => dispatch(toggleFavorite(product.id))}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M12 21s-7.500-4.600-9.600-9.200C1 8.600 2.800 5 6.200 5c2.100 0 3.400 1.100 5.800 3.400C14.400 6.100 15.700 5 17.800 5c3.400 0 5.200 3.600 3.800 6.800C19.500 16.400 12 21 12 21z"
              fill={isFav ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="card-body">
        <div className="card-head">
          <h3>{product.name}</h3>
          <p className="card-meta">
            {product.type === 'National' ? 'National team' : product.league} ·{' '}
            {product.kit === 'Retro' ? product.season : `${product.kit} ${product.season}`}
          </p>
        </div>

        <div className="card-price">
          <b>{formatPrice(product.price)}</b>
          {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
        </div>

        <div className="sizes" role="radiogroup" aria-label="Size">
          {SIZES.map((s) => (
            <button
              key={s}
              role="radio"
              aria-checked={s === size}
              className={s === size ? 'on' : ''}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <button className={`btn btn-solid ${justAdded ? 'done' : ''}`} onClick={handleAdd}>
          {justAdded ? 'Added' : `Add to cart · ${size}`}
        </button>
      </div>
    </article>
  );
}
