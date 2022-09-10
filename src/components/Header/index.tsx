import MenuIcon from "@mui/icons-material/Menu";

export const HeaderBar = () => {
  return (
    <header className="flex w-full px-5 h-14 justify-between items-center font-mono text-white font-bold ">
      <div>
        <MenuIcon />
      </div>
      <div>Infinity</div>
      <div></div>
    </header>
  );
};
