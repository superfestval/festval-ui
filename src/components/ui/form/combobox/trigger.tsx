import { ButtonHTMLAttributes } from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import { useComboBox } from "./root";

export type TriggerProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Trigger({ ...rest }: TriggerProps) {
  const { toggle, selectedValue } = useComboBox();

  return (
    <button
      {...rest}
      type="button"
      onClick={toggle}
      className="flex w-full items-center justify-between rounded border-2 border-gray-200 bg-zinc-50 px-4 py-2"
    >
      <p>{selectedValue?.label}</p>
      <ChevronsUpDownIcon size={16} />
    </button>
  );
}
