import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { UserPopover } from "../UserPopover";

export const HeaderBar = () => {
  const session = useSession();
  const { pathname } = useRouter();

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
        {session.status === "authenticated" ? (
          <UserPopover src={session.data.user?.image ?? ""} />
        ) : pathname?.includes("login") ? (
          <Link href={"/register"}>
            <button className="bg-violet-600 px-2 rounded hover:opacity-90 active:opacity-80">
              Registrar
            </button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <button className="bg-violet-600 px-2 rounded hover:opacity-90 active:opacity-80">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};
