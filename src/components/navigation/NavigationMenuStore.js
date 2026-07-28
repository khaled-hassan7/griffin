import { create } from "zustand";

export const useNavigation = create((set) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}));
