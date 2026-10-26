import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen, setQuery, setCategory } from '../store/actions';
import { selectCartCount, selectFavorites, selectFilters } from '../store/selectors';

export default function Header() {
  const dispatch = useDispatch();
  const count = useSelector(selectCartCount);
  const favorites = useSelector(selectFavorites);
  const { query } = useSelector(selectFilters);

  const goToFavorites = () => {
    dispatch(setCategory('Favorites'));
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <a href="#top" className="brand" aria-label="DIX Kits, home">
        <span className="brand-num">10</span>
        <span className="brand-name">
         DIX<small>Kits</small>
        </span>
      </a>

      <nav className="nav" aria-label="Main">
        <a href="#collection">Collection</a>
        <a href="#about">The idea</a>
      </nav>

      <label className="search">
        <span className="visually-hidden">Search jerseys</span>
        <input
          type="search"
          placeholder="Search team, league, country"
          value={query}
          onChange={(e) => {
            dispatch(setQuery(e.target.value));
            if (e.target.value) {
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </label>

      <button className="head-btn" onClick={goToFavorites}>
        Saved <b>{String(favorites.length).padStart(2, '0')}</b>
      </button>
      <button className="head-btn head-cart" onClick={() => dispatch(setCartOpen(true))}>
        Cart <b>{String(count).padStart(2, '0')}</b>
      </button>
    </header>
  );
}
