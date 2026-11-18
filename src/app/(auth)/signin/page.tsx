import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignInWithGoogle from "@/components/auth/SignInWithGoogle";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next: rawNext } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Signed-in users never need this page; send them on their way.
  // Only follow internal paths: must start with "/" and not "//" or "/\".
  if (user) {
    const isInternalPath =
      rawNext && rawNext.startsWith("/") && !/^\/[\/\\]/.test(rawNext);
    redirect(isInternalPath ? rawNext : "/account");
  }

  return (
    <div className="flex flex-col gap-6 text-center">
      <div>
        <h1 className="text-2xl font-bold tracking-widest uppercase pb-2">
          Griffin
        </h1>
        <p className="text-bodySmall text-text-muted">
          Sign in to view your orders and manage your account.
        </p>
      </div>

      {error && (
        <p className="text-bodySmall text-error">
          Sign-in failed. Please try again.
        </p>
      )}

      <SignInWithGoogle />
    </div>
  );
}

export default page;
