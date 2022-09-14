import { Avatar as MAvatar } from "@mui/material";

interface Props {
  size?: number;
  src?: string;
}

export const Avatar = ({size = 30, src}: Props) => {
  return (
    <div className="w-fit bg-slate-800 text-slate-50  rounded-full select-none border-2 border-violet-600">
      <MAvatar
        src={src}
        sx={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};
