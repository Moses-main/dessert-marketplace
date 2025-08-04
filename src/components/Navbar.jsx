import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = Object.values(cart.items).reduce((sum, item) => sum + item.count, 0);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-600">Dessert Shop 🍰</h1>
      <div className="relative">
        🛒 <span className="ml-1 text-red-600 font-bold">{totalItems}</span>
      </div>
    </nav>
  );
}
