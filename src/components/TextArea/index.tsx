import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onTextChange?: (value: string) => void;
  label?: string;
}

export const TextArea = ({
  maxLength = 400,
  onTextChange = () => {},
  onChange = () => {},
  label,
  ...rest
}: Props) => {
  const [charCount, setCharCount] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
    onChange(event);
    setCharCount(event.target.value.length);
  };

  return (
    <div className="flex flex-col w-full space-y-1">
      <label className="sr-only">{label}</label>
      <textarea
        onChange={handleChange}
        placeholder="Escreva aqui..."
        maxLength={maxLength}
        className="bg-slate-800 rounded w-full p-2 placeholder:text-slate-400 focus:outline-none focus:ring ring-violet-600"
        {...rest}
      />
      <p className="text-end text-xs text-slate-500">
        {charCount}/{maxLength}
      </p>
    </div>
  );
};
