import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Content = {} & MenubarPrimitive.MenubarContentProps;

export function Content({ children, ...rest }: Content) {
  return (
    <MenubarPrimitive.Content
      className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
      {...rest}
    >
      {children}
    </MenubarPrimitive.Content>
  );
}
