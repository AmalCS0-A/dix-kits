import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../store/actions';
import { formatPrice } from '../data/products';
import Jersey from './Jersey';

export default function CartItem({ line }) {
  const dispatch = useDispatch();
  const { product, key, size, qty } = line;

  return (
    <li className="line" style={{ '--glow': product.colors.accent }}>
      <div className="line-thumb">
        <Jersey product={product} />
      </div>

      <div className="line-info">
        <p className="line-name">{product.name}</p>
        <p className="line-meta">
          {product.kit === 'Retro' ? `Retro ${product.season}` : `${product.kit} ${product.season}`} · Size {size}
        </p>

        <div className="qty">
          <button aria-label="Remove one" onClick={() => dispatch(decrementItem(key))}>−</button>
          <span aria-live="polite">{qty}</span>
          <button aria-label="Add one" onClick={() => dispatch(incrementItem(key))}>+</button>
        </div>
      </div>

      <div className="line-end">
        <b>{formatPrice(product.price * qty)}</b>
        <button className="line-remove" onClick={() => dispatch(removeFromCart(key))}>
          Remove
        </button>
      </div>
    </li>
  );
}
