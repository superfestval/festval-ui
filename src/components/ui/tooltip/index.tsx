import * as Primitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export type TooltipProps = {
  children?: ReactNode;
  value: string;
  asChild?: boolean;
};

export const Tooltip = ({ value, children, asChild }: TooltipProps) => {
  return (
    <Primitive.Provider>
      <Primitive.Root>
        <Primitive.Trigger asChild={asChild} className="w-full">
          {children}
        </Primitive.Trigger>
        <Primitive.Portal>
          <Primitive.Content className="w-full select-none rounded bg-white px-[15px] py-2.5 text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
            {value}
            <Primitive.Arrow className="fill-white" />
          </Primitive.Content>
        </Primitive.Portal>
      </Primitive.Root>
    </Primitive.Provider>
  );
};
