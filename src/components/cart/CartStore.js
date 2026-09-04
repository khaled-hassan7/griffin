import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      isHydrated: false,

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) =>
              cartItem.id === item.id && cartItem.size === item.size,
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

      deleteFromCart: (cartItemId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
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

      setHydrated: (value) => set({ isHydrated: value }),
    }),
    {
      name: "griffin-cart",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
