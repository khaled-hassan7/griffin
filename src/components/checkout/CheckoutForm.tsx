"use client";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import Input from "../ui/Input";
import useCheckoutStore from "./CheckoutStore";
import GovernorateSelect from "./GovernorateSelect";
import Button from "../ui/Button";
import type { AccountProfile } from "@/types";

function CheckoutForm({ profile }: { profile: AccountProfile | null }) {
  const setShippingInfo = useCheckoutStore((state) => state.setShippingInfo);
  const router = useRouter();

  // Signed-in users start from their saved account details; every field stays
  // editable. Guests (profile === null) get the form blank, exactly as before.
  const fullName = profile?.full_name?.trim() ?? "";
  const prefilled = {
    firstName: fullName.split(" ")[0],
    lastName: fullName.split(" ").slice(1).join(" "),
    phone: profile?.phone ?? "",
    address: profile?.address ?? "",
    town: profile?.city ?? "",
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setShippingInfo(Object.fromEntries(formData));
    router.push("/checkout/payment-methods");
  }

  return (
    <form
      className="flex  justify-center flex-row pb-5"
      onSubmit={handleSubmit}
    >
      <div>
        <section>
          <h2 className="text-formHeading  pb-2 font-bold">Personal details</h2>
          <div className="grid  gap-5 pb-5 lg:grid-cols-2">
            <Input
              label="first name"
              name="firstName"
              id="firstName"
              type="text"
              required
              defaultValue={prefilled.firstName}
            />
            <Input
              label="last name"
              name="lastName"
              id="lastName"
              type="text"
              required
              defaultValue={prefilled.lastName}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Input
              label="phone"
              name="phone"
              id="phone"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              defaultValue={prefilled.phone}
            />
          </div>
        </section>

        <section className="pt-5">
          <h2 className=" text-formHeading py-2 font-bold">Delivery details</h2>
          <div className="grid gap-5 pb-5 md:grid-cols-2">
            <Input
              label="address"
              name="address"
              id="address"
              type="text"
              required
              defaultValue={prefilled.address}
            />
            <Input
              label="further information (optional)"
              name="furtherInformation"
              id="furtherInformation"
              type="text"
            />
          </div>
          <div className="grid  gap-5 pb-5 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-5">
              <GovernorateSelect name="governorate" />
              <Input
                label="town"
                name="town"
                id="town"
                type="text"
                defaultValue={prefilled.town}
              />
            </div>
          </div>
        </section>

        <footer>
          <div className="text-bodySmall pb-5 ">
            <p className="pb-5">
              Fields marked with an asterisk are mandatory.
            </p>
            <p>
              By continuing, I confirm that I was able to read and understand
              the information on the use of my personal data, as explained in
              the Privacy Policy.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <Button className="text-white bg-primary" type="submit">
              continue
            </Button>
          </div>
        </footer>
      </div>
    </form>
  );
}

export default CheckoutForm;
