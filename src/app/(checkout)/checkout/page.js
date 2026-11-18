import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutGuard from "@/components/checkout/CheckoutGuard";
import { getAccount } from "@/data/accounts";

// Always read the live session — never cache this page for guests.
export const dynamic = "force-dynamic";

async function page() {
  // Guest-safe: returns `{ user: null, profile: null }` when there is no
  // session, so guests get the blank form.
  const { profile } = await getAccount();

  return <CheckoutForm profile={profile} />;
}

export default page;
