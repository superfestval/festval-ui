import { ChevronDown } from "lucide-react";
import * as SelectElement from "@radix-ui/react-select";

export type SelectRootProps = {
  placeholder?: string;
} & SelectElement.SelectContentProps &
  React.RefAttributes<HTMLDivElement>;

const Root = ({ placeholder, children, ...rest }: SelectRootProps) => {
  return (
    <SelectElement.Root>
      <SelectElement.Trigger className="flex w-full items-center justify-between rounded border border-zinc-200 bg-zinc-100 p-4">
        <SelectElement.Value placeholder={placeholder} />
        <SelectElement.Icon>
          <ChevronDown />
        </SelectElement.Icon>
      </SelectElement.Trigger>
      <SelectElement.Portal>
        <SelectElement.Content
          {...rest}
          className="mt-2 w-full rounded bg-zinc-100"
        >
          <SelectElement.Viewport className="w-full">
            <SelectElement.Group>{children}</SelectElement.Group>
          </SelectElement.Viewport>
        </SelectElement.Content>
      </SelectElement.Portal>
    </SelectElement.Root>
  );
};

export type SelectItemProps = {} & SelectElement.SelectItemProps &
  React.RefAttributes<HTMLDivElement>;

const Option = ({ children, ...rest }: SelectItemProps) => (
  <SelectElement.Item {...rest} className="w-full p-4">
    {children}
  </SelectElement.Item>
);

export const Select = {
  Root,
  Option,
};
