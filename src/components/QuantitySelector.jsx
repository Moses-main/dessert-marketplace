export default function QuantitySelector({ quantity, setQuantity }) {
    return (
      <div className="flex items-center mt-2 space-x-2">
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => setQuantity(q => q + 1)}
        >
          +
        </button>
      </div>
    );
  }
  