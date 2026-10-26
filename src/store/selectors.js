import { products, getProduct } from '../data/products';

// Selectors read and derive data from the global state.

export const selectCart = (s) => s.cart;
export const selectFavorites = (s) => s.favorites;
export const selectFilters = (s) => s.filters;
export const selectCartOpen = (s) => s.ui.cartOpen;

export const selectCartCount = (s) => s.cart.reduce((n, l) => n + l.qty, 0);

// Cart lines joined with product data
export const selectCartLines = (s) =>
  s.cart
    .map((line) => ({ ...line, product: getProduct(line.productId) }))
    .filter((line) => line.product);

export const selectCartTotal = (s) =>
  s.cart.reduce((sum, l) => {
    const p = getProduct(l.productId);
    return sum + (p ? p.price * l.qty : 0);
  }, 0);

export const selectCartSavings = (s) =>
  s.cart.reduce((sum, l) => {
    const p = getProduct(l.productId);
    return sum + (p && p.oldPrice ? (p.oldPrice - p.price) * l.qty : 0);
  }, 0);

export function selectVisibleProducts(s) {
  const { query, category, league, sort } = s.filters;
  const q = query.trim().toLowerCase();

  let list = products.filter((p) => {
    if (category === 'Favorites' && !s.favorites.includes(p.id)) return false;
    if (category === 'Clubs' && p.type !== 'Club') return false;
    if (category === 'National teams' && p.type !== 'National') return false;
    if (category === 'Retro' && p.kit !== 'Retro') return false;
    if (league !== 'All' && p.league !== league) return false;
    if (!q) return true;
    return [p.name, p.kit, p.season, p.league, p.country, p.type]
      .join(' ')
      .toLowerCase()
      .includes(q);
  });

  switch (sort) {
    case 'price-asc':
      list = [...list].sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list = [...list].sort((a, b) => b.price - a.price);
      break;
    case 'name':
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }
  return list;
}
