"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "../ui/Button";

function SignInWithGoogle({ next, className, onStart }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSignIn() {
    setIsLoading(true);
    setError(null);
    onStart?.();

    const supabase = createClient();
    // The /auth/callback route validates `next` (internal paths only) and
    // redirects there after exchanging the code for a session.
    const callbackUrl = next
      ? `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`
      : `${window.location.origin}/auth/callback`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: callbackUrl,
      },
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={handleSignIn} disabled={isLoading} className={className}>
        {isLoading ? "Redirecting…" : "Continue with Google"}
      </Button>
      {error && <p className="text-bodySmall text-error">{error}</p>}
    </div>
  );
}

export default SignInWithGoogle;
