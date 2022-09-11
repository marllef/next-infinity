import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...rest }: Props) => {
  return (
    <button
      className="px-3 py-2 bg-violet-600 hover:opacity-90 focus:outline-none focus:ring ring-violet-400 active:opacity-80 rounded"
      {...rest}
    />
  );
};
