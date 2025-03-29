import { useState } from "react";
import useCartStore from "../../store/CartStore";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const cart = useCartStore((state) => state.cart); // Ambil cart dari Zustand

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-50 fixed top-0 right-0 w-80 lg:w-96 h-screen bg-white shadow-lg transition-transform duration-300 p-4 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header + Close Button */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 hover:text-black"
          >
            {/* SVG Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.225 4.811a.75.75 0 0 1 1.06 0L12 9.525l4.715-4.714a.75.75 0 1 1 1.06 1.06L13.06 10.585l4.715 4.715a.75.75 0 1 1-1.06 1.06L12 11.645l-4.715 4.715a.75.75 0 1 1-1.06-1.06L10.94 10.585 6.225 5.87a.75.75 0 0 1 0-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items (Scrollable) */}
        <div className="mt-4 space-y-4 overflow-y-auto h-[75vh] pr-2">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                </div>
                <span className="font-semibold">
                  Rp {item.price.toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
