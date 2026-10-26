import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const STORAGE_KEY = 'dix-maillots-v2';

// Restore the cart and favorites saved by a previous visit.
function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const { cart, favorites } = JSON.parse(raw);
    return {
      cart: Array.isArray(cart) ? cart : [],
      favorites: Array.isArray(favorites) ? favorites : [],
    };
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadSaved(),
});

// Persist on every change.
store.subscribe(() => {
  try {
    const { cart, favorites } = store.getState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, favorites }));
  } catch {
    /* storage may be unavailable, the app still works */
  }
});
