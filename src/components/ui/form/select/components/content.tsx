import { tv } from "tailwind-variants";
import { useSelect } from "../context";

const contentVariable = tv({
  base: "top-12 flex max-h-24 flex-col overflow-y-auto rounded absolute w-full",
  variants: {
    isOpen: {
      true: "flex",
      false: "hidden",
    },
  },
});

export interface SelectContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: SelectContentProps) => {
  const { isOpen } = useSelect();

  return <div className={contentVariable({ isOpen })}>{children}</div>;
};
