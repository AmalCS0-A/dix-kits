import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setLeague, setQuery } from '../store/actions';
import { selectFilters, selectVisibleProducts } from '../store/selectors';
import Filters from './Filters';
import ProductCard from './ProductCard';

const PAGE = 12;

export default function ProductGrid() {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisibleProducts);
  const filters = useSelector(selectFilters);
  const [shown, setShown] = useState(PAGE); // local state: how many cards are displayed

  // Back to the first page whenever the filters change.
  useEffect(() => setShown(PAGE), [filters.category, filters.league, filters.query, filters.sort]);

  const reset = () => {
    dispatch(setCategory('All'));
    dispatch(setLeague('All'));
    dispatch(setQuery(''));
  };

  const list = visible.slice(0, shown);
  const left = visible.length - list.length;

  return (
    <section id="collection" className="collection">
      <div className="section-head">
        <p className="label">01 / The kit room</p>
        <h2>
          Pick your side.
        </h2>
      </div>

      <Filters count={visible.length} />

      {visible.length === 0 ? (
        <div className="empty">
          <p className="empty-big">0–0</p>
          <p>No kit matches that. Try another team or league.</p>
          <button className="btn btn-line" onClick={reset}>Clear filters</button>
        </div>
      ) : (
        <>
          <div className="grid">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          {left > 0 && (
            <div className="more">
              <button className="btn btn-line" onClick={() => setShown((n) => n + PAGE)}>
                Show {Math.min(PAGE, left)} more · {left} left
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
