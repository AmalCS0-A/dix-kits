 // Every action type in the app lives here, so a typo fails loudly.

// Cart
export const ADD_TO_CART = 'cart/add';
export const REMOVE_FROM_CART = 'cart/remove';
export const INCREMENT_ITEM = 'cart/increment';
export const DECREMENT_ITEM = 'cart/decrement';
export const CLEAR_CART = 'cart/clear';

// Favorites
export const TOGGLE_FAVORITE = 'favorites/toggle';

// Catalog filters
export const SET_QUERY = 'filters/setQuery';
export const SET_CATEGORY = 'filters/setCategory';
export const SET_LEAGUE = 'filters/setLeague';
export const SET_SORT = 'filters/setSort';

// Interface
export const SET_CART_OPEN = 'ui/setCartOpen';
