import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import CartModal from "./CartModal";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <img
        src={product.image.thumbnail}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-red-600 font-semibold mt-1">
        ${product.price.toFixed(2)}
      </p>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button
        className="mt-3 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
        onClick={() => setShowModal(true)}
      >
        Add to Cart
      </button>

      {showModal && (
        <CartModal
          product={product}
          quantity={quantity}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
