import { File } from "lucide-react";
import { ElementType, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { tv, VariantProps } from "tailwind-variants";

const variant = tv({
  base: "h-full cursor-grab border-l border-l-gray-200 p-2",
});

export type TreeViewItemProps = {
  onNavigate?: () => void;
  icon?: ElementType;
  iconSize?: number;
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variant>;

export function TreeViewItem({
  children,
  className,
  icon: Icon,
  onNavigate,
  iconSize = 20,
  ...rest
}: TreeViewItemProps) {
  return (
    <div className={variant({ className })} {...rest}>
      <button
        onClick={() => onNavigate?.()}
        className="flex items-center gap-2"
      >
        {Icon ? (
          <Icon className="text-gray-400" size={iconSize} />
        ) : (
          <File className="text-gray-400" size={iconSize} />
        )}
        <small className="underline">{children}</small>
      </button>
    </div>
  );
}
