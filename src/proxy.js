import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Session refresh proxy (Next.js 16 renamed middleware -> proxy).
// Scoped to auth/account routes only so guest checkout is never intercepted.
export async function proxy(request) {
  request.headers.set("x-pathname", request.nextUrl.pathname);

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refreshes the auth cookies when the access token is close to expiring.
  await supabase.auth.getUser();

  return supabaseResponse;
}

export const config = {
  matcher: ["/signin", "/auth/callback", "/account/:path*"],
};
