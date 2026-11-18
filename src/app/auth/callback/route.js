import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const rawNext = searchParams.get("next");

  // Only follow internal paths: must start with "/" and not "//" or "/\".
  // Anything else (e.g. "https://evil.com", "//evil.com") falls back to /account.
  const isInternalPath =
    rawNext && rawNext.startsWith("/") && !/^\/[\/\\]/.test(rawNext);
  const next = isInternalPath ? rawNext : "/account";

  const supabase = await createClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/signin?error=auth`);
}
