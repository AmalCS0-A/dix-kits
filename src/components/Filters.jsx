import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setLeague, setSort } from '../store/actions';
import { selectFilters } from '../store/selectors';
import { CATEGORIES, LEAGUES } from '../data/products';

export default function Filters({ count }) {
  const dispatch = useDispatch();
  const { category, league, sort, query } = useSelector(selectFilters);

  return (
    <div className="filters">
      <div className="tabs" role="tablist" aria-label="Kit type">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === category}
            className={c === category ? 'on' : ''}
            onClick={() => dispatch(setCategory(c))}
          >
            {c === 'Favorites' ? 'Saved' : c}
          </button>
        ))}
      </div>

      <div className="filters-right">
        <label className="select">
          <span>League</span>
          <select value={league} onChange={(e) => dispatch(setLeague(e.target.value))}>
            <option value="All">All leagues</option>
            {LEAGUES.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
        <label className="select">
          <span>Sort</span>
          <select value={sort} onChange={(e) => dispatch(setSort(e.target.value))}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="name">Team, A to Z</option>
          </select>
        </label>
        <span className="result-count">
          {String(count).padStart(2, '0')} {count === 1 ? 'kit' : 'kits'}
          {query && <> for “{query}”</>}
        </span>
      </div>
    </div>
  );
}
