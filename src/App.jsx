import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
