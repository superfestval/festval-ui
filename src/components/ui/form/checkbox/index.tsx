import { Check } from "lucide-react";
import React, { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100",
  variants: {
    checked: {
      true: "border border-yellow-700 bg-yellow-700 text-zinc-50",
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export type CheckboxProps = VariantProps<typeof variants> & {};

export function Checkbox({ checked = false }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      type="button"
      onClick={toggleCheck}
      className={variants({ checked: isChecked })}
    >
      {isChecked && <Check size={18} />}
    </button>
  );
}
