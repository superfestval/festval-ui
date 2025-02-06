import { createContext, HTMLAttributes, useContext } from "react";
import { useSidebarContext } from "./hooks/useSidebarContext";

export type SidebarProviderProps = {} & HTMLAttributes<HTMLElement>;

export type SidebarContextProps = {
  state: "open" | "close";
  toggle: () => void;
};

export const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const value = useSidebarContext();

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
