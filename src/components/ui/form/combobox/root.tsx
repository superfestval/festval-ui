import { createContext, PropsWithChildren, useContext, useState } from "react";

export type ComboBoxRootProps = {
  placeholder?: string;
  onValueChange?: (value?: string) => void;
} & PropsWithChildren;

export type Value = {
  label?: string;
  value?: string;
};

export type RootContextState = {
  isOpen: boolean;
  value?: string;
  selectedValue?: Value;
  handleSelectValue: (data: Value) => void;
  toggle: () => void;
};

export const RootContext = createContext({} as RootContextState);

export const Root = ({
  children,
  placeholder,
  onValueChange,
}: ComboBoxRootProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [selectedValue, setSeectedValue] = useState<Value | undefined>(() => ({
    label: placeholder,
  }));

  const toggle = () => setIsOpen(!isOpen);

  const handleSelectValue = (data: Value) => {
    setValue(data?.value);
    setSeectedValue(data);
    onValueChange?.(data?.value);
    setIsOpen(false);
  };

  return (
    <RootContext.Provider
      value={{ isOpen, value, selectedValue, toggle, handleSelectValue }}
    >
      {children}
    </RootContext.Provider>
  );
};

export const useComboBox = () => useContext(RootContext);
