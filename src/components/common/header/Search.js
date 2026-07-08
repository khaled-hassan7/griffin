import { Search } from "lucide-react";

function HeaderSearch() {
  return (
      <button className=" flex  text-left h-6  items-center lg:border-b border-border lg:w-40  ">
        <span className="pl-0.5 pb-0.5 text-sm hidden lg:block ">Search</span>
        <Search strokeWidth={1} size={24} className="lg:hidden" />
      </button>
  );
}

export default HeaderSearch;
