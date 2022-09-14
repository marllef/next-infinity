import { Avatar } from "../Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  date: Date;
  user: {
    photo?: string;
    name: string;
  };
}

export const PostHeader = ({ date, user }: Props) => {
  return (
    <span className="flex items-center justify-between text-xs border-b pb-2 border-slate-700 text-violet-500">
      <div className="flex items-center space-x-2">
        <Avatar size={26} src={user?.photo} />
        <div>
          <h5 className="text-sm font-bold">{user?.name}</h5>
          <p className="text-slate-400">{`${date?.toLocaleDateString()}`}</p>
        </div>
      </div>
      <MoreVertIcon />
    </span>
  );
};
