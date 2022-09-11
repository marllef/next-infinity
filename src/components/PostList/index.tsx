import { List, ListItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const PostList = () => {
  return (
    <ul className="flex flex-col w-full h-full">
      <li className="w-full min-h-[7rem] bg-gray-800 pl-3 pr-2 py-2 rounded">
        <div className="flex w-full justify-between">
          <h3 className="capitalize font-bold text-xl">Titulo do post</h3>
          <MoreVertIcon />
        </div>
        <span className="text-xs text-violet-500">Autor | Categoria | Data</span>
        <p className="text-sm">Descrição</p>
      </li>
      <li></li>
      <li></li>
    </ul>
  );
};
