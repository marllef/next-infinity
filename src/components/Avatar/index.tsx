import { Avatar as MAvatar } from "@mui/material";
import { MouseEvent } from "react";

interface Props {
  size?: number;
  src?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export const Avatar = ({ size = 30, src, onClick = () => {} }: Props) => {
  return (
    <div className="w-fit bg-slate-800 text-slate-50  rounded-full select-none border-2 border-violet-600">
      <MAvatar
        src={src}
        onClick={onClick}
        sx={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};
