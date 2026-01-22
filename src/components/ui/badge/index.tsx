import { PropsWithChildren } from "react";
import { tv, VariantProps } from "tailwind-variants";

const badgeVariant = tv({
  base: "flex w-fit items-center justify-center rounded-2xl px-4 py-1 text-xs",
  variants: {
    variant: {
      default: "border border-gray-300 bg-gray-200 text-gray-600",
      success: "border border-green-300 bg-green-200 text-green-800",
      warning: "border border-yellow-300 bg-yellow-200 text-yellow-800",
      danger: "border border-red-300 bg-red-200 text-red-800",
      info: "border border-blue-300 bg-blue-200 text-blue-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeProps = {} & PropsWithChildren &
  VariantProps<typeof badgeVariant>;

export function Badge({ children, variant }: BadgeProps) {
  return (
    <div className={badgeVariant({ variant })}>
      <small>{children}</small>
    </div>
  );
}
