import { useCart } from "../context/CartContext";

export default function CartModal({ product, quantity, onClose }) {
  const { dispatch } = useCart();

  const handleConfirm = () => {
    dispatch({
      type: "ADD",
      payload: { ...product, count: quantity },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-bold mb-4">Add to Cart</h2>
        <p>
          Are you sure you want to add <strong>{quantity}</strong> x{" "}
          <strong>{product.name}</strong>?
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
