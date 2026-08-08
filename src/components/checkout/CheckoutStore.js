import { create } from "zustand";

const useCheckoutStore = create((set) => ({
  shippingInfo: null,
  paymentMethod: null,
  cardInfo: {
    cardNumber: "",
    cardHolder: "",
    month: "",
    year: "",
    cvv: "",
  },

  setShippingInfo: (data) =>
    set({
      shippingInfo: data,
    }),
  resetShippingInfo: () =>
    set({
      shippingInfo: null,
    }),
  setPayMentMethod: (method) =>
    set({
      paymentMethod: method,
    }),
  resetPaymentMethod: () =>
    set({
      paymentMethod: null,
    }),

  setCardInfo: (card) => set({ cardInfo: card }),
  resetCardInfo: () => set({ cardInfo: null }),
}));
export default useCheckoutStore;
