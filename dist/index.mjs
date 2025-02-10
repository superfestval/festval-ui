var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/ui/card/body.tsx
import { tv } from "tailwind-variants";
import { jsx } from "react/jsx-runtime";
var variant = tv({
  base: "flex-1 rounded-b bg-zinc-50 p-4"
});
var Body = (_a) => {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: variant({ className }) }, rest), { children }));
};

// src/components/ui/card/root.tsx
import { tv as tv2 } from "tailwind-variants";
import { jsx as jsx2 } from "react/jsx-runtime";
var cardRootVariant = tv2({
  base: "w-full flex flex-col rounded bg-zinc-100"
});
var Root = (_a) => {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx2("div", __spreadProps(__spreadValues({ className: cardRootVariant({ className }) }, rest), { children }));
};

// src/components/ui/card/header.tsx
import { tv as tv3 } from "tailwind-variants";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var headerVariant = tv3({});
var iconVariant = tv3({
  base: "rounded bg-zinc-500/25 p-2 text-zinc-500",
  variants: {
    variant: {
      alert: "rounded bg-yellow-500/25 p-2 text-yellow-500",
      info: "rounded bg-blue-500/25 p-2 text-blue-500",
      success: "rounded bg-green-500/25 p-2 text-green-500",
      destructive: "rounded bg-red-500/25 p-2 text-red-500"
    }
  }
});
var Header = ({
  children,
  iconColor,
  icon: Icon4,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between rounded-t bg-zinc-200 p-4", children: [
    children,
    Icon4 && /* @__PURE__ */ jsx3("div", { className: iconVariant({ variant: iconColor, className }), children: /* @__PURE__ */ jsx3(Icon4, { size: 16 }) })
  ] });
};

// src/components/ui/card/footer.tsx
import { tv as tv4 } from "tailwind-variants";
import { jsx as jsx4 } from "react/jsx-runtime";
var cardfooterVariant = tv4({
  base: "flex items-start justify-between rounded-t bg-zinc-100 p-4 rounded-b border-t border-t-zinc-200"
});
var CardFooter = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx4("div", __spreadProps(__spreadValues({ className: cardfooterVariant({ className }) }, rest), { children }));
};

// src/components/ui/card/index.tsx
var Card = {
  Root,
  Header,
  Body,
  CardFooter
};

// src/components/ui/table/index.tsx
import { ArrowDownUp } from "lucide-react";
import { tv as tv5 } from "tailwind-variants";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var rootVariant = tv5({
  base: "m-auto mt-6 w-full max-w-[1120px]"
});
var captionVariant = tv5({
  base: "rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4"
});
var tHeadVariant = tv5({
  base: "rounded-t"
});
var tBodyVariant = tv5({
  base: "rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4"
});
var rowVariant = tv5({
  base: "rounded-t bg-zinc-50"
});
var cellHeadVariant = tv5({
  base: "bg-zinc-200 p-4 text-left text-zinc-600",
  variants: {
    position: {
      first: "rounded-tl-lg",
      last: "rounded-tr-lg"
    }
  }
});
var cellVariant = tv5({
  base: "border-b border-b-zinc-200 px-4 py-2"
});
var Table = {
  Root: (_a) => {
    var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
    return /* @__PURE__ */ jsx5("table", __spreadProps(__spreadValues({ className: rootVariant({ className }) }, rest), { children }));
  },
  Caption: (_c) => {
    var _d = _c, { children, className } = _d, rest = __objRest(_d, ["children", "className"]);
    return /* @__PURE__ */ jsx5("caption", __spreadProps(__spreadValues({ className: captionVariant({ className }) }, rest), { children }));
  },
  THead: (_e) => {
    var _f = _e, { children, className } = _f, rest = __objRest(_f, ["children", "className"]);
    return /* @__PURE__ */ jsx5("thead", __spreadProps(__spreadValues({ className: tHeadVariant({ className }) }, rest), { children }));
  },
  TBody: (_g) => {
    var _h = _g, { children, className } = _h, rest = __objRest(_h, ["children", "className"]);
    return /* @__PURE__ */ jsx5("tbody", __spreadProps(__spreadValues({ className: tBodyVariant({ className }) }, rest), { children }));
  },
  Tr: (_i) => {
    var _j = _i, { children, className } = _j, rest = __objRest(_j, ["children", "className"]);
    return /* @__PURE__ */ jsx5("tr", __spreadProps(__spreadValues({ className: rowVariant({ className }) }, rest), { children }));
  },
  Th: (_k) => {
    var _l = _k, { children, position, onClick, className } = _l, rest = __objRest(_l, ["children", "position", "onClick", "className"]);
    return /* @__PURE__ */ jsxs2("th", __spreadProps(__spreadValues({}, rest), { className: cellHeadVariant({ position, className }), children: [
      children,
      onClick && /* @__PURE__ */ jsx5("button", { onClick, className: "ml-4", children: /* @__PURE__ */ jsx5(ArrowDownUp, { size: 12 }) })
    ] }));
  },
  Td: (_m) => {
    var _n = _m, { children, className } = _n, rest = __objRest(_n, ["children", "className"]);
    return /* @__PURE__ */ jsx5("td", __spreadProps(__spreadValues({ className: cellVariant({ className }) }, rest), { children }));
  }
};

// src/components/ui/avatar/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Avatar({ image, username }) {
  return /* @__PURE__ */ jsx6("div", { className: "h-14 w-14 rounded-full border-[3px] border-yellow-700 p-1", children: /* @__PURE__ */ jsx6(
    "img",
    {
      src: image,
      alt: username,
      className: "h-full w-full rounded-full object-cover"
    }
  ) });
}

// src/components/ui/dialog/index.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { tv as tv6 } from "tailwind-variants";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var overlayVariant = tv6({
  base: "fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-zinc-950/25 backdrop-blur"
});
var containerVariant = tv6({
  base: "max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white focus:outline-none"
});
var contentVariant = tv6({
  base: "p-4"
});
var footerVariant = tv6({
  base: "flex gap-4 p-4 border-t border-t-zinc-200"
});
var headerVariant2 = tv6({
  base: "p-4"
});
var Dialog = {
  Root: (_a) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Root, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Portal: (_c) => {
    var _d = _c, { children } = _d, rest = __objRest(_d, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Portal, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Trigger: (_e) => {
    var _f = _e, { children } = _f, rest = __objRest(_f, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Overlay: (_g) => {
    var _h = _g, { children, className } = _h, rest = __objRest(_h, ["children", "className"]);
    return /* @__PURE__ */ jsx7(
      DialogPrimitive.Overlay,
      __spreadProps(__spreadValues({
        className: overlayVariant({ className })
      }, rest), {
        children
      })
    );
  },
  Header: ({ children, className }) => /* @__PURE__ */ jsxs3("div", { className: headerVariant2({ className }), children: [
    /* @__PURE__ */ jsx7(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx7(
      "button",
      {
        className: "absolute right-4 top-4 rounded border border-zinc-200 bg-zinc-100 p-1 text-zinc-400",
        "aria-label": "Close",
        children: /* @__PURE__ */ jsx7(X, { size: 16 })
      }
    ) }),
    children
  ] }),
  Content: (_i) => {
    var _j = _i, { children, as = "form", className } = _j, rest = __objRest(_j, ["children", "as", "className"]);
    const As = as;
    return /* @__PURE__ */ jsx7(As, __spreadProps(__spreadValues({}, rest), { className: contentVariant({ className }), children }));
  },
  Container: (_k) => {
    var _l = _k, { children, className } = _l, rest = __objRest(_l, ["children", "className"]);
    return /* @__PURE__ */ jsx7(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        className: containerVariant({ className })
      }, rest), {
        children
      })
    );
  },
  Title: (_m) => {
    var _n = _m, { children } = _n, rest = __objRest(_n, ["children"]);
    return /* @__PURE__ */ jsx7(
      DialogPrimitive.Title,
      __spreadProps(__spreadValues({
        className: "text-xl font-bold text-zinc-500"
      }, rest), {
        children
      })
    );
  },
  Description: (_o) => {
    var _p = _o, { children } = _p, rest = __objRest(_p, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Description, __spreadProps(__spreadValues({ className: "text-zinc-400" }, rest), { children }));
  },
  Close: (_q) => {
    var _r = _q, { children } = _r, rest = __objRest(_r, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Close, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Footer: (_s) => {
    var _t = _s, { children, className } = _t, rest = __objRest(_t, ["children", "className"]);
    return /* @__PURE__ */ jsx7("div", __spreadProps(__spreadValues({}, rest), { className: footerVariant({ className }), children }));
  }
};

// src/components/ui/alert-dialog/action.tsx
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx8 } from "react/jsx-runtime";
function Action2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx8(AlertDialogPrimitive.Action, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/cancel.tsx
import * as AlertDialogPrimitive2 from "@radix-ui/react-alert-dialog";
import { jsx as jsx9 } from "react/jsx-runtime";
function Cancel2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx9(AlertDialogPrimitive2.Cancel, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/content.tsx
import * as AlertDialogPrimitive3 from "@radix-ui/react-alert-dialog";
import { jsx as jsx10 } from "react/jsx-runtime";
function Content3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx10(
    AlertDialogPrimitive3.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: "data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
      children
    })
  );
}

// src/components/ui/alert-dialog/description.tsx
import * as AlertDialogPrimitive4 from "@radix-ui/react-alert-dialog";
import { jsx as jsx11 } from "react/jsx-runtime";
function Description3(_a) {
  var _b = _a, {
    children
  } = _b, rest = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ jsx11(AlertDialogPrimitive4.Description, __spreadProps(__spreadValues({}, rest), { className: "text-zinc-500", children }));
}

// src/components/ui/alert-dialog/overlay.tsx
import * as AlertDialogPrimitive5 from "@radix-ui/react-alert-dialog";
import { jsx as jsx12 } from "react/jsx-runtime";
function Overlay3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx12(
    AlertDialogPrimitive5.Overlay,
    __spreadProps(__spreadValues({}, rest), {
      className: "data-[state=open]:animate-overlay-show fixed inset-0 bg-zinc-950/25",
      children
    })
  );
}

// src/components/ui/alert-dialog/portal.tsx
import * as AlertDialogPrimitive6 from "@radix-ui/react-alert-dialog";
import { jsx as jsx13 } from "react/jsx-runtime";
function Portal3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx13(AlertDialogPrimitive6.Portal, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/root.tsx
import * as AlertDialogPrimitive7 from "@radix-ui/react-alert-dialog";
import { jsx as jsx14 } from "react/jsx-runtime";
function Root4(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx14(AlertDialogPrimitive7.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/title.tsx
import * as AlertDialogPrimitive8 from "@radix-ui/react-alert-dialog";
import { jsx as jsx15 } from "react/jsx-runtime";
function Title3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx15(
    AlertDialogPrimitive8.Title,
    __spreadProps(__spreadValues({}, rest), {
      className: "text-xl font-bold text-zinc-600",
      children
    })
  );
}

// src/components/ui/alert-dialog/trigger.tsx
import * as AlertDialogPrimitive9 from "@radix-ui/react-alert-dialog";
import { jsx as jsx16 } from "react/jsx-runtime";
function Trigger3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx16(AlertDialogPrimitive9.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/index.tsx
var AlertDialog = {
  Root: Root4,
  Trigger: Trigger3,
  Portal: Portal3,
  Overlay: Overlay3,
  Title: Title3,
  Description: Description3,
  Action: Action2,
  Cancel: Cancel2,
  Content: Content3
};

// src/components/ui/form/input/index.tsx
import { tv as tv7 } from "tailwind-variants";
import { forwardRef } from "react";
import { InputMask } from "@react-input/mask";
import { Fragment, jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
var variants = tv7({
  base: "w-full bg-zinc-50 p-2 rounded",
  variants: {
    variant: {
      default: "border-2 border-zinc-200 focus-within:border-yellow-700"
    },
    hasError: {
      true: "border-2 border-rose-500 focus-within:border-rose-500"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Input = forwardRef(
  (_a, ref) => {
    var _b = _a, { mask, error, className } = _b, rest = __objRest(_b, ["mask", "error", "className"]);
    return /* @__PURE__ */ jsxs4(Fragment, { children: [
      /* @__PURE__ */ jsx17("div", { className: variants({ className, hasError: !!error }), children: mask ? /* @__PURE__ */ jsx17(
        InputMask,
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          mask,
          replacement: {
            _: /\d/
          },
          className: "w-full bg-transparent outline-none"
        })
      ) : /* @__PURE__ */ jsx17(
        "input",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ jsx17("p", { className: "mt-1 text-xs text-rose-600", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/form/label/index.tsx
import { tv as tv8 } from "tailwind-variants";
import { jsx as jsx18 } from "react/jsx-runtime";
var labelVariant = tv8({
  base: "font-bold text-zinc-600"
});
function Label(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx18("label", __spreadProps(__spreadValues({}, rest), { className: labelVariant({ className }), children }));
}

// src/components/ui/form/select/icon.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { jsx as jsx19 } from "react/jsx-runtime";
function Icon2(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ jsx19(SelectPrimitive.Icon, __spreadProps(__spreadValues({}, rest), { children: /* @__PURE__ */ jsx19(ChevronDown, {}) }));
}

// src/components/ui/form/select/item.tsx
import * as SelectPrimitive2 from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx20, jsxs as jsxs5 } from "react/jsx-runtime";
var Item2 = forwardRef2(
  (_a, ref) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsxs5(
      SelectPrimitive2.Item,
      __spreadProps(__spreadValues({
        ref
      }, rest), {
        className: "flex cursor-pointer items-center justify-between border-b border-b-zinc-100 px-4 py-2 outline-none hover:bg-zinc-100",
        children: [
          /* @__PURE__ */ jsx20(SelectPrimitive2.ItemText, { children }),
          /* @__PURE__ */ jsx20(SelectPrimitive2.ItemIndicator, { children: /* @__PURE__ */ jsx20(CheckIcon, { size: 14, className: "text-yellow-600" }) })
        ]
      })
    );
  }
);

// src/components/ui/form/select/root.tsx
import * as SelectPrimitive3 from "@radix-ui/react-select";
import { jsx as jsx21, jsxs as jsxs6 } from "react/jsx-runtime";
function Root6(_a) {
  var _b = _a, {
    children,
    error,
    defaultValue
  } = _b, rest = __objRest(_b, [
    "children",
    "error",
    "defaultValue"
  ]);
  return /* @__PURE__ */ jsxs6(SelectPrimitive3.Root, __spreadProps(__spreadValues({}, rest), { defaultValue, children: [
    children,
    error && /* @__PURE__ */ jsx21("small", { className: "mt-1 text-xs text-rose-600", children: error })
  ] }));
}

// src/components/ui/form/select/value.tsx
import * as SelectPrimitive4 from "@radix-ui/react-select";
import { jsx as jsx22 } from "react/jsx-runtime";
function Value2(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ jsx22(SelectPrimitive4.Value, __spreadValues({}, rest));
}

// src/components/ui/form/select/group.tsx
import * as SelectPrimitive5 from "@radix-ui/react-select";
import { jsx as jsx23 } from "react/jsx-runtime";
function Group2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx23(SelectPrimitive5.Group, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/label.tsx
import * as SelectPrimitive6 from "@radix-ui/react-select";
import { jsx as jsx24 } from "react/jsx-runtime";
function Label3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx24(SelectPrimitive6.Label, __spreadProps(__spreadValues({}, rest), { className: "mt-4 text-center text-zinc-500", children }));
}

// src/components/ui/form/select/portal.tsx
import * as SelectPrimitive7 from "@radix-ui/react-select";
import { jsx as jsx25 } from "react/jsx-runtime";
function Portal5(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx25(SelectPrimitive7.Portal, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/content.tsx
import * as SelectPrimitive8 from "@radix-ui/react-select";
import { jsx as jsx26 } from "react/jsx-runtime";
function Content5(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx26(SelectPrimitive8.Content, __spreadProps(__spreadValues({}, rest), { className: "rounded bg-zinc-50", children }));
}

// src/components/ui/form/select/trigger.tsx
import * as SelectPrimitive9 from "@radix-ui/react-select";
import { jsx as jsx27 } from "react/jsx-runtime";
function Trigger5(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx27(
    SelectPrimitive9.Trigger,
    __spreadProps(__spreadValues({}, rest), {
      className: "flex w-full items-start justify-between rounded border-2 border-zinc-200 bg-zinc-50 p-2 outline-yellow-700",
      children
    })
  );
}

// src/components/ui/form/select/viewport.tsx
import * as SelectPrimitive10 from "@radix-ui/react-select";
import { jsx as jsx28 } from "react/jsx-runtime";
function Viewport2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx28(SelectPrimitive10.Viewport, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/item-text.tsx
import * as SelectPrimitive11 from "@radix-ui/react-select";
import { jsx as jsx29 } from "react/jsx-runtime";
function ItemText3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx29(SelectPrimitive11.ItemText, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/item-indicator.tsx
import * as SelectPrimitive12 from "@radix-ui/react-select";
import { jsx as jsx30 } from "react/jsx-runtime";
function ItemIndicator3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx30(SelectPrimitive12.ItemIndicator, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/index.tsx
var Select = {
  Root: Root6,
  Portal: Portal5,
  Trigger: Trigger5,
  Content: Content5,
  Viewport: Viewport2,
  Group: Group2,
  ItemIndicator: ItemIndicator3,
  ItemText: ItemText3,
  Item: Item2,
  Label: Label3,
  Value: Value2,
  Icon: Icon2
};

// src/components/ui/form/button/index.tsx
import { tv as tv9 } from "tailwind-variants";
import React from "react";
import { jsx as jsx31, jsxs as jsxs7 } from "react/jsx-runtime";
var buttonVariant = tv9({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2 items-center justify-center",
  variants: {
    variant: {
      default: "bg-yellow-600 hover:bg-yellow-700",
      secondary: "bg-zinc-800 text-zinc-400 hover:bg-zinc-800/75",
      link: "bg-zin-100 text-yellow-600 underline",
      destructive: "bg-rose-600 text-rose-200 hover:bg-rose-700",
      ghost: "bg-zinc-200 text-zinc-500 hover:bg-zinc-200/75"
    },
    disabled: {
      true: "bg-zinc-600 hover:bg-zinc-700 cursor-not-allowed"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Button(_a) {
  var _b = _a, {
    as,
    asChild,
    variant: variant4,
    children,
    disabled,
    className,
    iconLeft,
    iconRight
  } = _b, rest = __objRest(_b, [
    "as",
    "asChild",
    "variant",
    "children",
    "disabled",
    "className",
    "iconLeft",
    "iconRight"
  ]);
  const As = as || "button";
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, __spreadProps(__spreadValues({}, rest), {
      className: buttonVariant({ className, variant: variant4, disabled })
    }));
  }
  return /* @__PURE__ */ jsxs7(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant: variant4, disabled }), children: [
    IconLeft && /* @__PURE__ */ jsx31(IconLeft, {}),
    children,
    IconRight && /* @__PURE__ */ jsx31(IconRight, {})
  ] }));
}
Button.displayName = "Button";

// src/components/ui/form/checkbox/index.tsx
import { useState } from "react";
import { Check } from "lucide-react";
import { tv as tv10 } from "tailwind-variants";
import { jsx as jsx32 } from "react/jsx-runtime";
var variants2 = tv10({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100",
  variants: {
    checked: {
      true: "border border-yellow-700 bg-yellow-700 text-zinc-50",
      indeterminated: ""
    },
    disabled: {
      true: "bg-zinc-200 border-zinc-300 cursor-not-allowed"
    }
  },
  defaultVariants: {
    checked: false
  }
});
function Checkbox({
  checked = false,
  disabled = false,
  onValueChange
}) {
  const [isChecked, setIsChecked] = useState(
    checked
  );
  const toggleCheck = () => {
    setIsChecked(!isChecked);
    if (onValueChange) {
      onValueChange(!isChecked);
    }
  };
  return /* @__PURE__ */ jsx32(
    "button",
    {
      type: "button",
      disabled,
      onClick: toggleCheck,
      className: variants2({ checked: isChecked, disabled }),
      children: isChecked && /* @__PURE__ */ jsx32(Check, { size: 18 })
    }
  );
}

// src/components/ui/form/textarea/index.tsx
import { tv as tv11 } from "tailwind-variants";
import { forwardRef as forwardRef3 } from "react";
import { Fragment as Fragment2, jsx as jsx33, jsxs as jsxs8 } from "react/jsx-runtime";
var variants3 = tv11({
  base: "w-full p-2 bg-zinc-50 border border-zinc-100 rounded outline-yellow-700",
  variants: {
    variant: {
      default: "border-2 border-zinc-200 focus-within:border-yellow-700"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var TextArea = forwardRef3(
  (_a, ref) => {
    var _b = _a, { error, name, className } = _b, rest = __objRest(_b, ["error", "name", "className"]);
    return /* @__PURE__ */ jsxs8(Fragment2, { children: [
      /* @__PURE__ */ jsx33("div", { className: variants3({ className }), children: /* @__PURE__ */ jsx33(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ jsx33("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";

// src/components/ui/form/input-file/index.tsx
import { UploadIcon } from "lucide-react";
import { forwardRef as forwardRef4, useState as useState2 } from "react";
import { jsx as jsx34, jsxs as jsxs9 } from "react/jsx-runtime";
var InputFile = forwardRef4(
  (_a, ref) => {
    var _b = _a, { accept = ".pdf" } = _b, rest = __objRest(_b, ["accept"]);
    const [files, setFiles] = useState2(null);
    const onInputChange = (e) => setFiles(e.currentTarget.files);
    return /* @__PURE__ */ jsxs9("div", { className: "flex w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ jsx34(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full cursor-pointer items-center justify-center text-center",
          children: /* @__PURE__ */ jsx34("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsx34("small", { children: !files ? /* @__PURE__ */ jsxs9("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx34("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ jsx34("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsx34(UploadIcon, { className: "text-zinc-400" }) }),
            /* @__PURE__ */ jsxs9("small", { className: "text-zinc-500", children: [
              "(Somente arquivos ",
              accept,
              ")"
            ] })
          ] }) : /* @__PURE__ */ jsxs9("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx34("p", { children: "Arquivos selecionados:" }),
            /* @__PURE__ */ jsx34("div", { className: "mt-4", children: Array.from(files).map((item, index) => /* @__PURE__ */ jsxs9("small", { children: [
              item.name,
              " ",
              index > 0 && ", "
            ] }, item.name)) }),
            /* @__PURE__ */ jsx34("small", { className: "text-zinc-500" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ jsx34(
        "input",
        __spreadProps(__spreadValues({
          id: "file",
          ref
        }, rest), {
          type: "file",
          className: "hidden",
          accept,
          onChange: onInputChange
        })
      )
    ] });
  }
);

// src/components/ui/form/date-picker/index.tsx
import { useState as useState3 } from "react";
import { add, format } from "date-fns";
import { Calendar1 } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

// src/components/surfaces/calendar/index.tsx
import { ptBR } from "react-day-picker/locale";
import { DayPicker } from "react-day-picker";
import { jsx as jsx35 } from "react/jsx-runtime";
function Calendar(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ jsx35(
    DayPicker,
    __spreadProps(__spreadValues({}, rest), {
      locale: ptBR,
      classNames: {
        today: "text-red-500",
        range_end: "rounded-r",
        range_start: "rounded-l",
        chevron: "fill-zinc-500",
        month_caption: "py-4 px-12",
        day: "px-4 py-3 text-center",
        nav: "absolute right-4 top-8",
        month_grid: "w-full bg-zinc-10",
        range_middle: "bg-amber-500/25",
        selected: "bg-amber-500 text-white",
        root: "bg-zinc-50 p-4 rounded relative border border-zinc-200 shadow-lg"
      }
    })
  );
}

// src/components/ui/form/date-picker/index.tsx
import { jsx as jsx36, jsxs as jsxs10 } from "react/jsx-runtime";
function DatePicker({
  defaultValue,
  onValueChange,
  mode = "single"
}) {
  const [selected, setSelected] = useState3(() => {
    if (mode === "single") {
      return /* @__PURE__ */ new Date();
    }
    return {
      from: defaultValue ? defaultValue.from : /* @__PURE__ */ new Date(),
      to: defaultValue && defaultValue.to ? defaultValue.to : add(/* @__PURE__ */ new Date(), {
        days: 15
      })
    };
  });
  const onRangeSelected = (data) => {
    setSelected(data);
    if (onValueChange && mode === "range") {
      onValueChange(data);
    }
    if (onValueChange && mode === "single") {
      onValueChange(data);
    }
  };
  return /* @__PURE__ */ jsxs10(Popover.Root, { children: [
    /* @__PURE__ */ jsx36(Popover.Trigger, { children: /* @__PURE__ */ jsxs10(
      Button,
      {
        variant: "ghost",
        className: "w-full border border-zinc-300",
        type: "button",
        children: [
          /* @__PURE__ */ jsx36(Calendar1, { size: 14 }),
          mode === "single" ? format(selected, "dd/LL/yyyy") : format(selected.from || /* @__PURE__ */ new Date(), "dd/LL/yyyy") + " - " + format(selected.to || /* @__PURE__ */ new Date(), "dd/LL/yyyy")
        ]
      }
    ) }),
    /* @__PURE__ */ jsx36(Popover.Portal, { children: /* @__PURE__ */ jsx36(Popover.Content, { align: "start", children: /* @__PURE__ */ jsx36(
      Calendar,
      {
        required: true,
        className: "mt-2",
        mode,
        selected,
        onSelect: onRangeSelected
      }
    ) }) })
  ] });
}

// src/components/ui/form/year-picker/index.tsx
import { useState as useState4 } from "react";
import { tv as tv14 } from "tailwind-variants";
import { Calendar1 as Calendar12, ChevronLeft, ChevronRight } from "lucide-react";

// src/components/ui/popover/root.tsx
import * as Popover2 from "@radix-ui/react-popover";
import { jsx as jsx37 } from "react/jsx-runtime";
function Root9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx37(Popover2.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/arrow.tsx
import * as Popover3 from "@radix-ui/react-popover";
import { jsx as jsx38 } from "react/jsx-runtime";
function Arrow2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx38(Popover3.Arrow, __spreadProps(__spreadValues({}, rest), { className: "fill-zinc-50", children }));
}

// src/components/ui/popover/close.tsx
import * as Popover4 from "@radix-ui/react-popover";
import { tv as tv12 } from "tailwind-variants";
import { jsx as jsx39 } from "react/jsx-runtime";
var popoverCloseVariant = tv12({
  base: "absolute right-2 top-2 inline-flex cursor-pointer items-center justify-center text-zinc-400 outline-none border border-zinc-400 rounded hover:bg-zinc-100 transition-colors"
});
function Close3(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx39(
    Popover4.Close,
    __spreadProps(__spreadValues({}, rest), {
      className: popoverCloseVariant({ className }),
      "aria-label": "Close",
      children
    })
  );
}

// src/components/ui/popover/anchor.tsx
import * as Popover5 from "@radix-ui/react-popover";
import { jsx as jsx40 } from "react/jsx-runtime";
function Anchor2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx40(Popover5.Anchor, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/portal.tsx
import * as Popover6 from "@radix-ui/react-popover";
import { jsx as jsx41 } from "react/jsx-runtime";
function Portal8(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx41(Popover6.Portal, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/content.tsx
import * as Popover7 from "@radix-ui/react-popover";
import { tv as tv13 } from "tailwind-variants";
import { jsx as jsx42 } from "react/jsx-runtime";
var popoverContentVariation = tv13({
  base: "bg-zinc-100 rounded shadow-lg"
});
function Content8(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx42(
    Popover7.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: popoverContentVariation({ className }),
      sideOffset: 5,
      children
    })
  );
}

// src/components/ui/popover/trigger.tsx
import * as Popover8 from "@radix-ui/react-popover";
import { jsx as jsx43 } from "react/jsx-runtime";
function Trigger8(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx43(Popover8.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/index.tsx
var Popover9 = {
  Anchor: Anchor2,
  Arrow: Arrow2,
  Close: Close3,
  Content: Content8,
  Portal: Portal8,
  Root: Root9,
  Trigger: Trigger8
};

// src/components/ui/form/year-picker/index.tsx
import { jsx as jsx44, jsxs as jsxs11 } from "react/jsx-runtime";
var variant2 = tv14({
  base: "rounded bg-zinc-100 p-2 transition-colors hover:bg-zinc-200",
  variants: {
    selected: {
      true: "bg-yellow-600 hover:bg-yellow-700 text-zinc-50"
    }
  }
});
var YearPicker = ({
  onValueChange,
  defaultValue = (/* @__PURE__ */ new Date()).getFullYear()
}) => {
  const [year, setYear] = useState4(defaultValue);
  const [years] = useState4(
    () => Array.from({
      length: 9
    })
  );
  const handleYearChange = (value) => {
    setYear(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };
  const handleNextYearChange = () => setYear(year + 1);
  const handlePreviousYearChange = () => setYear(year - 1);
  return /* @__PURE__ */ jsxs11(Popover9.Root, { children: [
    /* @__PURE__ */ jsx44(Popover9.Trigger, { children: /* @__PURE__ */ jsxs11(
      Button,
      {
        variant: "ghost",
        className: "w-full border border-zinc-300",
        type: "button",
        children: [
          /* @__PURE__ */ jsx44(Calendar12, { size: 14 }),
          /* @__PURE__ */ jsx44("p", { children: year })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx44(Popover9.Portal, { children: /* @__PURE__ */ jsx44(Popover9.Content, { align: "start", children: /* @__PURE__ */ jsxs11("div", { children: [
      /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ jsx44("button", { onClick: handlePreviousYearChange, children: /* @__PURE__ */ jsx44(ChevronLeft, {}) }),
        /* @__PURE__ */ jsx44("button", { onClick: handleNextYearChange, children: /* @__PURE__ */ jsx44(ChevronRight, {}) })
      ] }),
      /* @__PURE__ */ jsx44("div", { className: "grid w-fit grid-cols-3 gap-2 rounded bg-zinc-50 p-2", children: years.map((_, index) => /* @__PURE__ */ jsx44(
        "button",
        {
          onClick: () => handleYearChange(year + index),
          className: variant2({ selected: year === year + index }),
          children: year + index
        }
      )) })
    ] }) }) })
  ] });
};
YearPicker.displayName = "YearPicker";

// src/components/ui/form/month-picker/index.tsx
import { tv as tv15 } from "tailwind-variants";
import { useState as useState5 } from "react";
import { Calendar1 as Calendar13, ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight2 } from "lucide-react";
import { format as format2 } from "date-fns";
import { jsx as jsx45, jsxs as jsxs12 } from "react/jsx-runtime";
var months = [
  { label: "Janeiro", value: 1 },
  { label: "Fevereiro", value: 2 },
  { label: "Mar\xE7o", value: 3 },
  { label: "Abril", value: 4 },
  { label: "Maio", value: 5 },
  { label: "Junho", value: 6 },
  { label: "Julho", value: 7 },
  { label: "Agosto", value: 8 },
  { label: "Setembro", value: 9 },
  { label: "Outubro", value: 10 },
  { label: "Novembro", value: 11 },
  { label: "Dezembro", value: 12 }
];
var variant3 = tv15({
  base: "rounded bg-zinc-100 p-2 transition-colors hover:bg-zinc-200",
  variants: {
    selected: {
      true: "bg-yellow-600 hover:bg-yellow-700 text-zinc-50"
    }
  }
});
var MonthPicker = ({
  onValueChange,
  mode = "month",
  defaultValue = format2(/* @__PURE__ */ new Date(), "yyyy-MM")
}) => {
  const [year, setYear] = useState5(() => {
    if (defaultValue && mode === "month-year") {
      const [defaultYear] = defaultValue.split("-");
      return Number(defaultYear);
    }
    return (/* @__PURE__ */ new Date()).getFullYear();
  });
  const [month, setMonth] = useState5(() => {
    if (defaultValue && mode === "month-year") {
      const [_, defaultMonth] = defaultValue.split("-");
      return months.find((item) => item.value === Number(defaultMonth)).label;
    }
    return months.find((item) => item.value === (/* @__PURE__ */ new Date()).getMonth()).label;
  });
  const handleMonthChange = (value) => {
    const month2 = months.find((item) => item.value === value);
    setMonth(month2.label);
    if (onValueChange && mode === "month-year") {
      const selectedMonth = months.find(
        (item) => item.value === value
      ).value;
      const formatedMonth = selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth.toString();
      onValueChange(year + "-" + formatedMonth);
    }
    if (onValueChange && mode === "month") {
      const selectedMonth = months.find(
        (item) => item.value === value
      ).value;
      const formatedMonth = selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth.toString();
      onValueChange(formatedMonth);
    }
  };
  const handleNextYearChange = () => setYear(year + 1);
  const handlePreviousYearChange = () => setYear(year - 1);
  return /* @__PURE__ */ jsxs12(Popover9.Root, { children: [
    /* @__PURE__ */ jsx45(Popover9.Trigger, { children: /* @__PURE__ */ jsxs12(
      Button,
      {
        variant: "ghost",
        className: "w-full border border-zinc-300",
        type: "button",
        children: [
          /* @__PURE__ */ jsx45(Calendar13, { size: 14 }),
          /* @__PURE__ */ jsxs12("p", { children: [
            month,
            " ",
            mode === "month-year" && " - " + year
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx45(Popover9.Portal, { children: /* @__PURE__ */ jsx45(Popover9.Content, { align: "start", children: /* @__PURE__ */ jsxs12("div", { children: [
      mode === "month-year" && /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ jsx45("button", { onClick: handlePreviousYearChange, children: /* @__PURE__ */ jsx45(ChevronLeft2, {}) }),
        /* @__PURE__ */ jsx45("p", { children: year }),
        /* @__PURE__ */ jsx45("button", { onClick: handleNextYearChange, children: /* @__PURE__ */ jsx45(ChevronRight2, {}) })
      ] }),
      /* @__PURE__ */ jsx45("div", { className: "grid w-fit grid-cols-3 gap-2 rounded bg-zinc-50 p-2", children: months.map((item) => /* @__PURE__ */ jsx45(
        "button",
        {
          onClick: () => handleMonthChange(item.value),
          className: variant3({
            selected: item.label === month
          }),
          children: item.label
        }
      )) })
    ] }) }) })
  ] });
};
MonthPicker.displayName = "MonthPicker";

// src/components/surfaces/menu/trigger.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
function Trigger9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx46(Popover9.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/menu/content.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx47 } from "react/jsx-runtime";
var Content9 = forwardRef5(
  (_a, ref) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx47("div", __spreadProps(__spreadValues({}, rest), { ref, className: "w-full bg-zinc-50", children }));
  }
);

// src/components/surfaces/menu/header.tsx
import { tv as tv16 } from "tailwind-variants";
import { jsx as jsx48 } from "react/jsx-runtime";
var menuHeaderVariant = tv16({
  base: "p-4 flex gap-4 items-center border-b border-b-zinc-200 rounded-t bg-zinc-50"
});
function Header2(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx48("div", __spreadProps(__spreadValues({ className: menuHeaderVariant({ className }) }, rest), { children }));
}

// src/components/surfaces/menu/footer.tsx
import { tv as tv17 } from "tailwind-variants";
import { jsx as jsx49 } from "react/jsx-runtime";
var menuFooterVariant = tv17({
  base: "bg-zinc-50 border-t border-t-zinc-200 rounded-b"
});
function Footer(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx49("div", __spreadProps(__spreadValues({ className: menuFooterVariant({ className }) }, rest), { children }));
}

// src/components/surfaces/menu/root.tsx
import { jsx as jsx50 } from "react/jsx-runtime";
function Root10(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx50(Popover9.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/menu/portal.tsx
import { jsx as jsx51, jsxs as jsxs13 } from "react/jsx-runtime";
function Portal9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx51(Popover9.Portal, __spreadProps(__spreadValues({}, rest), { children: /* @__PURE__ */ jsxs13(Popover9.Content, __spreadProps(__spreadValues({}, rest), { className: "w-[276px]", children: [
    children,
    /* @__PURE__ */ jsx51(Popover9.Arrow, {})
  ] })) }));
}

// src/components/surfaces/menu/item.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx52, jsxs as jsxs14 } from "react/jsx-runtime";
var Item3 = forwardRef6(
  (_a, ref) => {
    var _b = _a, { children, icon: Icon4 } = _b, rest = __objRest(_b, ["children", "icon"]);
    return /* @__PURE__ */ jsxs14(
      "a",
      __spreadProps(__spreadValues({}, rest), {
        ref,
        className: "flex w-full items-center gap-2 p-4 transition-colors hover:bg-zinc-100/75 hover:text-yellow-700",
        children: [
          Icon4 && /* @__PURE__ */ jsx52(Icon4, { size: 14 }),
          children
        ]
      })
    );
  }
);

// src/components/surfaces/menu/index.tsx
var Menu = {
  Root: Root10,
  Trigger: Trigger9,
  Portal: Portal9,
  Header: Header2,
  Content: Content9,
  Item: Item3,
  Footer
};

// src/components/surfaces/footer/index.tsx
import { jsxs as jsxs15 } from "react/jsx-runtime";
function Footer2() {
  return /* @__PURE__ */ jsxs15("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
import { tv as tv18 } from "tailwind-variants";
import { jsx as jsx53 } from "react/jsx-runtime";
var imageVariation = tv18({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx53("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
import { tv as tv19 } from "tailwind-variants";
import { jsx as jsx54 } from "react/jsx-runtime";
var rootVariation = tv19({
  base: "fixed left-0 top-0 w-full bg-zinc-950"
});
function Root11(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx54("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children: /* @__PURE__ */ jsx54("div", { className: "m-auto flex w-full max-w-6xl items-center justify-between p-4", children }) }));
}

// src/components/surfaces/header/index.tsx
var Header3 = {
  Root: Root11,
  Image
};

// src/components/surfaces/sidebar/icon.tsx
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

// src/components/surfaces/sidebar/context/sidebar.tsx
import { createContext, useContext } from "react";

// src/components/surfaces/sidebar/context/hooks/useSidebarContext.tsx
import { useState as useState6 } from "react";
function useSidebarContext() {
  const [state, setState] = useState6("open");
  const toggle = () => setState(state === "open" ? "close" : "open");
  return {
    state,
    toggle
  };
}

// src/components/surfaces/sidebar/context/sidebar.tsx
import { jsx as jsx55 } from "react/jsx-runtime";
var SidebarContext = createContext({});
function SidebarProvider({ children }) {
  const value = useSidebarContext();
  return /* @__PURE__ */ jsx55(SidebarContext.Provider, { value, children });
}
var useSidebar = () => useContext(SidebarContext);

// src/components/surfaces/sidebar/icon.tsx
import { jsx as jsx56 } from "react/jsx-runtime";
function Icon3(_a) {
  var rest = __objRest(_a, []);
  const { toggle, state } = useSidebar();
  return state === "open" ? /* @__PURE__ */ jsx56(PanelLeftClose, __spreadProps(__spreadValues({}, rest), { onClick: toggle })) : /* @__PURE__ */ jsx56(PanelLeftOpen, __spreadProps(__spreadValues({}, rest), { onClick: toggle }));
}

// src/components/typograph/text/index.tsx
import { tv as tv20 } from "tailwind-variants";
import { jsx as jsx57 } from "react/jsx-runtime";
var textVariant = tv20({
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xlg: "text-xl font-bold",
      "2xl": "text-2xl font-bold",
      "4xl": "text-3xl font-bold"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function Text(_a) {
  var _b = _a, { as = "p", children, size } = _b, rest = __objRest(_b, ["as", "children", "size"]);
  const As = as;
  return /* @__PURE__ */ jsx57(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
}

// src/components/surfaces/sidebar/item.tsx
import { jsx as jsx58, jsxs as jsxs16 } from "react/jsx-runtime";
function Item4(_a) {
  var _b = _a, { children, icon } = _b, rest = __objRest(_b, ["children", "icon"]);
  const Icon4 = icon;
  const { state } = useSidebar();
  return /* @__PURE__ */ jsxs16(
    "button",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "flex w-full gap-2 bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 data-[state=close]:max-w-24 data-[state=close]:justify-center",
      children: [
        Icon4 && /* @__PURE__ */ jsx58(Icon4, {}),
        /* @__PURE__ */ jsx58(
          Text,
          {
            as: "strong",
            "data-state": state,
            className: "data-[state=close]:hidden",
            children
          }
        )
      ]
    })
  );
}

// src/components/surfaces/sidebar/root.tsx
import { jsx as jsx59 } from "react/jsx-runtime";
function Root12(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx59(SidebarProvider, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/typograph/heading/index.tsx
import { tv as tv21 } from "tailwind-variants";
import { jsx as jsx60 } from "react/jsx-runtime";
var headingVariant = tv21({
  variants: {
    size: {
      xs: "text-base font-bold",
      sm: "text-lg font-bold",
      md: "text-xl font-bold",
      lg: "text-2xl	font-bold",
      xlg: "text-3xl font-bold",
      "2xl": "text-4xl font-bold",
      "4xl": "text-5xl font-bold"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function Heading(_a) {
  var _b = _a, {
    as = "h2",
    children,
    size,
    className
  } = _b, rest = __objRest(_b, [
    "as",
    "children",
    "size",
    "className"
  ]);
  const As = as;
  return /* @__PURE__ */ jsx60(As, __spreadProps(__spreadValues({ className: headingVariant({ size, className }) }, rest), { children }));
}

// src/components/surfaces/sidebar/title.tsx
import { jsx as jsx61 } from "react/jsx-runtime";
function Title4(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ jsx61(
    Heading,
    __spreadProps(__spreadValues({
      "data-state": state,
      size: "sm",
      className: "data-[state=close]:hidden"
    }, rest), {
      children
    })
  );
}

// src/components/surfaces/sidebar/footer.tsx
import { jsx as jsx62, jsxs as jsxs17 } from "react/jsx-runtime";
function Footer3(_a) {
  var _b = _a, { user, children } = _b, rest = __objRest(_b, ["user", "children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ jsxs17(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "w-full rounded-b data-[state=close]:max-w-24",
      children: [
        children,
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-zinc-50 p-4", children: [
          /* @__PURE__ */ jsx62(Avatar, { image: user.image, username: user.name }),
          /* @__PURE__ */ jsxs17(
            "div",
            {
              "data-state": state,
              className: "flex flex-col data-[state=close]:hidden",
              children: [
                /* @__PURE__ */ jsx62(Text, { size: "lg", as: "strong", children: user.name }),
                /* @__PURE__ */ jsx62(Text, { size: "xs", as: "small", className: "-mt-1 text-zinc-400", children: user.role })
              ]
            }
          )
        ] })
      ]
    })
  );
}

// src/components/surfaces/sidebar/header.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
function Header4(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ jsx63(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "flex h-16 w-full items-center justify-between rounded-t border-b border-b-zinc-200 p-4 data-[state=close]:max-w-24 data-[state=close]:justify-center",
      children
    })
  );
}

// src/components/surfaces/sidebar/content.tsx
import { jsx as jsx64 } from "react/jsx-runtime";
function Content10(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx64("div", __spreadProps(__spreadValues({}, rest), { className: "w-full", children }));
}

// src/components/surfaces/sidebar/container.tsx
import { jsx as jsx65 } from "react/jsx-runtime";
function Container(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ jsx65(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "parent group grid h-full w-full max-w-60 grid-rows-[auto,1fr,auto] gap-4 rounded bg-zinc-50 data-[state=close]:max-w-24",
      children
    })
  );
}

// src/components/surfaces/sidebar/index.tsx
var Sidebar = {
  Root: Root12,
  Content: Content10,
  Container,
  Header: Header4,
  Footer: Footer3,
  Item: Item4,
  Title: Title4,
  Icon: Icon3
};

// src/components/ui/navigation-menu/item.tsx
import * as Navigation from "@radix-ui/react-navigation-menu";
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx66 } from "react/jsx-runtime";
var Item6 = forwardRef7(
  (_a) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx66(Navigation.Item, __spreadProps(__spreadValues({}, rest), { children }));
  }
);

// src/components/ui/navigation-menu/list.tsx
import * as Navigation2 from "@radix-ui/react-navigation-menu";
import { jsx as jsx67 } from "react/jsx-runtime";
function List2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx67(Navigation2.List, { id: "navigation", children });
}

// src/components/ui/navigation-menu/root.tsx
import * as Navigation3 from "@radix-ui/react-navigation-menu";
import { jsx as jsx68 } from "react/jsx-runtime";
function Root14(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx68(Navigation3.Root, { id: "navigation", children });
}

// src/components/ui/navigation-menu/link.tsx
import * as Navigation4 from "@radix-ui/react-navigation-menu";
import { jsx as jsx69 } from "react/jsx-runtime";
function Link2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx69(Navigation4.Link, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/navigation-menu/trigger.tsx
import * as Navigation5 from "@radix-ui/react-navigation-menu";
import { tv as tv22 } from "tailwind-variants";
import { jsx as jsx70 } from "react/jsx-runtime";
var navigationMenuContentVariant = tv22({
  base: "bg-zinc-200 flex gap-4 items-center p-2 rounded"
});
function Trigger11(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx70(
    Navigation5.Trigger,
    __spreadProps(__spreadValues({}, rest), {
      className: navigationMenuContentVariant({ className }),
      children
    })
  );
}

// src/components/ui/navigation-menu/content.tsx
import * as Navigation6 from "@radix-ui/react-navigation-menu";
import { tv as tv23 } from "tailwind-variants";
import { jsx as jsx71 } from "react/jsx-runtime";
var navigationMenuContentVariant2 = tv23({
  base: "bg-zinc-50 mt-4 rounded h-fit"
});
function Content12(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx71(
    Navigation6.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: navigationMenuContentVariant2({ className }),
      children
    })
  );
}

// src/components/ui/navigation-menu/index.tsx
var NavigationMenu = {
  Root: Root14,
  Item: Item6,
  List: List2,
  Link: Link2,
  Content: Content12,
  Trigger: Trigger11
};
export {
  AlertDialog,
  Avatar,
  Button,
  Calendar,
  Card,
  Checkbox,
  DatePicker,
  Dialog,
  Footer2 as Footer,
  Header3 as Header,
  Heading,
  Input,
  InputFile,
  Label,
  Menu,
  MonthPicker,
  NavigationMenu,
  Popover9 as Popover,
  Select,
  Sidebar,
  Table,
  Text,
  TextArea,
  YearPicker
};
