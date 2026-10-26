import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <ProductGrid />
        <About />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
