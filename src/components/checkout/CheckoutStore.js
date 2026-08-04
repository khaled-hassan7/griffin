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
  paymentMethod: null,

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
}));
export default useCheckoutStore;
