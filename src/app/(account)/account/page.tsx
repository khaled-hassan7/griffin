import AccountNavList from "@/components/accounts/AccountNavList";
import SignOutButton from "@/components/accounts/SignOutButton";
import Button from "@/components/ui/Button";
import { getAccount, getAccountOrders } from "@/data/accounts";

async function page() {
  const [account, orders] = await Promise.all([
    getAccount(),
    getAccountOrders(),
  ]);
  const { user, profile } = account;

  const fullName = profile?.full_name ?? user!.user_metadata?.full_name ?? "";
  const firstName = fullName.split(" ")[0];

  return (
    <div className="max-w-2xl px-6 py-5 lg:py-16">
      <div className="lg:hidden flex flex-col gap-10 pt-10">
        <div>
          <h1 className="text-2xl font-bold uppercase tracking-widest">
            Hello {firstName}
          </h1>
          <p className="text-bodySmall text-text-muted pt-1">{user!.email}</p>
        </div>
        <AccountNavList />
        <SignOutButton />
      </div>
    </div>
  );
}

export default page;
