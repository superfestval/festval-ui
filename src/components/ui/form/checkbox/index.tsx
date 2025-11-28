import { useEffect, useState, useCallback } from "react";
import { Check } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const variants = tv({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100 flex items-center justify-center",
  variants: {
    checked: {
      true: "border-yellow-700 bg-yellow-700 text-zinc-50",
      indeterminated: "border-yellow-700 bg-yellow-500 text-zinc-50",
      false: "",
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
  onValueChange?: (value: boolean | "indeterminated") => void;
  disabled?: boolean;
  value?: boolean | "indeterminated";
  defaultChecked?: boolean | "indeterminated";
};

export function Checkbox({
  value,
  disabled = false,
  onValueChange,
  defaultChecked = false,
}: CheckboxProps) {
  const isControlled = value !== undefined;

  const [internal, setInternal] = useState<boolean | "indeterminated">(
    defaultChecked
  );

  const current = isControlled ? value : internal;

  const toggleCheck = useCallback(() => {
    if (disabled) return;

    const next = current === true ? false : true;

    if (!isControlled) {
      setInternal(next);
    }

    onValueChange?.(next);
  }, [current, disabled, isControlled, onValueChange]);

  useEffect(() => {
    if (isControlled) return;
    setInternal(defaultChecked);
  }, [defaultChecked, isControlled]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={toggleCheck}
      className={variants({ checked: current ?? false, disabled })}
    >
      {current === true && <Check size={16} />}
    </button>
  );
}
