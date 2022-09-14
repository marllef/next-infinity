import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useState } from "react";

interface Props {
  stars?: number;
  active?: boolean;
  onChange?: (value: number) => void;
}

export const StarToogle = ({ stars = 0, onChange = () => {} }: Props) => {
  const [active, setActive] = useState(false);
  const [starCount, setStarCount] = useState(stars);

  const handleClick = () => {
    setActive((old) => !old);
    if (active) {
      setStarCount((value) => {
        const newValue = value - 1;
        onChange(newValue);
        return newValue;
      });
    } else {
      setStarCount((value) => {
        const newValue = value + 1;
        onChange(newValue);
        return newValue;
      });
    }
  };
  return (
    <div className="flex w-full items-center space-x-1 text-sm">
      <button
        className="active:animate-ping text-slate-300"
        onClick={handleClick}
      >
        {active ? <StarIcon className="text-amber-400" /> : <StarOutlineIcon />}
      </button>
      <span>{starCount ?? "-"}</span>
    </div>
  );
};
