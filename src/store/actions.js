import * as T from './actionTypes';

// Action creators: plain functions that return plain objects.

export const addToCart = (productId, size) => ({
  type: T.ADD_TO_CART,
  payload: { productId, size },
});

export const removeFromCart = (key) => ({ type: T.REMOVE_FROM_CART, payload: key });
export const incrementItem = (key) => ({ type: T.INCREMENT_ITEM, payload: key });
export const decrementItem = (key) => ({ type: T.DECREMENT_ITEM, payload: key });
export const clearCart = () => ({ type: T.CLEAR_CART });

export const toggleFavorite = (productId) => ({
  type: T.TOGGLE_FAVORITE,
  payload: productId,
});

export const setQuery = (query) => ({ type: T.SET_QUERY, payload: query });
export const setCategory = (category) => ({ type: T.SET_CATEGORY, payload: category });
export const setLeague = (league) => ({ type: T.SET_LEAGUE, payload: league });
export const setSort = (sort) => ({ type: T.SET_SORT, payload: sort });

export const setCartOpen = (open) => ({ type: T.SET_CART_OPEN, payload: open });
