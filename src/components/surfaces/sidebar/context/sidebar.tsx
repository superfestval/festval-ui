import { createContext, HTMLAttributes, useContext } from "react";

export type SidebarProviderProps = {} & HTMLAttributes<HTMLElement>;

export type SidebarContextProps = {};

export const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarProvider({ children }: SidebarProviderProps) {
  return (
    <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
