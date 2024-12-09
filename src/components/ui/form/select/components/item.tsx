import { useSelect } from "../context";

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const Item = ({ value, children }: SelectItemProps) => {
  const { onValueChange } = useSelect();

  const onClick = () => onValueChange(value);

  return (
    <button
      onClick={onClick}
      className="w-full border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 text-left"
    >
      {children}
    </button>
  );
};
