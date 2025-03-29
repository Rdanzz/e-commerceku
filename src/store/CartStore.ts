import { create } from "zustand";

// Definisi tipe produk
export interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
}

// Definisi tipe cart item
interface CartItem extends Product {
  qty: number;
}

// Definisi tipe store Zustand
interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

// Membuat store Zustand
const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, qty: 1 }] };
      }
    }),
}));

export default useCartStore;
