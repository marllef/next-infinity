import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "../Avatar";

export const HeaderBar = () => {
  return (
    <header className="flex w-full px-5 h-14 max-w-4xl mx-auto justify-between items-center font-mono text-white font-bold ">
      <div>
        <MenuIcon />
      </div>
      <div>Infinity</div>
      <div>
        <Avatar />
      </div>
    </header>
  );
};
