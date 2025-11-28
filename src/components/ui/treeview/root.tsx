import { createContext, PropsWithChildren, useContext, useState } from "react";

export type TreeViewState = "open" | "closed";

export type TreeViewContext = {
  state: TreeViewState;
  toggle: () => void;
};

export type RootProps = {} & PropsWithChildren;

export const TreeViewContext = createContext({} as TreeViewContext);

export function TreeViewRoot({ children }: RootProps) {
  const [state, setState] = useState<TreeViewState>("closed");

  const toggle = () =>
    state === "closed" ? setState("open") : setState("closed");

  return (
    <TreeViewContext.Provider value={{ state, toggle }}>
      <div className="py-1">{children}</div>
    </TreeViewContext.Provider>
  );
}

export const useTreeView = () => useContext(TreeViewContext);
