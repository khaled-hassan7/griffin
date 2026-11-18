"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { updateProfile } from "@/data/accounts";
import type { AccountProfile } from "@/types";

type Feedback = { type: "error" | "success"; message: string };

function PersonalInfoForm({
  profile,
  email,
}: {
  profile: AccountProfile | null;
  email?: string;
}) {
  const initial = {
    fullName: profile?.full_name ?? "",
    phone: profile?.phone ?? "",
  };
  const [fullName, setFullName] = useState(initial.fullName);
  const [phone, setPhone] = useState(initial.phone);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const isDirty = fullName !== initial.fullName || phone !== initial.phone;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);
    setFeedback(null);

    const result = await updateProfile({ fullName, phone });

    setIsSaving(false);

    if (result.error) {
      setFeedback({ type: "error", message: result.error });
    } else {
      setFeedback({
        type: "success",
        message: "Your details have been saved.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col gap-5">
        <Input
          label="email address"
          id="accountEmail"
          name="accountEmail"
          type="email"
          defaultValue={email}
          disabled
        />
        <Input
          label="full name"
          id="fullName"
          name="fullName"
          type="text"
          required
          maxLength={80}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="phone"
          id="accountPhone"
          name="accountPhone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

export default PersonalInfoForm;
