import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import CartModal from "./CartModal";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-lg p-4 bg-white shadow flex flex-col justify-between h-full">
      <div>
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
      </div>

      {/* Centered button at the bottom */}
      <div className="mt-auto flex justify-center">
        <button
          className="mt-4 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600"
          onClick={() => setShowModal(true)}
        >
          Add to Cart
        </button>
      </div>

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
