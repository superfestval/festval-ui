import { TreeViewItem, TreeViewItemProps } from "./item";
import { TreeViewRoot, RootProps } from "./root";
import { TreeViewPortal, TreeViewPortalProps } from "./portal";
import { TreeViewTrigger, TreeViewTriggerProps } from "./trigger";

export const TreeView = {
  Root: TreeViewRoot,
  Item: TreeViewItem,
  Portal: TreeViewPortal,
  Trigger: TreeViewTrigger,
};

export type {
  RootProps,
  TreeViewItemProps,
  TreeViewPortalProps,
  TreeViewTriggerProps,
};
