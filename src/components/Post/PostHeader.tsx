import { Avatar } from "../Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostMenu } from "./Menu";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface Props {
  postId?: string;
  date: Date;
  user: {
    id?: string;
    email?: string;
    photo?: string;
    name: string;
  };
}

export const PostHeader = ({ postId, date, user }: Props) => {
  const session = useSession();

  return (
    <span className="flex items-center justify-between text-xs border-b pb-2 border-slate-700 text-violet-500">
      <div className="flex items-center space-x-2">
        <Avatar size={26} src={user?.photo} />
        <div>
          <h5 className="text-sm font-bold">{user?.name}</h5>
          <p className="text-slate-400">{`${date?.toLocaleDateString()}`}</p>
        </div>
      </div>
      <PostMenu
        postId={postId}
        isOwner={user?.email === session?.data?.user?.email}
      />
    </span>
  );
};
