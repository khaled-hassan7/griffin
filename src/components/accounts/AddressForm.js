"use client";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { updateAddress } from "@/data/accounts";

function AddressForm({ profile }) {
  const initial = {
    address: profile?.address ?? "",
    city: profile?.city ?? "",
  };
  const [address, setAddress] = useState(initial.address);
  const [city, setCity] = useState(initial.city);
  const [feedback, setFeedback] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const isDirty = address !== initial.address || city !== initial.city;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    const result = await updateAddress({ address, city });

    setIsSaving(false);

    if (result.error) {
      setFeedback({ type: "error", message: result.error });
    } else {
      setFeedback({ type: "success", message: "Your address has been saved." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col gap-5">
        <Input
          label="address"
          id="accountAddress"
          name="accountAddress"
          type="text"
          required
          maxLength={200}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          label="city"
          id="accountCity"
          name="accountCity"
          type="text"
          maxLength={60}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {feedback && (
        <p
          className={`text-bodySmall pt-4 ${
            feedback.type === "error" ? "text-error" : "text-success"
          }`}
        >
          {feedback.message}
        </p>
      )}

      <Button
        type="submit"
        className="bg-primary text-white mt-8"
        disabled={!isDirty || isSaving}
      >
        {isSaving ? "Saving…" : "Save"}
      </Button>
    </form>
  );
}

export default AddressForm;
