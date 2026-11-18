import { getAccount } from "@/data/accounts";
import PersonalInfoForm from "@/components/accounts/PersonalInfoForm";

async function page() {
  const { user, profile } = await getAccount();

  return (
    <div className="max-w-2xl px-6 py-10 lg:py-16">
      <h2 className="hidden lg:block text-formHeading font-bold uppercase tracking-widest pb-10">
        Personal details
      </h2>
      <PersonalInfoForm profile={profile} email={user.email} />
    </div>
  );
}

export default page;
