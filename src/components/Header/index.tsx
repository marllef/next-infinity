import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar } from "../Avatar";
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
          <div className="flex items-center gap-3">
            <Link href={"/register"}>
              <button className="bg-violet-600 px-2 rounded hover:opacity-90 active:opacity-80">
                Registrar
              </button>
            </Link>
            <div className="flex items-center gap-2">
              <Badge color="error" variant="dot" overlap="circular">
                <div>
                  <Avatar size={30} src="" />
                </div>
              </Badge>
              <span className="text-sm">Convidado</span>
              <NotificationsIcon fontSize="small" />
            </div>
          </div>
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
