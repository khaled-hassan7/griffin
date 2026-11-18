import { getAccount } from "@/data/accounts";
import AddressForm from "@/components/accounts/AddressForm";

async function page() {
  const { profile } = await getAccount();

  return (
    <div className="max-w-2xl px-6 py-10 lg:py-16">
      <h2 className="hidden lg:block text-formHeading font-bold uppercase tracking-widest pb-10">
        My address
      </h2>
      <AddressForm profile={profile} />
    </div>
  );
}

export default page;
