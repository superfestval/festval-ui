import { ButtonHTMLAttributes } from "react";
import { useComboBox } from "./root";

export type ItemProps = {
  label: string;
  value: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Item({ label, value, ...rest }: ItemProps) {
  const { handleSelectValue } = useComboBox();

  return (
    <button
      {...rest}
      type="button"
      onClick={() => handleSelectValue({ label, value })}
      className="w-full rounded-lg p-2 text-start transition-colors hover:bg-gray-100"
    >
      {label}
    </button>
  );
}
