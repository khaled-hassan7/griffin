import { create } from "zustand";

const useCheckoutStore = create((set) => ({
  shippingInfo: {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    governorate: "",
    furtherInformation: "",
  },

  setShippingInfo: (data) =>
    set({
      shippingInfo: data,
    }),
  resetShippingInfo: () =>
    set({
      shippingInfo: null,
    }),
}));
export default useCheckoutStore;
