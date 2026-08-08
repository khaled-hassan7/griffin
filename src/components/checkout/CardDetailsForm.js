"use client";
import { useRouter } from "next/navigation";
import Input from "../ui/Input";
import useCheckoutStore from "./CheckoutStore";

function CardDetailsForm() {
  const setCardInfo = useCheckoutStore((state) => state.setCardInfo);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setCardInfo(data);
    router.push("/checkout/review-order");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold pb-2">Card Details</h2>
      <div className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-1  gap-5 lg:grid-cols-2">
          <Input
            name="cardNumber"
            label="card number"
            id="cardNumber"
            type="text"
            inputMode="numeric"
            required
            minLength={16}
            maxLength={19}
            pattern="[0-9 ]+"
          />
          <Input
            name="cardHolder"
            label="card holder"
            id="cardHolder"
            type="text"
            required
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <Input
            name="month"
            label="Month"
            id="month"
            type="text"
            inputMode="numeric"
            required
            minLength={2}
            maxLength={2}
            pattern="0[1-9]|1[0-2]"
          />
          <Input
            name="year"
            label="Year"
            id="year"
            type="text"
            inputMode="numeric"
            required
            minLength={2}
            maxLength={2}
          />
          <Input
            name="cvv"
            label="Cvv"
            id="cvv"
            type="text"
            inputMode="numeric"
            required
            minLength={3}
            maxLength={4}
            pattern="[0-9]{3,4}"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <button className="py-3 text-white bg-primary" type="submit">
            continue
          </button>
        </div>
      </div>
    </form>
  );
}

export default CardDetailsForm;
