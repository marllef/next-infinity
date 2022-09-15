import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Avatar } from "../Avatar";
import { UserPopover } from "../UserPopover";

export const HeaderBar = () => {
  const session = useSession();

  return (
    <header className="flex w-full px-5 h-14 max-w-4xl mx-auto justify-between items-center font-mono text-white font-bold ">
      <MenuIcon />

      <div className="text-lg">
        Infinity
        <span className="text-xs bg-violet-500 p-1 py-[2px] rounded-full uppercase ">
          Blog
        </span>
      </div>
      <div>
        {session.status === "authenticated" && (
          <UserPopover src={session.data.user?.image ?? ""} />
        )}
      </div>
    </header>
  );
};
