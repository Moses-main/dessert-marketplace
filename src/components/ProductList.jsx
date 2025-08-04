import products from '../data/products.json';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-white">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={{ ...product, id: idx }} />
      ))}
    </div>
  );
}
