import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <ProductList />
      <CartDrawer />
    </div>
  );
}
