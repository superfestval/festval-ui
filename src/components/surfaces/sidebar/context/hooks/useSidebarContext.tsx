import { useState } from "react";

export function useSidebarContext() {
  const [state, setState] = useState<"open" | "close">("open");

  const toggle = () => setState(state === "open" ? "close" : "open");

  return {
    state,
    toggle,
  };
}
