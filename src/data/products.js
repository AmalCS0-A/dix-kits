// Real clubs and national teams, drawn in their signature colours.
// Crests, sponsors and maker logos are NOT reproduced (see README).
//
// To use a real photo instead of the drawn shirt, drop the file in
// public/kits/ and add  image: '/kits/barcelona-home.png'  to the product.
//
// pattern: how Jersey.jsx paints the shirt
//   solid, stripes, hoops, halves, sash, vband, chestband, pinstripe, gradient
// colors: primary = base, secondary = pattern colour,
//         accent = collar + cuffs, sleeve (optional) = different sleeve colour

export const CATEGORIES = ['All', 'Clubs', 'National teams', 'Retro', 'Favorites'];
export const SIZES = ['S', 'M', 'L', 'XL'];
export const FREE_DELIVERY_FROM = 20000;

export const LEAGUES = [
  'Algeria',
  'Premier League',
  'La Liga',
  'Serie A',
  'Bundesliga',
  'Ligue 1',
  'Other leagues',
  'Africa',
  'Europe',
  'South America',
];

const S = '26/27';

export const products = [
  // ───────── Algeria ─────────
  {
    id: 1, name: 'Algeria', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'Algeria', country: 'Algérie', pattern: 'solid',
    colors: { primary: '#f4f6ee', secondary: '#0b8a3e', accent: '#0b8a3e' },
    image: '/kits/algeria-home.png',
  },
  {
    id: 2, name: 'Algeria', type: 'National', kit: 'Away', season: S, number: 7,
    price: 11900, league: 'Algeria', country: 'Algérie', pattern: 'solid',
    colors: { primary: '#0b8a3e', secondary: '#f4f6ee', accent: '#d21f2b' },
    image: '/kits/algeria-away.png',
  },
  {
    id: 3, name: 'MC Alger', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9800, league: 'Algeria', country: 'Algérie', pattern: 'solid',
    colors: { primary: '#0d8f40', secondary: '#d21f2b', accent: '#d21f2b' },
    image: '/kits/mc-alger-home.png',
  },
  {
    id: 4, name: 'USM Alger', type: 'Club', kit: 'Home', season: S, number: 9,
    price: 9800, league: 'Algeria', country: 'Algérie', pattern: 'stripes',
    colors: { primary: '#d21f2b', secondary: '#141414', accent: '#141414' },
    image: '/kits/usm-alger-home.png',
  },
  {
    id: 5, name: 'CR Belouizdad', type: 'Club', kit: 'Home', season: S, number: 8,
    price: 9500, league: 'Algeria', country: 'Algérie', pattern: 'solid',
    colors: { primary: '#d21f2b', secondary: '#f4f6ee', accent: '#f4f6ee' },
    image: '/kits/cr-belouizdad-home.png',
  },
  {
    id: 6, name: 'JS Kabylie', type: 'Club', kit: 'Home', season: S, number: 11,
    price: 9500, league: 'Algeria', country: 'Algérie', pattern: 'solid',
    colors: { primary: '#ffd400', secondary: '#0b7a3a', accent: '#0b7a3a', sleeve: '#0b7a3a' },
    image: '/kits/js-kabylie-home.png',
  },

  // ───────── Premier League ─────────
  {
    id: 7, name: 'Arsenal', type: 'Club', kit: 'Home', season: S, number: 7,
    price: 10900, league: 'Premier League', country: 'England', pattern: 'solid',
    colors: { primary: '#ef0107', secondary: '#ffffff', accent: '#ffffff', sleeve: '#f4f4f4' },
    image: '/kits/arsenal-home.png',
  },
  {
    id: 8, name: 'Manchester United', type: 'Club', kit: 'Home', season: S, number: 7,
    price: 10900, league: 'Premier League', country: 'England', pattern: 'solid',
    colors: { primary: '#da291c', secondary: '#141414', accent: '#141414' },
    image: '/kits/manchester-united-home.png',
  },
  {
    id: 9, name: 'Manchester City', type: 'Club', kit: 'Home', season: S, number: 17,
    price: 10900, league: 'Premier League', country: 'England', pattern: 'solid',
    colors: { primary: '#6cabdd', secondary: '#ffffff', accent: '#1c2c5b' },
    image: '/kits/manchester-city-home.png',
  },
  {
    id: 10, name: 'Liverpool', type: 'Club', kit: 'Home', season: S, number: 11,
    price: 10900, oldPrice: 12900, league: 'Premier League', country: 'England', pattern: 'solid',
    colors: { primary: '#c8102e', secondary: '#f4f4f4', accent: '#f4f4f4' },
    image: '/kits/liverpool-home.png',
  },
  {
    id: 11, name: 'Chelsea', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 10500, league: 'Premier League', country: 'England', pattern: 'solid',
    colors: { primary: '#034694', secondary: '#ffffff', accent: '#ffffff' },
    image: '/kits/chelsea-home.png',
  },

  // ───────── La Liga ─────────
  {
    id: 12, name: 'FC Barcelona', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 11500, league: 'La Liga', country: 'España', pattern: 'stripes',
    colors: { primary: '#a50044', secondary: '#004d98', accent: '#edbb00' },
    image: '/kits/fc-barcelona-home.png',
  },
  {
    id: 13, name: 'Real Madrid', type: 'Club', kit: 'Home', season: S, number: 7,
    price: 11500, league: 'La Liga', country: 'España', pattern: 'solid',
    colors: { primary: '#f6f6f2', secondary: '#1e2a5a', accent: '#1e2a5a' },
    image: '/kits/real-madrid-home.png',
  },
  {
    id: 14, name: 'Atlético de Madrid', type: 'Club', kit: 'Home', season: S, number: 19,
    price: 10200, league: 'La Liga', country: 'España', pattern: 'stripes',
    colors: { primary: '#f4f4f4', secondary: '#cb3524', accent: '#1e2a5a' },
    image: '/kits/atletico-de-madrid-home.png',
  },
  {
    id: 15, name: 'Real Betis', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9600, league: 'La Liga', country: 'España', pattern: 'stripes',
    colors: { primary: '#f4f4f4', secondary: '#0bb363', accent: '#0a7a43' },
    image: '/kits/real-betis-home.png',
  },
  {
    id: 16, name: 'FC Barcelona', type: 'Club', kit: 'Away', season: S, number: 9,
    price: 11500, oldPrice: 13500, league: 'La Liga', country: 'España', pattern: 'gradient',
    colors: { primary: '#f2d12b', secondary: '#c8921a', accent: '#a50044' },
    image: '/kits/fc-barcelona-away.png',
  },

  // ───────── Serie A ─────────
  {
    id: 17, name: 'AC Milan', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 10900, league: 'Serie A', country: 'Italia', pattern: 'stripes',
    colors: { primary: '#d3112b', secondary: '#141414', accent: '#141414' },
    image: '/kits/ac-milan-home.png',
  },
  {
    id: 18, name: 'Inter Milan', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 10900, league: 'Serie A', country: 'Italia', pattern: 'stripes',
    colors: { primary: '#141414', secondary: '#0068b3', accent: '#d9b24a' },
    image: '/kits/inter-milan-home.png',
  },
  {
    id: 19, name: 'Juventus', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 10900, league: 'Serie A', country: 'Italia', pattern: 'stripes',
    colors: { primary: '#f4f4f4', secondary: '#141414', accent: '#141414' },
    image: '/kits/juventus-home.png',
  },
  {
    id: 20, name: 'SSC Napoli', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9900, league: 'Serie A', country: 'Italia', pattern: 'solid',
    colors: { primary: '#12a0d7', secondary: '#ffffff', accent: '#ffffff' },
    image: '/kits/ssc-napoli-home.png',
  },

  // ───────── Bundesliga ─────────
  {
    id: 21, name: 'Bayern München', type: 'Club', kit: 'Home', season: S, number: 9,
    price: 10900, league: 'Bundesliga', country: 'Deutschland', pattern: 'solid',
    colors: { primary: '#dc052d', secondary: '#ffffff', accent: '#0a3a8a' },
    image: '/kits/bayern-munchen-home.png',
  },
  {
    id: 22, name: 'Borussia Dortmund', type: 'Club', kit: 'Home', season: S, number: 11,
    price: 10200, league: 'Bundesliga', country: 'Deutschland', pattern: 'solid',
    colors: { primary: '#fde100', secondary: '#141414', accent: '#141414' },
    image: '/kits/borussia-dortmund-home.png',
  },

  // ───────── Ligue 1 ─────────
  {
    id: 23, name: 'Paris Saint-Germain', type: 'Club', kit: 'Home', season: S, number: 7,
    price: 11200, league: 'Ligue 1', country: 'France', pattern: 'vband',
    colors: { primary: '#0a2a5c', secondary: '#da291c', accent: '#da291c' },
    image: '/kits/paris-saint-germain-home.png',
  },
  {
    id: 24, name: 'Olympique de Marseille', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9900, league: 'Ligue 1', country: 'France', pattern: 'solid',
    colors: { primary: '#f6f6f2', secondary: '#2faee0', accent: '#2faee0' },
    image: '/kits/olympique-de-marseille-home.png',
  },

  // ───────── Other leagues ─────────
  {
    id: 25, name: 'Celtic', type: 'Club', kit: 'Home', season: S, number: 8,
    price: 9600, league: 'Other leagues', country: 'Scotland', pattern: 'hoops',
    colors: { primary: '#f4f4f4', secondary: '#0e9a4f', accent: '#0e9a4f' },
    image: '/kits/celtic-home.png',
  },
  {
    id: 26, name: 'Sporting CP', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9600, league: 'Other leagues', country: 'Portugal', pattern: 'hoops',
    colors: { primary: '#f4f4f4', secondary: '#00854a', accent: '#00854a' },
    image: '/kits/sporting-cp-home.png',
  },
  {
    id: 27, name: 'Ajax', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9800, league: 'Other leagues', country: 'Nederland', pattern: 'vband',
    colors: { primary: '#f6f6f2', secondary: '#d2122e', accent: '#d2122e' },
    image: '/kits/ajax-home.png',
  },
  {
    id: 28, name: 'Palmeiras', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9400, league: 'Other leagues', country: 'Brasil', pattern: 'solid',
    colors: { primary: '#006437', secondary: '#ffffff', accent: '#ffffff' },
    image: '/kits/palmeiras-home.png',
  },
  {
    id: 29, name: 'Flamengo', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9400, league: 'Other leagues', country: 'Brasil', pattern: 'hoops',
    colors: { primary: '#c8102e', secondary: '#141414', accent: '#141414' },
    image: '/kits/flamengo-home.png',
  },
  {
    id: 30, name: 'Boca Juniors', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9400, league: 'Other leagues', country: 'Argentina', pattern: 'chestband',
    colors: { primary: '#10307a', secondary: '#f6c90e', accent: '#f6c90e' },
    image: '/kits/boca-juniors-home.png',
  },
  {
    id: 31, name: 'Al Ahly', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9200, league: 'Other leagues', country: 'Egypt', pattern: 'solid',
    colors: { primary: '#d4141f', secondary: '#ffffff', accent: '#ffffff' },
    image: '/kits/al-ahly-home.png',
  },
  {
    id: 32, name: 'Raja Casablanca', type: 'Club', kit: 'Home', season: S, number: 10,
    price: 9200, league: 'Other leagues', country: 'Maroc', pattern: 'solid',
    colors: { primary: '#0a9a4a', secondary: '#ffffff', accent: '#ffffff' },
    image: '/kits/raja-casablanca-home.png',
  },

  // ───────── National teams: Africa ─────────
  {
    id: 33, name: 'Morocco', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'Africa', country: 'Maroc', pattern: 'solid',
    colors: { primary: '#c1272d', secondary: '#006233', accent: '#006233' },
    image: '/kits/morocco-home.png',
  },
  {
    id: 34, name: 'Morocco', type: 'National', kit: 'Away', season: S, number: 7,
    price: 11900, league: 'Africa', country: 'Maroc', pattern: 'solid',
    colors: { primary: '#f4f6ee', secondary: '#006233', accent: '#c1272d' },
    image: '/kits/morocco-away.png',
  },
  {
    id: 35, name: 'Egypt', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11200, league: 'Africa', country: 'Egypt', pattern: 'solid',
    colors: { primary: '#ce1126', secondary: '#141414', accent: '#141414' },
    image: '/kits/egypt-home.png',
  },
  {
    id: 36, name: 'Senegal', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11200, league: 'Africa', country: 'Sénégal', pattern: 'solid',
    colors: { primary: '#f4f6ee', secondary: '#00853f', accent: '#00853f' },
    image: '/kits/senegal-home.png',
  },
  {
    id: 37, name: 'Nigeria', type: 'National', kit: 'Home', season: S, number: 9,
    price: 11200, league: 'Africa', country: 'Nigeria', pattern: 'solid',
    colors: { primary: '#0a8f3c', secondary: '#ffffff', accent: '#ffffff', sleeve: '#f4f6ee' },
    image: '/kits/nigeria-home.png',
  },

  // ───────── National teams: Europe ─────────
  {
    id: 38, name: 'France', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'Europe', country: 'France', pattern: 'solid',
    colors: { primary: '#0b2a6f', secondary: '#ffffff', accent: '#d21f2b' },
    image: '/kits/france-home.png',
  },
  {
    id: 39, name: 'Portugal', type: 'National', kit: 'Home', season: S, number: 7,
    price: 11900, league: 'Europe', country: 'Portugal', pattern: 'solid',
    colors: { primary: '#c8102e', secondary: '#046a38', accent: '#046a38' },
    image: '/kits/portugal-home.png',
  },
  {
    id: 40, name: 'Spain', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'Europe', country: 'España', pattern: 'solid',
    colors: { primary: '#c60b1e', secondary: '#ffc400', accent: '#ffc400' },
    image: '/kits/spain-home.png',
  },
  {
    id: 41, name: 'Germany', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'Europe', country: 'Deutschland', pattern: 'solid',
    colors: { primary: '#f4f4f2', secondary: '#141414', accent: '#141414' },
    image: '/kits/germany-home.png',
  },
  {
    id: 42, name: 'England', type: 'National', kit: 'Home', season: S, number: 9,
    price: 11900, oldPrice: 13900, league: 'Europe', country: 'England', pattern: 'solid',
    colors: { primary: '#f4f4f2', secondary: '#1b2a5c', accent: '#1b2a5c' },
    image: '/kits/england-home.png',
  },
  {
    id: 43, name: 'Italy', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'Europe', country: 'Italia', pattern: 'solid',
    colors: { primary: '#0b5db0', secondary: '#ffffff', accent: '#ffffff' },
    image: '/kits/italy-home.png',
  },
  {
    id: 44, name: 'Netherlands', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11500, league: 'Europe', country: 'Nederland', pattern: 'solid',
    colors: { primary: '#ff6a13', secondary: '#141414', accent: '#141414' },
    image: '/kits/netherlands-home.png',
  },

  // ───────── National teams: South America ─────────
  {
    id: 45, name: 'Argentina', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'South America', country: 'Argentina', pattern: 'stripes',
    colors: { primary: '#75aadb', secondary: '#f6f6f6', accent: '#141414' },
    image: '/kits/argentina-home.png',
  },
  {
    id: 46, name: 'Brazil', type: 'National', kit: 'Home', season: S, number: 10,
    price: 11900, league: 'South America', country: 'Brasil', pattern: 'solid',
    colors: { primary: '#ffdc02', secondary: '#009b3a', accent: '#009b3a' },
    image: '/kits/brazil-home.png',
  },

  // ───────── Retro ─────────
  {
    id: 47, name: 'Algeria', type: 'National', kit: 'Retro', season: '1982', number: 11,
    price: 13500, league: 'Algeria', country: 'Algérie', pattern: 'solid',
    colors: { primary: '#f4f6ee', secondary: '#0b8a3e', accent: '#0b8a3e' },
    image: '/kits/algeria-retro-1982.png',
  },
  {
    id: 48, name: 'Brazil', type: 'National', kit: 'Retro', season: '1970', number: 10,
    price: 13500, league: 'South America', country: 'Brasil', pattern: 'solid',
    colors: { primary: '#ffd90f', secondary: '#009b3a', accent: '#009b3a' },
    image: '/kits/brazil-retro-1970.png',
  },
  {
    id: 49, name: 'Argentina', type: 'National', kit: 'Retro', season: '1986', number: 10,
    price: 13500, league: 'South America', country: 'Argentina', pattern: 'stripes',
    colors: { primary: '#7fb2e0', secondary: '#f6f6f6', accent: '#1b2a5c' },
    image: '/kits/argentina-retro-1986.png',
  },
  {
    id: 50, name: 'Netherlands', type: 'National', kit: 'Retro', season: '1974', number: 14,
    price: 13500, league: 'Europe', country: 'Nederland', pattern: 'solid',
    colors: { primary: '#ff7a1a', secondary: '#141414', accent: '#141414' },
    image: '/kits/netherlands-retro-1974.png',
  },
  {
    id: 51, name: 'AC Milan', type: 'Club', kit: 'Retro', season: '1989/90', number: 9,
    price: 13900, oldPrice: 15900, league: 'Serie A', country: 'Italia', pattern: 'stripes',
    colors: { primary: '#d3112b', secondary: '#141414', accent: '#141414' },
    image: '/kits/ac-milan-retro-1989-90.png',
  },
  {
    id: 52, name: 'Ajax', type: 'Club', kit: 'Retro', season: '1994/95', number: 10,
    price: 13500, league: 'Other leagues', country: 'Nederland', pattern: 'vband',
    colors: { primary: '#f6f6f2', secondary: '#d2122e', accent: '#d2122e' },
    image: '/kits/ajax-retro-1994-95.png',
  },
];

export const getProduct = (id) => products.find((p) => p.id === id);

export const formatPrice = (n) =>
  `${n.toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g, ' ')} DA`;

export const discountOf = (p) =>
  p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;