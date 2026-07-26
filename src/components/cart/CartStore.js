import { create } from "zustand";
export const useCartStore = create((set) => ({
  cart: [],
  isOpen: false,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size,
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id && cartItem.size === item.size
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),

  deleteFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set(() => ({
      cart: [],
    })),

  openCart: () => set({ isOpen: true }),

  closeCart: () => set({ isOpen: false }),

  toggleCart: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
