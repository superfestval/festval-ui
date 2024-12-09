import { Check } from "lucide-react";
import React, { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100",
  variants: {
    checked: {
      true: "border border-yellow-700 bg-yellow-700 text-zinc-50",
    },
    disabled: {
      true: "bg-zinc-200 border-zinc-300 cursor-not-allowed",
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export type CheckboxProps = VariantProps<typeof variants> & {};

export function Checkbox({ checked = false, disabled = false }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={toggleCheck}
      className={variants({ checked: isChecked, disabled })}
    >
      {isChecked && <Check size={18} />}
    </button>
  );
}
