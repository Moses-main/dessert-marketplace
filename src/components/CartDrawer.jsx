import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const items = Object.values(cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <>
      <button
        className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded z-50"
        onClick={() => setOpen(true)}
      >
        View Cart 🛒 ({items.length})
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-40">
          <div className="bg-white w-80 h-full shadow-lg p-4 overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={() => setOpen(false)}
            >
              ❌
            </button>

            <h2 className="text-xl font-bold mb-4 text-red-600">Your Cart</h2>

            {items.length === 0 ? (
              <p className="text-gray-500">Cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.count} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-bold">
                      ${(item.price * item.count).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {items.length > 0 && (
              <div className="mt-6">
                <p className="text-lg font-semibold">
                  Total:{" "}
                  <span className="text-red-600">${totalPrice.toFixed(2)}</span>
                </p>
                <button
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  onClick={() => alert("Proceeding to checkout...")}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
