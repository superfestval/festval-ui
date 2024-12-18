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
  icon: Icon,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between rounded-t bg-zinc-200 p-4", children: [
    children,
    Icon && /* @__PURE__ */ jsx3("div", { className: iconVariant({ variant: iconColor, className }), children: /* @__PURE__ */ jsx3(Icon, { size: 16 }) })
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
      default: "border-2 border-zinc-100 focus-within:border-yellow-700"
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
        __spreadProps(__spreadValues({}, rest), {
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

// src/components/ui/form/select/components/content.tsx
import { tv as tv9 } from "tailwind-variants";

// src/components/ui/form/select/context/index.tsx
import { createContext, useContext } from "react";

// src/components/ui/form/select/context/hooks/useSelectContext.tsx
import { useState } from "react";
function useSelectContext(onChange) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const onValueChange = (value2) => {
    setValue(value2);
    setIsOpen(false);
    if (onChange) {
      onChange(value2);
    }
  };
  const onTriggerClick = () => setIsOpen(!isOpen);
  return {
    value,
    isOpen,
    onValueChange,
    onTriggerClick
  };
}

// src/components/ui/form/select/context/index.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var SelectContext = createContext({});
var SelectProvider = ({ children, onChange }) => {
  const value = useSelectContext(onChange);
  return /* @__PURE__ */ jsx19(SelectContext.Provider, { value, children });
};
var useSelect = () => useContext(SelectContext);

// src/components/ui/form/select/components/content.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var contentVariable = tv9({
  base: "top-12 flex max-h-24 flex-col overflow-y-auto rounded absolute w-full",
  variants: {
    isOpen: {
      true: "flex",
      false: "hidden"
    }
  }
});
var Content4 = ({ children }) => {
  const { isOpen } = useSelect();
  return /* @__PURE__ */ jsx20("div", { className: contentVariable({ isOpen }), children });
};

// src/components/ui/form/select/components/item.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
var Item = ({ value, children }) => {
  const { onValueChange } = useSelect();
  const onClick = () => onValueChange(value);
  return /* @__PURE__ */ jsx21(
    "button",
    {
      type: "button",
      onClick,
      className: "w-full border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 text-left",
      children
    }
  );
};

// src/components/ui/form/select/components/root.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var Root5 = ({ children, onValeuChange }) => {
  return /* @__PURE__ */ jsx22(SelectProvider, { onChange: onValeuChange, children: /* @__PURE__ */ jsx22("div", { className: "relative", children }) });
};

// src/components/ui/form/select/components/trigger.tsx
import { tv as tv10 } from "tailwind-variants";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { jsx as jsx23, jsxs as jsxs5 } from "react/jsx-runtime";
var triggerVariable = tv10({
  base: "flex w-full items-center justify-between rounded border  bg-zinc-100 px-4 py-2 text-left",
  variants: {
    isOpen: {
      true: "border-yellow-600",
      false: "border-zinc-200"
    }
  }
});
var Trigger4 = ({ placeholder }) => {
  const { value, isOpen, onTriggerClick } = useSelect();
  return /* @__PURE__ */ jsxs5("button", { onClick: onTriggerClick, className: triggerVariable({ isOpen }), children: [
    value ? value : placeholder,
    isOpen ? /* @__PURE__ */ jsx23(ChevronUpIcon, {}) : /* @__PURE__ */ jsx23(ChevronDownIcon, {})
  ] });
};

// src/components/ui/form/select/index.tsx
var Select = {
  Root: Root5,
  Trigger: Trigger4,
  Content: Content4,
  Item
};

// src/components/ui/form/button/index.tsx
import { tv as tv11 } from "tailwind-variants";
import { jsx as jsx24, jsxs as jsxs6 } from "react/jsx-runtime";
var buttonVariant = tv11({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2",
  variants: {
    variant: {
      default: "bg-yellow-600 hover:bg-yellow-600/75",
      secondary: "bg-zinc-800 text-zinc-400 hover:bg-zinc-800/75",
      link: "bg-zin-100 text-yellow-600 underline",
      destructive: "bg-rose-600 text-rose-200 hover:bg-rose-600/75",
      ghost: "bg-zinc-200 text-zinc-500 hover:bg-zinc-200/75"
    },
    disabled: {
      true: "bg-zinc-600 hover:bg-zinc-600/75 cursor-not-allowed"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Button(_a) {
  var _b = _a, {
    as,
    variant: variant2,
    children,
    disabled,
    className,
    iconLeft,
    iconRight
  } = _b, rest = __objRest(_b, [
    "as",
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
  return /* @__PURE__ */ jsxs6(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant: variant2, disabled }), children: [
    IconLeft && /* @__PURE__ */ jsx24(IconLeft, {}),
    children,
    IconRight && /* @__PURE__ */ jsx24(IconRight, {})
  ] }));
}
Button.displayName = "Button";

// src/components/ui/form/checkbox/index.tsx
import { useState as useState2 } from "react";
import { Check } from "lucide-react";
import { tv as tv12 } from "tailwind-variants";
import { jsx as jsx25 } from "react/jsx-runtime";
var variants2 = tv12({
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
  const [isChecked, setIsChecked] = useState2(
    checked
  );
  const toggleCheck = () => {
    setIsChecked(!isChecked);
    if (onValueChange) {
      onValueChange(!isChecked);
    }
  };
  return /* @__PURE__ */ jsx25(
    "button",
    {
      type: "button",
      disabled,
      onClick: toggleCheck,
      className: variants2({ checked: isChecked, disabled }),
      children: isChecked && /* @__PURE__ */ jsx25(Check, { size: 18 })
    }
  );
}

// src/components/ui/form/textarea/index.tsx
import { tv as tv13 } from "tailwind-variants";
import { forwardRef as forwardRef2 } from "react";
import { Fragment as Fragment2, jsx as jsx26, jsxs as jsxs7 } from "react/jsx-runtime";
var variants3 = tv13({
  base: "w-full p-2 bg-transparent border border-zinc-200 rounded outline-yellow-700",
  variants: {
    variant: {
      default: "border-2 border-zinc-200 focus-within:border-yellow-700"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var TextArea = forwardRef2(
  (_a, ref) => {
    var _b = _a, { error, name, className } = _b, rest = __objRest(_b, ["error", "name", "className"]);
    return /* @__PURE__ */ jsxs7(Fragment2, { children: [
      /* @__PURE__ */ jsx26("div", { className: variants3({ className }), children: /* @__PURE__ */ jsx26(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ jsx26("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";

// src/components/ui/form/input-file/index.tsx
import { UploadIcon } from "lucide-react";
import { forwardRef as forwardRef3, useState as useState3 } from "react";
import { jsx as jsx27, jsxs as jsxs8 } from "react/jsx-runtime";
var InputFile = forwardRef3(
  (_a, ref) => {
    var _b = _a, { accept = ".pdf" } = _b, rest = __objRest(_b, ["accept"]);
    const [files, setFiles] = useState3(null);
    const onInputChange = (e) => setFiles(e.currentTarget.files);
    return /* @__PURE__ */ jsxs8("div", { className: "flex w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ jsx27(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full cursor-pointer items-center justify-center text-center",
          children: /* @__PURE__ */ jsx27("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsx27("small", { children: !files ? /* @__PURE__ */ jsxs8("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx27("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ jsx27("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsx27(UploadIcon, { className: "text-zinc-400" }) }),
            /* @__PURE__ */ jsxs8("small", { className: "text-zinc-500", children: [
              "(Somente arquivos ",
              accept,
              ")"
            ] })
          ] }) : /* @__PURE__ */ jsxs8("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx27("p", { children: "Arquivos selecionados:" }),
            /* @__PURE__ */ jsx27("div", { className: "mt-4", children: Array.from(files).map((item, index) => /* @__PURE__ */ jsxs8("small", { children: [
              item.name,
              " ",
              index > 0 && ", "
            ] }, item.name)) }),
            /* @__PURE__ */ jsx27("small", { className: "text-zinc-500" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ jsx27(
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

// src/components/surfaces/menu/index.tsx
import * as Navigation from "@radix-ui/react-navigation-menu";
import { jsx as jsx28, jsxs as jsxs9 } from "react/jsx-runtime";
function Menu({ signOut, children, username, avatarImage }) {
  return /* @__PURE__ */ jsx28(Navigation.Root, { id: "navigation", children: /* @__PURE__ */ jsx28(Navigation.List, { children: /* @__PURE__ */ jsxs9(Navigation.Item, { children: [
    /* @__PURE__ */ jsx28(Navigation.Trigger, { children }),
    /* @__PURE__ */ jsxs9(Navigation.Content, { className: "absolute right-2 w-[300px] rounded bg-zinc-50 shadow", children: [
      /* @__PURE__ */ jsxs9("div", { className: "flex w-full items-center gap-4 border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ jsx28(Avatar, { image: avatarImage, username }),
        /* @__PURE__ */ jsx28("p", { className: "inline-block", children: username })
      ] }),
      /* @__PURE__ */ jsx28("div", { className: "w-full p-4", children: /* @__PURE__ */ jsx28(Button, { onClick: signOut, className: "w-full", children: "Sair" }) })
    ] })
  ] }) }) });
}

// src/components/surfaces/footer/index.tsx
import { jsxs as jsxs10 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsxs10("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
import { tv as tv14 } from "tailwind-variants";
import { jsx as jsx29 } from "react/jsx-runtime";
var imageVariation = tv14({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx29("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
import { tv as tv15 } from "tailwind-variants";
import { jsx as jsx30 } from "react/jsx-runtime";
var rootVariation = tv15({
  base: "fixed left-0 top-0 w-full bg-zinc-950"
});
function Root7(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx30("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children: /* @__PURE__ */ jsx30("div", { className: "m-auto flex w-full max-w-4xl items-center justify-between p-4", children }) }));
}

// src/components/surfaces/header/index.tsx
var Header2 = {
  Root: Root7,
  Image
};

// src/components/typograph/text/index.tsx
import { tv as tv16 } from "tailwind-variants";
import { jsx as jsx31 } from "react/jsx-runtime";
var textVariant = tv16({
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
  return /* @__PURE__ */ jsx31(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
}

// src/components/typograph/heading/index.tsx
import { tv as tv17 } from "tailwind-variants";
import { jsx as jsx32 } from "react/jsx-runtime";
var headingVariant = tv17({
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
  return /* @__PURE__ */ jsx32(As, __spreadProps(__spreadValues({ className: headingVariant({ size, className }) }, rest), { children }));
}
export {
  AlertDialog,
  Avatar,
  Button,
  Card,
  Checkbox,
  Dialog,
  Footer,
  Header2 as Header,
  Heading,
  Input,
  InputFile,
  Label,
  Menu,
  Select,
  Table,
  Text
};
