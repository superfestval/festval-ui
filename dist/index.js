"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AlertDialog: () => AlertDialog,
  Avatar: () => Avatar,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  Footer: () => Footer,
  Header: () => Header2,
  Heading: () => Heading,
  Input: () => Input,
  InputFile: () => InputFile,
  Label: () => Label,
  Menu: () => Menu,
  Select: () => Select,
  Table: () => Table,
  Text: () => Text,
  TextArea: () => TextArea
});
module.exports = __toCommonJS(src_exports);

// src/components/ui/card/body.tsx
var import_tailwind_variants = require("tailwind-variants");
var import_jsx_runtime = require("react/jsx-runtime");
var variant = (0, import_tailwind_variants.tv)({
  base: "flex-1 rounded-b bg-zinc-50 p-4"
});
var Body = (_a) => {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadProps(__spreadValues({ className: variant({ className }) }, rest), { children }));
};

// src/components/ui/card/root.tsx
var import_tailwind_variants2 = require("tailwind-variants");
var import_jsx_runtime2 = require("react/jsx-runtime");
var cardRootVariant = (0, import_tailwind_variants2.tv)({
  base: "w-full flex flex-col rounded bg-zinc-100"
});
var Root = (_a) => {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", __spreadProps(__spreadValues({ className: cardRootVariant({ className }) }, rest), { children }));
};

// src/components/ui/card/header.tsx
var import_tailwind_variants3 = require("tailwind-variants");
var import_jsx_runtime3 = require("react/jsx-runtime");
var headerVariant = (0, import_tailwind_variants3.tv)({});
var iconVariant = (0, import_tailwind_variants3.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-start justify-between rounded-t bg-zinc-200 p-4", children: [
    children,
    Icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: iconVariant({ variant: iconColor, className }), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { size: 16 }) })
  ] });
};

// src/components/ui/card/footer.tsx
var import_tailwind_variants4 = require("tailwind-variants");
var import_jsx_runtime4 = require("react/jsx-runtime");
var cardfooterVariant = (0, import_tailwind_variants4.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", __spreadProps(__spreadValues({ className: cardfooterVariant({ className }) }, rest), { children }));
};

// src/components/ui/card/index.tsx
var Card = {
  Root,
  Header,
  Body,
  CardFooter
};

// src/components/ui/table/index.tsx
var import_lucide_react = require("lucide-react");
var import_tailwind_variants5 = require("tailwind-variants");
var import_jsx_runtime5 = require("react/jsx-runtime");
var cellHeadVariant = (0, import_tailwind_variants5.tv)({
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("table", __spreadProps(__spreadValues({ className: "m-auto mt-6 w-full max-w-[1120px]" }, rest), { children }));
  },
  Caption: (_c) => {
    var _d = _c, { children } = _d, rest = __objRest(_d, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", __spreadProps(__spreadValues({ className: "rounded-t" }, rest), { children }));
  },
  TBody: (_g) => {
    var _h = _g, { children } = _h, rest = __objRest(_h, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", __spreadProps(__spreadValues({}, rest), { children }));
  },
  Tr: (_i) => {
    var _j = _i, { children } = _j, rest = __objRest(_j, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", __spreadProps(__spreadValues({ className: "rounded-t bg-zinc-50" }, rest), { children }));
  },
  Th: (_k) => {
    var _l = _k, { children, position, onClick } = _l, rest = __objRest(_l, ["children", "position", "onClick"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("th", __spreadProps(__spreadValues({}, rest), { className: cellHeadVariant({ position }), children: [
      children,
      onClick && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { onClick, className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.ArrowDownUp, { size: 12 }) })
    ] }));
  },
  Td: (_m) => {
    var _n = _m, { children } = _n, rest = __objRest(_n, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", __spreadProps(__spreadValues({ className: "border-b border-b-zinc-200 px-4 py-2" }, rest), { children }));
  }
};

// src/components/ui/avatar/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Avatar({ image, username }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "h-14 w-14 rounded-full border-[3px] border-yellow-700 p-1", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "img",
    {
      src: image,
      alt: username,
      className: "h-full w-full rounded-full object-cover"
    }
  ) });
}

// src/components/ui/dialog/index.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react2 = require("lucide-react");
var import_tailwind_variants6 = require("tailwind-variants");
var import_jsx_runtime7 = require("react/jsx-runtime");
var overlayVariant = (0, import_tailwind_variants6.tv)({
  base: "fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-zinc-950/25 backdrop-blur"
});
var containerVariant = (0, import_tailwind_variants6.tv)({
  base: "max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white focus:outline-none"
});
var contentVariant = (0, import_tailwind_variants6.tv)({
  base: "p-4"
});
var footerVariant = (0, import_tailwind_variants6.tv)({
  base: "flex gap-4 p-4 border-t border-t-zinc-200"
});
var headerVariant2 = (0, import_tailwind_variants6.tv)({
  base: "p-4"
});
var Dialog = {
  Root: (_a) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Root, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Portal: (_c) => {
    var _d = _c, { children } = _d, rest = __objRest(_d, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Portal, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Trigger: (_e) => {
    var _f = _e, { children } = _f, rest = __objRest(_f, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Overlay: (_g) => {
    var _h = _g, { children, className } = _h, rest = __objRest(_h, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      DialogPrimitive.Overlay,
      __spreadProps(__spreadValues({
        className: overlayVariant({ className })
      }, rest), {
        children
      })
    );
  },
  Header: ({ children, className }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: headerVariant2({ className }), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        className: "absolute right-4 top-4 rounded border border-zinc-200 bg-zinc-100 p-1 text-zinc-400",
        "aria-label": "Close",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.X, { size: 16 })
      }
    ) }),
    children
  ] }),
  Content: ({ children, as = "form", className }) => {
    const As = as;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(As, { className: contentVariant({ className }), children });
  },
  Container: (_i) => {
    var _j = _i, { children, className } = _j, rest = __objRest(_j, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Description, __spreadProps(__spreadValues({ className: "text-zinc-400" }, rest), { children }));
  },
  Close: (_o) => {
    var _p = _o, { children } = _p, rest = __objRest(_p, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Close, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Footer: (_q) => {
    var _r = _q, { children, className } = _r, rest = __objRest(_r, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", __spreadProps(__spreadValues({}, rest), { className: footerVariant({ className }), children }));
  }
};

// src/components/ui/alert-dialog/action.tsx
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime8 = require("react/jsx-runtime");
function Action2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AlertDialogPrimitive.Action, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/cancel.tsx
var AlertDialogPrimitive2 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime9 = require("react/jsx-runtime");
function Cancel2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(AlertDialogPrimitive2.Cancel, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/content.tsx
var AlertDialogPrimitive3 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime10 = require("react/jsx-runtime");
function Content3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    AlertDialogPrimitive3.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: "data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
      children
    })
  );
}

// src/components/ui/alert-dialog/description.tsx
var AlertDialogPrimitive4 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime11 = require("react/jsx-runtime");
function Description3(_a) {
  var _b = _a, {
    children
  } = _b, rest = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(AlertDialogPrimitive4.Description, __spreadProps(__spreadValues({}, rest), { className: "text-zinc-500", children }));
}

// src/components/ui/alert-dialog/overlay.tsx
var AlertDialogPrimitive5 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime12 = require("react/jsx-runtime");
function Overlay3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    AlertDialogPrimitive5.Overlay,
    __spreadProps(__spreadValues({}, rest), {
      className: "data-[state=open]:animate-overlay-show fixed inset-0 bg-zinc-950/25",
      children
    })
  );
}

// src/components/ui/alert-dialog/portal.tsx
var AlertDialogPrimitive6 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime13 = require("react/jsx-runtime");
function Portal3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AlertDialogPrimitive6.Portal, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/root.tsx
var AlertDialogPrimitive7 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime14 = require("react/jsx-runtime");
function Root4(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AlertDialogPrimitive7.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/alert-dialog/title.tsx
var AlertDialogPrimitive8 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime15 = require("react/jsx-runtime");
function Title3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    AlertDialogPrimitive8.Title,
    __spreadProps(__spreadValues({}, rest), {
      className: "text-xl font-bold text-zinc-600",
      children
    })
  );
}

// src/components/ui/alert-dialog/trigger.tsx
var AlertDialogPrimitive9 = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime16 = require("react/jsx-runtime");
function Trigger3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AlertDialogPrimitive9.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
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
var import_tailwind_variants7 = require("tailwind-variants");
var import_react = require("react");
var import_mask = require("@react-input/mask");
var import_jsx_runtime17 = require("react/jsx-runtime");
var variants = (0, import_tailwind_variants7.tv)({
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
var Input = (0, import_react.forwardRef)(
  (_a, ref) => {
    var _b = _a, { mask, error, name, className } = _b, rest = __objRest(_b, ["mask", "error", "name", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: variants({ className, hasError: !!error }), children: mask ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_mask.InputMask,
        __spreadProps(__spreadValues({}, rest), {
          mask,
          replacement: {
            _: /\d/
          },
          className: "w-full bg-transparent outline-none"
        })
      ) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "input",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mt-1 text-xs text-rose-600", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/form/label/index.tsx
var import_tailwind_variants8 = require("tailwind-variants");
var import_jsx_runtime18 = require("react/jsx-runtime");
var labelVariant = (0, import_tailwind_variants8.tv)({
  base: "font-bold text-zinc-600"
});
function Label(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", __spreadProps(__spreadValues({}, rest), { className: labelVariant({ className }), children }));
}

// src/components/ui/form/select/components/content.tsx
var import_tailwind_variants9 = require("tailwind-variants");

// src/components/ui/form/select/context/index.tsx
var import_react3 = require("react");

// src/components/ui/form/select/context/hooks/useSelectContext.tsx
var import_react2 = require("react");
function useSelectContext(onChange) {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [value, setValue] = (0, import_react2.useState)(null);
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
var import_jsx_runtime19 = require("react/jsx-runtime");
var SelectContext = (0, import_react3.createContext)({});
var SelectProvider = ({ children, onChange }) => {
  const value = useSelectContext(onChange);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectContext.Provider, { value, children });
};
var useSelect = () => (0, import_react3.useContext)(SelectContext);

// src/components/ui/form/select/components/content.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var contentVariable = (0, import_tailwind_variants9.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: contentVariable({ isOpen }), children });
};

// src/components/ui/form/select/components/item.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var Item = ({ value, children }) => {
  const { onValueChange } = useSelect();
  const onClick = () => onValueChange(value);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var import_jsx_runtime22 = require("react/jsx-runtime");
var Root5 = ({ children, onValeuChange }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SelectProvider, { onChange: onValeuChange, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "relative", children }) });
};

// src/components/ui/form/select/components/trigger.tsx
var import_tailwind_variants10 = require("tailwind-variants");
var import_react_icons = require("@radix-ui/react-icons");
var import_jsx_runtime23 = require("react/jsx-runtime");
var triggerVariable = (0, import_tailwind_variants10.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "button",
    {
      type: "button",
      onClick: onTriggerClick,
      className: triggerVariable({ isOpen }),
      children: [
        value ? value : placeholder,
        isOpen ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_icons.ChevronUpIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_icons.ChevronDownIcon, {})
      ]
    }
  );
};

// src/components/ui/form/select/index.tsx
var Select = {
  Root: Root5,
  Trigger: Trigger4,
  Content: Content4,
  Item
};

// src/components/ui/form/button/index.tsx
var import_tailwind_variants11 = require("tailwind-variants");
var import_jsx_runtime24 = require("react/jsx-runtime");
var buttonVariant = (0, import_tailwind_variants11.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant: variant2, disabled }), children: [
    IconLeft && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(IconLeft, {}),
    children,
    IconRight && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(IconRight, {})
  ] }));
}
Button.displayName = "Button";

// src/components/ui/form/checkbox/index.tsx
var import_react4 = require("react");
var import_lucide_react3 = require("lucide-react");
var import_tailwind_variants12 = require("tailwind-variants");
var import_jsx_runtime25 = require("react/jsx-runtime");
var variants2 = (0, import_tailwind_variants12.tv)({
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
  const [isChecked, setIsChecked] = (0, import_react4.useState)(
    checked
  );
  const toggleCheck = () => {
    setIsChecked(!isChecked);
    if (onValueChange) {
      onValueChange(!isChecked);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "button",
    {
      type: "button",
      disabled,
      onClick: toggleCheck,
      className: variants2({ checked: isChecked, disabled }),
      children: isChecked && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react3.Check, { size: 18 })
    }
  );
}

// src/components/ui/form/textarea/index.tsx
var import_tailwind_variants13 = require("tailwind-variants");
var import_react5 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var variants3 = (0, import_tailwind_variants13.tv)({
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
var TextArea = (0, import_react5.forwardRef)(
  (_a, ref) => {
    var _b = _a, { error, name, className } = _b, rest = __objRest(_b, ["error", "name", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: variants3({ className }), children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";

// src/components/ui/form/input-file/index.tsx
var import_lucide_react4 = require("lucide-react");
var import_react6 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var InputFile = (0, import_react6.forwardRef)(
  (_a, ref) => {
    var _b = _a, { accept = ".pdf" } = _b, rest = __objRest(_b, ["accept"]);
    const [files, setFiles] = (0, import_react6.useState)(null);
    const onInputChange = (e) => setFiles(e.currentTarget.files);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "flex w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full cursor-pointer items-center justify-center text-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { children: !files ? /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react4.UploadIcon, { className: "text-zinc-400" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("small", { className: "text-zinc-500", children: [
              "(Somente arquivos ",
              accept,
              ")"
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { children: "Arquivos selecionados:" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mt-4", children: Array.from(files).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("small", { children: [
              item.name,
              " ",
              index > 0 && ", "
            ] }, item.name)) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("small", { className: "text-zinc-500" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
var Navigation = __toESM(require("@radix-ui/react-navigation-menu"));
var import_jsx_runtime28 = require("react/jsx-runtime");
function Menu({ signOut, children, username, avatarImage }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navigation.Root, { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navigation.List, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Navigation.Item, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Navigation.Trigger, { children }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Navigation.Content, { className: "absolute right-2 w-[300px] rounded bg-zinc-50 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex w-full items-center gap-4 border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Avatar, { image: avatarImage, username }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("p", { className: "inline-block", children: username })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "w-full p-4", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Button, { onClick: signOut, className: "w-full", children: "Sair" }) })
    ] })
  ] }) }) });
}

// src/components/surfaces/footer/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
var import_tailwind_variants14 = require("tailwind-variants");
var import_jsx_runtime30 = require("react/jsx-runtime");
var imageVariation = (0, import_tailwind_variants14.tv)({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
var import_tailwind_variants15 = require("tailwind-variants");
var import_jsx_runtime31 = require("react/jsx-runtime");
var rootVariation = (0, import_tailwind_variants15.tv)({
  base: "fixed left-0 top-0 w-full bg-zinc-950"
});
function Root7(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "m-auto flex w-full max-w-4xl items-center justify-between p-4", children }) }));
}

// src/components/surfaces/header/index.tsx
var Header2 = {
  Root: Root7,
  Image
};

// src/components/typograph/text/index.tsx
var import_tailwind_variants16 = require("tailwind-variants");
var import_jsx_runtime32 = require("react/jsx-runtime");
var textVariant = (0, import_tailwind_variants16.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
}

// src/components/typograph/heading/index.tsx
var import_tailwind_variants17 = require("tailwind-variants");
var import_jsx_runtime33 = require("react/jsx-runtime");
var headingVariant = (0, import_tailwind_variants17.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(As, __spreadProps(__spreadValues({ className: headingVariant({ size, className }) }, rest), { children }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDialog,
  Avatar,
  Button,
  Card,
  Checkbox,
  Dialog,
  Footer,
  Header,
  Heading,
  Input,
  InputFile,
  Label,
  Menu,
  Select,
  Table,
  Text,
  TextArea
});
