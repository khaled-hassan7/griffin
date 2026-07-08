import { Handbag, User } from "lucide-react";
import Search from "./Search";

function HeaderActions() {
  return (
    <div className="flex gap-5">
      <div className="hidden lg:block">
        <Search />
      </div>
      <button>
        <User strokeWidth={1} size={24} />
      </button>
      <button>
        <Handbag strokeWidth={1} size={24} />
      </button>
    </div>
  );
}

export default HeaderActions;
