import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AccountNavList from "@/components/accounts/AccountNavList";
import AccountTopBar from "@/components/accounts/AccountTopBar";
import SignOutButton from "@/components/accounts/SignOutButton";

async function layout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // x-pathname is set by src/proxy.js (scoped to /account/**).
    const pathname = (await headers()).get("x-pathname") ?? "/account";
    const nextPath =
      pathname.startsWith("/") && !/^\/[\/\\]/.test(pathname)
        ? pathname
        : "/account";
    redirect(`/signin?next=${encodeURIComponent(nextPath)}`);
  }
  const fullName =
    user.user_metadata?.full_name ?? user.user_metadata?.name ?? "";

  return (
    <div className="flex">
      <aside className="hidden lg:flex w-72 shrink-0 border-r border-neutral-200">
        <div className="w-full p-6">
          <h1 className="text-l font-bold  ">Hello {fullName}</h1>
          <p className="text-bodySmall text-text-muted pt-1">{}</p>

          <AccountNavList />
          <div className="pt-10">
            <SignOutButton />
          </div>
        </div>
      </aside>
      <div className="flex-1 min-w-0">
        <AccountTopBar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default layout;
