import { ChevronDown, Folder } from "lucide-react";
import { ButtonHTMLAttributes, ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useTreeView } from "./root";

const variant = tv({
  base: "flex w-full cursor-pointer justify-between",
});

export type TreeViewTriggerProps = {
  icon?: ElementType;
  iconSize?: number;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variant>;

export function TreeViewTrigger({
  children,
  className,
  icon: Icon,
  iconSize = 24,
  ...rest
}: TreeViewTriggerProps) {
  const { toggle, state } = useTreeView();

  return (
    <button {...rest} onClick={toggle} className={variant({ className })}>
      <div className="flex items-end gap-2">
        {Icon ? (
          <Icon className="text-gray-400" size={iconSize} />
        ) : (
          <Folder className="text-gray-400" size={iconSize} />
        )}
        {children}
      </div>

      <ChevronDown
        size={18}
        className="text-gray-500 data-[state=open]:rotate-180"
        data-state={state}
      />
    </button>
  );
}
