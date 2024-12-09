import { createContext, useContext } from "react";
import { useSelectContext } from "./hooks/useSelectContext";

interface SelectContext {
  isOpen: boolean;
  value: string | null;
  onTriggerClick: () => void;
  onValueChange: (value: string) => void;
}

export interface SelectProviderProps {
  children: React.ReactNode;
  onChange?: (value: string) => void;
}

export const SelectContext = createContext({} as SelectContext);

export const SelectProvider = ({ children, onChange }: SelectProviderProps) => {
  const value = useSelectContext(onChange);
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};

export const useSelect = () => useContext(SelectContext);
