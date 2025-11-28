import { PropsWithChildren } from "react";

export type BadgeProps = {} & PropsWithChildren;

export function Badge({ children }: BadgeProps) {
  return (
    <div className="flex w-fit items-center justify-center rounded-2xl border border-gray-300 bg-gray-200 px-4 py-1">
      <small className="text-xs text-gray-600">{children}</small>
    </div>
  );
}
