"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "../ui/Button";

function SignOutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignOut() {
    setIsLoading(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.push("/");
  }

  return (
    <Button
      className="bg-primary text-white"
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? "Signing out…" : "Log out"}
    </Button>
  );
}

export default SignOutButton;
