# DIX Kits

**Student:** Amel (add your family name here)
**Module:** WAMD, TD-TP 2, ENSTA SS/IA 2026
**Store name:** DIX Kits

## Description

DIX is a small online store for football shirts, built with React and Redux.
Users browse 52 kits from real clubs and national teams (Algeria, Morocco,
Argentina, Brazil, FC Barcelona, Arsenal, AC Milan, Inter Milan, Manchester
United, Manchester City and many more), filter by type and league, pick a size,
save favorites and manage a shopping cart that updates everywhere in real time.

The visual identity is "matchday": pitch green, mowed-turf stripes, white
pitch markings, a lime accent, scoreboard-style numbers and a scrolling ticker of
team names. Each shirt is drawn in SVG by one reusable component, in the
team's signature colours, so no image files are needed.

Real crests, sponsor logos and maker logos are not reproduced (they are
trademarks). Every shirt carries a neutral badge instead. Team names are used for
illustration in a school project and the store is not affiliated with any club.

There is no backend, database, authentication or payment, as required by the lab.

## Technologies used

| Tool | Purpose |
| --- | --- |
| React 18 | UI components, JSX, props, local state |
| Redux Toolkit (`configureStore`) | Creating the Redux store |
| React-Redux | `Provider`, `useSelector`, `useDispatch` |
| Vite | Dev server and build |
| Fontsource | Bebas Neue, Barlow, Barlow Condensed (bundled fonts) |
| Plain CSS | All styling, no UI framework |

## Project structure

```
src/
  main.jsx            entry point, wraps App in <Provider store={store}>
  App.jsx             page layout
  styles.css          all styles
  data/products.js    product catalog and price helpers
  store/
    actionTypes.js    action type constants
    actions.js        action creators
    reducers.js       cart, favorites, filters, ui reducers + rootReducer
    selectors.js      functions that read/derive data from the state
    index.js          store creation + localStorage persistence
  components/         Header, Hero, Ticker, Filters, ProductGrid, ProductCard,
                      CartDrawer, CartItem, Jersey, About, Footer
public/kits/          (optional) real product photos, see "Using real photos"
```

## Main React components

| Component | Role |
| --- | --- |
| `Header` | Brand, search field, saved and cart counters |
| `Hero` | Pitch stage with a featured kit. Local state chooses the kit on stage |
| `Ticker` | Scrolling strip with every club and national team |
| `Filters` | Type tabs, league menu, sort menu, result count |
| `ProductGrid` | Reads the filtered list from Redux, renders the cards 12 at a time (local state) |
| `ProductCard` | One product. Local state for the size; dispatches add and favorite actions |
| `Jersey` | Draws a shirt in SVG from a product (props), or shows `product.image` if set |
| `CartDrawer` | Side panel with the cart, total, savings and free delivery bar |
| `CartItem` | One cart line with quantity buttons and remove |
| `About`, `Footer` | Static content |

## Redux state managed by the application

```js
{
  cart:      [{ key, productId, size, qty }],
  favorites: [productId, ...],
  filters:   { query, category, league, sort },
  ui:        { cartOpen }
}
```

| Action | Effect |
| --- | --- |
| `ADD_TO_CART` | Adds a product+size, or increases its quantity |
| `INCREMENT_ITEM` / `DECREMENT_ITEM` | Changes a cart line quantity (a line at 0 is removed) |
| `REMOVE_FROM_CART` / `CLEAR_CART` | Removes one line / empties the cart |
| `TOGGLE_FAVORITE` | Saves or unsaves a kit |
| `SET_QUERY` / `SET_CATEGORY` / `SET_LEAGUE` / `SET_SORT` | Updates the catalog filters |
| `SET_CART_OPEN` | Opens or closes the cart drawer |

Reducers are pure functions in `store/reducers.js`. Components read the state
with `useSelector` (see `store/selectors.js`) and change it with `useDispatch`.
Local React state (`useState`) is used only for things that do not need to be
shared: the size chosen on a card, the "Added" feedback, the number of cards shown and the featured kit in the hero.

## Implemented features

Required:
- Product catalog with product information
- Reusable components, props, JSX, local state, event handling
- Shopping cart: add, remove, live updates everywhere
- Redux store, actions, reducers, React-Redux

Optional:
- Search (team, league, country, season)
- Filtering by type (Clubs, National teams, Retro, Saved) and by league
- "Show more" pagination
- Sorting (price, name)
- Size selection and quantity management
- Cart total, savings and free delivery progress
- Favorites
- Discount display
- Local storage (cart and favorites survive a page refresh)
- Responsive layout, keyboard support (Escape closes the cart)

## Run the application

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

## Using real photos

The shirts are drawn in SVG. To use a real photo for a product (transparent PNG
or WebP works best), put the file in `public/kits/` and add one line to the
product in `src/data/products.js`:

```js
{ id: 12, name: 'FC Barcelona', ..., image: '/kits/barcelona-home.png' }
```

`Jersey.jsx` shows the photo automatically everywhere (hero, cards, cart).

## Debugging tip

Install the Redux DevTools browser extension: every action listed above
appears in its timeline with the state before and after.
