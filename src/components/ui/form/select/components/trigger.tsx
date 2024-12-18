import { tv } from "tailwind-variants";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import { useSelect } from "../context";

const triggerVariable = tv({
  base: "flex w-full items-center justify-between rounded border  bg-zinc-100 px-4 py-2 text-left",
  variants: {
    isOpen: {
      true: "border-yellow-600",
      false: "border-zinc-200",
    },
  },
});

export interface SelectTriggerProps {
  placeholder: string;
}

export const Trigger = ({ placeholder }: SelectTriggerProps) => {
  const { value, isOpen, onTriggerClick } = useSelect();

  return (
    <button
      type="button"
      onClick={onTriggerClick}
      className={triggerVariable({ isOpen })}
    >
      {value ? value : placeholder}
      {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </button>
  );
};
