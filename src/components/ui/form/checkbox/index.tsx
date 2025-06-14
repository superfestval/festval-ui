import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100",
  variants: {
    checked: {
      true: "border border-yellow-700 bg-yellow-700 text-zinc-50",
      indeterminated: "",
    },
    disabled: {
      true: "bg-zinc-200 border-zinc-300 cursor-not-allowed",
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export type CheckboxProps = VariantProps<typeof variants> & {
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  value?: boolean | "indeterminated";
  defaultChecked?: boolean;
};

export function Checkbox({
  disabled = false,
  onValueChange,
  value,
  defaultChecked = false
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean | "indeterminated">(defaultChecked);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    if (onValueChange) {
      onValueChange(!isChecked);
    }
  };

  useEffect(() => {
    if (value) {
      setIsChecked(value);
    }
  }, [value]);

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
