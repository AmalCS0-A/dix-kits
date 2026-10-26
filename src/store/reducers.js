import { combineReducers } from '@reduxjs/toolkit';
import * as T from './actionTypes';

// A reducer is a pure function: (state, action) => newState.
// It never mutates the previous state, it returns a fresh copy.

// cart: array of { key, productId, size, qty }
export function cartReducer(state = [], action) {
  switch (action.type) {
    case T.ADD_TO_CART: {
      const { productId, size } = action.payload;
      const key = `${productId}-${size}`;
      const existing = state.find((line) => line.key === key);
      if (existing) {
        return state.map((line) =>
          line.key === key ? { ...line, qty: line.qty + 1 } : line
        );
      }
      return [...state, { key, productId, size, qty: 1 }];
    }
    case T.INCREMENT_ITEM:
      return state.map((line) =>
        line.key === action.payload ? { ...line, qty: Math.min(line.qty + 1, 9) } : line
      );
    case T.DECREMENT_ITEM:
      return state
        .map((line) =>
          line.key === action.payload ? { ...line, qty: line.qty - 1 } : line
        )
        .filter((line) => line.qty > 0);
    case T.REMOVE_FROM_CART:
      return state.filter((line) => line.key !== action.payload);
    case T.CLEAR_CART:
      return [];
    default:
      return state;
  }
}

// favorites: array of product ids
export function favoritesReducer(state = [], action) {
  if (action.type === T.TOGGLE_FAVORITE) {
    return state.includes(action.payload)
      ? state.filter((id) => id !== action.payload)
      : [...state, action.payload];
  }
  return state;
}

const initialFilters = { query: '', category: 'All', league: 'All', sort: 'featured' };

export function filtersReducer(state = initialFilters, action) {
  switch (action.type) {
    case T.SET_QUERY:
      return { ...state, query: action.payload };
    case T.SET_CATEGORY:
      return { ...state, category: action.payload };
    case T.SET_LEAGUE:
      return { ...state, league: action.payload };
    case T.SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

export function uiReducer(state = { cartOpen: false }, action) {
  if (action.type === T.SET_CART_OPEN) {
    return { ...state, cartOpen: action.payload };
  }
  return state;
}

export const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  filters: filtersReducer,
  ui: uiReducer,
});
