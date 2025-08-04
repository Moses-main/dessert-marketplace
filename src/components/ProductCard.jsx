import { useState } from "react";
import CartModal from "./CartModal";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [hovered, setHovered] = useState(false);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div
      className="relative flex flex-col rounded-lg overflow-hidden shadow bg-white transition-transform hover:scale-[1.02]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="w-full h-60 object-contain hover:border-2 hover:border-red-500 rounded-md"
        />

        {/* Centered Add to Cart button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-16px] z-10">
          <button
            onClick={() => setShowModal(true)}
            className={`rounded-full px-5 py-2 text-sm border border-red-500 transition duration-200 ${
              hovered
                ? "bg-red-500 text-white flex gap-2 items-center"
                : "bg-white text-red-500"
            }`}
          >
            {hovered ? (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    decreaseQty();
                  }}
                  className="text-white font-bold text-lg"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    increaseQty();
                  }}
                  className="text-white font-bold text-lg"
                >
                  +
                </button>
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>

      <div className="p-4 pt-8 text-center">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-red-600 font-semibold mt-1">
          ${product.price.toFixed(2)}
        </p>
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
