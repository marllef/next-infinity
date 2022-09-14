import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className, ...rest }: Props) => {
  return (
    <>
      <label className="sr-only">{label}</label>
      <input
        className={`${className} bg-slate-800 rounded px-3 py-2 
        focus:outline-none focus:ring ring-violet-600
        placeholder:text-slate-400`}
        {...rest}
      />
    </>
  );
};
7;
