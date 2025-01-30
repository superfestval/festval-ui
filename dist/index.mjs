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
  icon: Icon3,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between rounded-t bg-zinc-200 p-4", children: [
    children,
    Icon3 && /* @__PURE__ */ jsx3("div", { className: iconVariant({ variant: iconColor, className }), children: /* @__PURE__ */ jsx3(Icon3, { size: 16 }) })
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
var cellHeadVariant = tv5({
  base: "bg-zinc-200 p-4 text-left text-zinc-600",
  variants: {
    position: {
      first: "rounded-tl-lg",
      last: "rounded-tr-lg"
    }
  }
});
var Table = {
  Root: (_a) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx5("table", __spreadProps(__spreadValues({ className: "m-auto mt-6 w-full max-w-[1120px]" }, rest), { children }));
  },
  Caption: (_c) => {
    var _d = _c, { children } = _d, rest = __objRest(_d, ["children"]);
    return /* @__PURE__ */ jsx5(
      "caption",
      __spreadProps(__spreadValues({
        className: "rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4"
      }, rest), {
        children
      })
    );
  },
  THead: (_e) => {
    var _f = _e, { children } = _f, rest = __objRest(_f, ["children"]);
    return /* @__PURE__ */ jsx5("thead", __spreadProps(__spreadValues({ className: "rounded-t" }, rest), { children }));
  },
  TBody: (_g) => {
    var _h = _g, { children } = _h, rest = __objRest(_h, ["children"]);
    return /* @__PURE__ */ jsx5("tbody", __spreadProps(__spreadValues({}, rest), { children }));
  },
  Tr: (_i) => {
    var _j = _i, { children } = _j, rest = __objRest(_j, ["children"]);
    return /* @__PURE__ */ jsx5("tr", __spreadProps(__spreadValues({ className: "rounded-t bg-zinc-50" }, rest), { children }));
  },
  Th: (_k) => {
    var _l = _k, { children, position, onClick } = _l, rest = __objRest(_l, ["children", "position", "onClick"]);
    return /* @__PURE__ */ jsxs2("th", __spreadProps(__spreadValues({}, rest), { className: cellHeadVariant({ position }), children: [
      children,
      onClick && /* @__PURE__ */ jsx5("button", { onClick, className: "ml-4", children: /* @__PURE__ */ jsx5(ArrowDownUp, { size: 12 }) })
    ] }));
  },
  Td: (_m) => {
    var _n = _m, { children } = _n, rest = __objRest(_n, ["children"]);
    return /* @__PURE__ */ jsx5("td", __spreadProps(__spreadValues({ className: "border-b border-b-zinc-200 px-4 py-2" }, rest), { children }));
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
  Content: ({ children, as = "form", className }) => {
    const As = as;
    return /* @__PURE__ */ jsx7(As, { className: contentVariant({ className }), children });
  },
  Container: (_i) => {
    var _j = _i, { children, className } = _j, rest = __objRest(_j, ["children", "className"]);
    return /* @__PURE__ */ jsx7(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        className: containerVariant({ className })
      }, rest), {
        children
      })
    );
  },
  Title: (_k) => {
    var _l = _k, { children } = _l, rest = __objRest(_l, ["children"]);
    return /* @__PURE__ */ jsx7(
      DialogPrimitive.Title,
      __spreadProps(__spreadValues({
        className: "text-xl font-bold text-zinc-500"
      }, rest), {
        children
      })
    );
  },
  Description: (_m) => {
    var _n = _m, { children } = _n, rest = __objRest(_n, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Description, __spreadProps(__spreadValues({ className: "text-zinc-400" }, rest), { children }));
  },
  Close: (_o) => {
    var _p = _o, { children } = _p, rest = __objRest(_p, ["children"]);
    return /* @__PURE__ */ jsx7(DialogPrimitive.Close, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Footer: (_q) => {
    var _r = _q, { children, className } = _r, rest = __objRest(_r, ["children", "className"]);
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
    var _b = _a, { mask, error, name, className } = _b, rest = __objRest(_b, ["mask", "error", "name", "className"]);
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
import { jsx as jsx21 } from "react/jsx-runtime";
function Root6(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx21(SelectPrimitive3.Root, __spreadProps(__spreadValues({}, rest), { children }));
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
import { jsx as jsx31, jsxs as jsxs6 } from "react/jsx-runtime";
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
    variant: variant2,
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
      className: buttonVariant({ className, variant: variant2, disabled })
    }));
  }
  return /* @__PURE__ */ jsxs6(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant: variant2, disabled }), children: [
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
import { Fragment as Fragment2, jsx as jsx33, jsxs as jsxs7 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs7(Fragment2, { children: [
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
import { jsx as jsx34, jsxs as jsxs8 } from "react/jsx-runtime";
var InputFile = forwardRef4(
  (_a, ref) => {
    var _b = _a, { accept = ".pdf" } = _b, rest = __objRest(_b, ["accept"]);
    const [files, setFiles] = useState2(null);
    const onInputChange = (e) => setFiles(e.currentTarget.files);
    return /* @__PURE__ */ jsxs8("div", { className: "flex w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ jsx34(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full cursor-pointer items-center justify-center text-center",
          children: /* @__PURE__ */ jsx34("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsx34("small", { children: !files ? /* @__PURE__ */ jsxs8("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx34("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ jsx34("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsx34(UploadIcon, { className: "text-zinc-400" }) }),
            /* @__PURE__ */ jsxs8("small", { className: "text-zinc-500", children: [
              "(Somente arquivos ",
              accept,
              ")"
            ] })
          ] }) : /* @__PURE__ */ jsxs8("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx34("p", { children: "Arquivos selecionados:" }),
            /* @__PURE__ */ jsx34("div", { className: "mt-4", children: Array.from(files).map((item, index) => /* @__PURE__ */ jsxs8("small", { children: [
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
import * as Popover from "@radix-ui/react-popover";
import { Calendar1 } from "lucide-react";
import { useState as useState3 } from "react";
import { add, format } from "date-fns";
import { jsx as jsx36, jsxs as jsxs9 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs9(Popover.Root, { children: [
    /* @__PURE__ */ jsx36(Popover.Trigger, { children: /* @__PURE__ */ jsxs9(
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
    /* @__PURE__ */ jsx36(Popover.Portal, { children: /* @__PURE__ */ jsx36(Popover.Content, { children: /* @__PURE__ */ jsx36(
      Calendar,
      {
        required: true,
        className: "mt-4",
        mode,
        selected,
        onSelect: onRangeSelected
      }
    ) }) })
  ] });
}

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

// src/components/surfaces/menu/trigger.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
function Trigger9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx44(Popover9.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/menu/content.tsx
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx45 } from "react/jsx-runtime";
var Content9 = forwardRef5(
  (_a, ref) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx45("div", __spreadProps(__spreadValues({}, rest), { ref, className: "w-full bg-zinc-50", children }));
  }
);

// src/components/surfaces/menu/header.tsx
import { tv as tv14 } from "tailwind-variants";
import { jsx as jsx46 } from "react/jsx-runtime";
var menuHeaderVariant = tv14({
  base: "p-4 flex gap-4 items-center border-b border-b-zinc-200 rounded-t bg-zinc-50"
});
function Header2(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx46("div", __spreadProps(__spreadValues({ className: menuHeaderVariant({ className }) }, rest), { children }));
}

// src/components/surfaces/menu/footer.tsx
import { tv as tv15 } from "tailwind-variants";
import { jsx as jsx47 } from "react/jsx-runtime";
var menuFooterVariant = tv15({
  base: "bg-zinc-50 border-t border-t-zinc-200 rounded-b"
});
function Footer(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx47("div", __spreadProps(__spreadValues({ className: menuFooterVariant({ className }) }, rest), { children }));
}

// src/components/surfaces/menu/root.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
function Root10(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx48(Popover9.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/menu/portal.tsx
import { jsx as jsx49, jsxs as jsxs10 } from "react/jsx-runtime";
function Portal9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx49(Popover9.Portal, __spreadProps(__spreadValues({}, rest), { children: /* @__PURE__ */ jsxs10(Popover9.Content, __spreadProps(__spreadValues({}, rest), { className: "w-[276px]", children: [
    children,
    /* @__PURE__ */ jsx49(Popover9.Arrow, {})
  ] })) }));
}

// src/components/surfaces/menu/item.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx50, jsxs as jsxs11 } from "react/jsx-runtime";
var Item3 = forwardRef6(
  (_a, ref) => {
    var _b = _a, { children, icon: Icon3 } = _b, rest = __objRest(_b, ["children", "icon"]);
    return /* @__PURE__ */ jsxs11(
      "a",
      __spreadProps(__spreadValues({}, rest), {
        ref,
        className: "flex w-full items-center gap-2 p-4 transition-colors hover:bg-zinc-100/75 hover:text-yellow-700",
        children: [
          Icon3 && /* @__PURE__ */ jsx50(Icon3, { size: 14 }),
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
import { jsxs as jsxs12 } from "react/jsx-runtime";
function Footer2() {
  return /* @__PURE__ */ jsxs12("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
import { tv as tv16 } from "tailwind-variants";
import { jsx as jsx51 } from "react/jsx-runtime";
var imageVariation = tv16({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx51("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
import { tv as tv17 } from "tailwind-variants";
import { jsx as jsx52 } from "react/jsx-runtime";
var rootVariation = tv17({
  base: "fixed left-0 top-0 w-full bg-zinc-950"
});
function Root11(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx52("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children: /* @__PURE__ */ jsx52("div", { className: "m-auto flex w-full max-w-6xl items-center justify-between p-4", children }) }));
}

// src/components/surfaces/header/index.tsx
var Header3 = {
  Root: Root11,
  Image
};

// src/components/ui/navigation-menu/item.tsx
import * as Navigation from "@radix-ui/react-navigation-menu";
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx53 } from "react/jsx-runtime";
var Item5 = forwardRef7(
  (_a) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ jsx53(Navigation.Item, __spreadProps(__spreadValues({}, rest), { children }));
  }
);

// src/components/ui/navigation-menu/list.tsx
import * as Navigation2 from "@radix-ui/react-navigation-menu";
import { jsx as jsx54 } from "react/jsx-runtime";
function List2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx54(Navigation2.List, { id: "navigation", children });
}

// src/components/ui/navigation-menu/root.tsx
import * as Navigation3 from "@radix-ui/react-navigation-menu";
import { jsx as jsx55 } from "react/jsx-runtime";
function Root13(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx55(Navigation3.Root, { id: "navigation", children });
}

// src/components/ui/navigation-menu/link.tsx
import * as Navigation4 from "@radix-ui/react-navigation-menu";
import { jsx as jsx56 } from "react/jsx-runtime";
function Link2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx56(Navigation4.Link, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/navigation-menu/trigger.tsx
import * as Navigation5 from "@radix-ui/react-navigation-menu";
import { tv as tv18 } from "tailwind-variants";
import { jsx as jsx57 } from "react/jsx-runtime";
var navigationMenuContentVariant = tv18({
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
  return /* @__PURE__ */ jsx57(
    Navigation5.Trigger,
    __spreadProps(__spreadValues({}, rest), {
      className: navigationMenuContentVariant({ className }),
      children
    })
  );
}

// src/components/ui/navigation-menu/content.tsx
import * as Navigation6 from "@radix-ui/react-navigation-menu";
import { tv as tv19 } from "tailwind-variants";
import { jsx as jsx58 } from "react/jsx-runtime";
var navigationMenuContentVariant2 = tv19({
  base: "bg-zinc-50 mt-4 rounded h-fit"
});
function Content11(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx58(
    Navigation6.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: navigationMenuContentVariant2({ className }),
      children
    })
  );
}

// src/components/ui/navigation-menu/index.tsx
var NavigationMenu = {
  Root: Root13,
  Item: Item5,
  List: List2,
  Link: Link2,
  Content: Content11,
  Trigger: Trigger11
};

// src/components/typograph/text/index.tsx
import { tv as tv20 } from "tailwind-variants";
import { jsx as jsx59 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx59(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
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
  NavigationMenu,
  Popover9 as Popover,
  Select,
  Table,
  Text,
  TextArea
};
