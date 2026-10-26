import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, setCartOpen } from '../store/actions';
import {
  selectCartOpen,
  selectCartLines,
  selectCartTotal,
  selectCartCount,
  selectCartSavings,
} from '../store/selectors';
import { formatPrice, FREE_DELIVERY_FROM } from '../data/products';
import CartItem from './CartItem';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const open = useSelector(selectCartOpen);
  const lines = useSelector(selectCartLines);
  const total = useSelector(selectCartTotal);
  const count = useSelector(selectCartCount);
  const savings = useSelector(selectCartSavings);

  const close = () => dispatch(setCartOpen(false));

  // Close on Escape, lock page scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && dispatch(setCartOpen(false));
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, dispatch]);

  const remaining = Math.max(FREE_DELIVERY_FROM - total, 0);
  const progress = Math.min((total / FREE_DELIVERY_FROM) * 100, 100);

  return (
    <>
      <div className={`scrim ${open ? 'show' : ''}`} onClick={close} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open} aria-label="Shopping cart">
        <div className="drawer-head">
          <div>
            <p className="label">02 / Your cart</p>
            <h2>
              {String(count).padStart(2, '0')} {count === 1 ? 'item' : 'items'}
            </h2>
          </div>
          <button className="close" onClick={close} aria-label="Close cart">
            Close
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="drawer-empty">
            <p className="empty-big">00</p>
            <p>Your cart is empty. Pick your team.</p>
            <button
              className="btn btn-line"
              onClick={() => {
                close();
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse the kit room
            </button>
          </div>
        ) : (
          <>
            <div className="ship">
              <p>
                {remaining > 0 ? (
                  <>
                    <b>{formatPrice(remaining)}</b> more for free delivery
                  </>
                ) : (
                  <b>Free delivery unlocked</b>
                )}
              </p>
              <div className="ship-bar">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>

            <ul className="lines">
              {lines.map((line) => (
                <CartItem key={line.key} line={line} />
              ))}
            </ul>

            <div className="drawer-foot">
              {savings > 0 && (
                <div className="sum-row">
                  <span>You save</span>
                  <span>{formatPrice(savings)}</span>
                </div>
              )}
              <div className="sum-row sum-total">
                <span>Total</span>
                <b>{formatPrice(total)}</b>
              </div>
            
              <button className="btn-link" onClick={() => dispatch(clearCart())}>
                Empty the cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
