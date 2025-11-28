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
var index_exports = {};
__export(index_exports, {
  AlertDialog: () => AlertDialog,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Button: () => Button,
  Calendar: () => Calendar,
  Card: () => Card,
  Checkbox: () => Checkbox,
  ComboBox: () => ComboBox,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  FileUploader: () => FileUploader,
  Footer: () => Footer2,
  Header: () => Header3,
  Heading: () => Heading,
  Input: () => Input,
  InputFile: () => InputFile,
  Label: () => Label,
  Menu: () => Menu,
  MonthPicker: () => MonthPicker,
  NavigationMenu: () => NavigationMenu,
  Pagination: () => Pagination,
  Popover: () => Popover9,
  Select: () => Select,
  Sidebar: () => Sidebar,
  Table: () => Table,
  TagInput: () => TagInput,
  Text: () => Text,
  TextArea: () => TextArea,
  Tooltip: () => Tooltip,
  TreeView: () => TreeView,
  YearPicker: () => YearPicker
});
module.exports = __toCommonJS(index_exports);

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
  icon: Icon4,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-start justify-between rounded-t bg-zinc-200 p-4", children: [
    children,
    Icon4 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: iconVariant({ variant: iconColor, className }), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon4, { size: 16 }) })
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
var rootVariant = (0, import_tailwind_variants5.tv)({
  base: "m-auto mt-6 w-full max-w-[1120px]"
});
var captionVariant = (0, import_tailwind_variants5.tv)({
  base: "rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4"
});
var tHeadVariant = (0, import_tailwind_variants5.tv)({
  base: "rounded-t"
});
var tBodyVariant = (0, import_tailwind_variants5.tv)({
  base: "rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4"
});
var rowVariant = (0, import_tailwind_variants5.tv)({
  base: "rounded-t bg-zinc-50"
});
var cellHeadVariant = (0, import_tailwind_variants5.tv)({
  base: "bg-zinc-200 p-4 text-left text-zinc-600",
  variants: {
    position: {
      first: "rounded-tl-lg",
      last: "rounded-tr-lg"
    }
  }
});
var cellVariant = (0, import_tailwind_variants5.tv)({
  base: "border-b border-b-zinc-200 px-4 py-2"
});
var Table = {
  Root: (_a) => {
    var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("table", __spreadProps(__spreadValues({ className: rootVariant({ className }) }, rest), { children }));
  },
  Caption: (_c) => {
    var _d = _c, { children, className } = _d, rest = __objRest(_d, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("caption", __spreadProps(__spreadValues({ className: captionVariant({ className }) }, rest), { children }));
  },
  THead: (_e) => {
    var _f = _e, { children, className } = _f, rest = __objRest(_f, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", __spreadProps(__spreadValues({ className: tHeadVariant({ className }) }, rest), { children }));
  },
  TBody: (_g) => {
    var _h = _g, { children, className } = _h, rest = __objRest(_h, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", __spreadProps(__spreadValues({ className: tBodyVariant({ className }) }, rest), { children }));
  },
  Tr: (_i) => {
    var _j = _i, { children, className } = _j, rest = __objRest(_j, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", __spreadProps(__spreadValues({ className: rowVariant({ className }) }, rest), { children }));
  },
  Th: (_k) => {
    var _l = _k, { children, position, onClick, className } = _l, rest = __objRest(_l, ["children", "position", "onClick", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("th", __spreadProps(__spreadValues({}, rest), { className: cellHeadVariant({ position, className }), children: [
      children,
      onClick && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { onClick, className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.ArrowDownUp, { size: 12 }) })
    ] }));
  },
  Td: (_m) => {
    var _n = _m, { children, className } = _n, rest = __objRest(_n, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", __spreadProps(__spreadValues({ className: cellVariant({ className }) }, rest), { children }));
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
  Content: (_i) => {
    var _j = _i, { children, as = "form", className } = _j, rest = __objRest(_j, ["children", "as", "className"]);
    const As = as;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(As, __spreadProps(__spreadValues({}, rest), { className: contentVariant({ className }), children }));
  },
  Container: (_k) => {
    var _l = _k, { children, className } = _l, rest = __objRest(_l, ["children", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Description, __spreadProps(__spreadValues({ className: "text-zinc-400" }, rest), { children }));
  },
  Close: (_q) => {
    var _r = _q, { children } = _r, rest = __objRest(_r, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogPrimitive.Close, __spreadProps(__spreadValues({}, rest), { children }));
  },
  Footer: (_s) => {
    var _t = _s, { children, className } = _t, rest = __objRest(_t, ["children", "className"]);
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
    var _b = _a, { mask, error, className } = _b, rest = __objRest(_b, ["mask", "error", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: variants({ className, hasError: !!error }), children: mask ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_mask.InputMask,
        __spreadProps(__spreadValues({
          ref
        }, rest), {
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

// src/components/ui/form/select/icon.tsx
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function Icon2(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SelectPrimitive.Icon, __spreadProps(__spreadValues({}, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react3.ChevronDown, {}) }));
}

// src/components/ui/form/select/item.tsx
var SelectPrimitive2 = __toESM(require("@radix-ui/react-select"));
var import_lucide_react4 = require("lucide-react");
var import_react2 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Item2 = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      SelectPrimitive2.Item,
      __spreadProps(__spreadValues({
        ref
      }, rest), {
        className: "flex cursor-pointer items-center justify-between border-b border-b-zinc-100 px-4 py-2 outline-none hover:bg-zinc-100",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectPrimitive2.ItemText, { children }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SelectPrimitive2.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react4.CheckIcon, { size: 14, className: "text-yellow-600" }) })
        ]
      })
    );
  }
);

// src/components/ui/form/select/root.tsx
var SelectPrimitive3 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(SelectPrimitive3.Root, __spreadProps(__spreadValues({}, rest), { defaultValue, children: [
    children,
    error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("small", { className: "mt-1 text-xs text-rose-600", children: error })
  ] }));
}

// src/components/ui/form/select/value.tsx
var SelectPrimitive4 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime22 = require("react/jsx-runtime");
function Value2(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SelectPrimitive4.Value, __spreadValues({}, rest));
}

// src/components/ui/form/select/group.tsx
var SelectPrimitive5 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime23 = require("react/jsx-runtime");
function Group2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SelectPrimitive5.Group, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/label.tsx
var SelectPrimitive6 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime24 = require("react/jsx-runtime");
function Label3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(SelectPrimitive6.Label, __spreadProps(__spreadValues({}, rest), { className: "mt-4 text-center text-zinc-500", children }));
}

// src/components/ui/form/select/portal.tsx
var SelectPrimitive7 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime25 = require("react/jsx-runtime");
function Portal5(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SelectPrimitive7.Portal, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/content.tsx
var SelectPrimitive8 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime26 = require("react/jsx-runtime");
function Content5(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(SelectPrimitive8.Content, __spreadProps(__spreadValues({}, rest), { className: "rounded bg-zinc-50", children }));
}

// src/components/ui/form/select/trigger.tsx
var SelectPrimitive9 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime27 = require("react/jsx-runtime");
function Trigger5(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    SelectPrimitive9.Trigger,
    __spreadProps(__spreadValues({}, rest), {
      className: "flex w-full items-start justify-between rounded border-2 border-zinc-200 bg-zinc-50 p-2 outline-yellow-700",
      children
    })
  );
}

// src/components/ui/form/select/viewport.tsx
var SelectPrimitive10 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime28 = require("react/jsx-runtime");
function Viewport2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(SelectPrimitive10.Viewport, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/item-text.tsx
var SelectPrimitive11 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime29 = require("react/jsx-runtime");
function ItemText3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SelectPrimitive11.ItemText, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/form/select/item-indicator.tsx
var SelectPrimitive12 = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime30 = require("react/jsx-runtime");
function ItemIndicator3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectPrimitive12.ItemIndicator, __spreadProps(__spreadValues({}, rest), { children }));
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
var import_tailwind_variants9 = require("tailwind-variants");
var import_react3 = __toESM(require("react"));
var import_jsx_runtime31 = require("react/jsx-runtime");
var buttonVariant = (0, import_tailwind_variants9.tv)({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2 items-center justify-center",
  variants: {
    variant: {
      default: "bg-yellow-600 hover:bg-yellow-700",
      secondary: "bg-emerald-200 text-emerald-700 hover:bg-emerald-400/75",
      link: "bg-zin-100 text-yellow-600 underline",
      destructive: "bg-rose-600 text-rose-200 hover:bg-rose-700",
      ghost: "bg-zinc-200 text-zinc-500 hover:bg-zinc-200/75"
    },
    disabled: {
      true: "bg-gray-100 text-gray-300 hover:bg-gray-100 cursor-not-allowed"
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
    variant: variant12,
    children,
    disabled,
    className,
    iconLeft,
    iconRight,
    iconSize = 16
  } = _b, rest = __objRest(_b, [
    "as",
    "asChild",
    "variant",
    "children",
    "disabled",
    "className",
    "iconLeft",
    "iconRight",
    "iconSize"
  ]);
  const As = as || "button";
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  if (asChild && import_react3.default.isValidElement(children)) {
    return import_react3.default.cloneElement(children, __spreadProps(__spreadValues({}, rest), {
      className: buttonVariant({ className, variant: variant12, disabled })
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    As,
    __spreadProps(__spreadValues({}, rest), {
      disabled,
      className: buttonVariant({ className, variant: variant12, disabled }),
      children: [
        IconLeft && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(IconLeft, { size: iconSize }),
        children,
        IconRight && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(IconRight, { size: iconSize })
      ]
    })
  );
}
Button.displayName = "Button";

// src/components/ui/form/checkbox/index.tsx
var import_react4 = require("react");
var import_lucide_react5 = require("lucide-react");
var import_tailwind_variants10 = require("tailwind-variants");
var import_jsx_runtime32 = require("react/jsx-runtime");
var variants2 = (0, import_tailwind_variants10.tv)({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100 flex items-center justify-center",
  variants: {
    checked: {
      true: "border-yellow-700 bg-yellow-700 text-zinc-50",
      indeterminated: "border-yellow-700 bg-yellow-500 text-zinc-50",
      false: ""
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
  value,
  disabled = false,
  onValueChange,
  defaultChecked = false
}) {
  const isControlled = value !== void 0;
  const [internal, setInternal] = (0, import_react4.useState)(
    defaultChecked
  );
  const current = isControlled ? value : internal;
  const toggleCheck = (0, import_react4.useCallback)(() => {
    if (disabled) return;
    const next = current === true ? false : true;
    if (!isControlled) {
      setInternal(next);
    }
    onValueChange == null ? void 0 : onValueChange(next);
  }, [current, disabled, isControlled, onValueChange]);
  (0, import_react4.useEffect)(() => {
    if (isControlled) return;
    setInternal(defaultChecked);
  }, [defaultChecked, isControlled]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "button",
    {
      type: "button",
      disabled,
      onClick: toggleCheck,
      className: variants2({ checked: current != null ? current : false, disabled }),
      children: current === true && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_react5.Check, { size: 16 })
    }
  );
}

// src/components/ui/form/textarea/index.tsx
var import_tailwind_variants11 = require("tailwind-variants");
var import_react5 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
var variants3 = (0, import_tailwind_variants11.tv)({
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: variants3({ className }), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";

// src/components/ui/form/combobox/container.tsx
var import_tailwind_variants12 = require("tailwind-variants");

// src/components/ui/form/combobox/root.tsx
var import_react6 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var RootContext = (0, import_react6.createContext)({});
var Root7 = ({
  children,
  placeholder,
  onValueChange
}) => {
  const [isOpen, setIsOpen] = (0, import_react6.useState)(false);
  const [value, setValue] = (0, import_react6.useState)(void 0);
  const [selectedValue, setSeectedValue] = (0, import_react6.useState)(() => ({
    label: placeholder
  }));
  const toggle = () => setIsOpen(!isOpen);
  const handleSelectValue = (data) => {
    setValue(data == null ? void 0 : data.value);
    setSeectedValue(data);
    onValueChange == null ? void 0 : onValueChange(data == null ? void 0 : data.value);
    setIsOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    RootContext.Provider,
    {
      value: { isOpen, value, selectedValue, toggle, handleSelectValue },
      children
    }
  );
};
var useComboBox = () => (0, import_react6.useContext)(RootContext);

// src/components/ui/form/combobox/container.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var variant2 = (0, import_tailwind_variants12.tv)({
  base: "absolute z-[999] bg-white w-full border border-gray-200 rounded max-h-60 overflow-auto shadow-lg",
  variants: {
    isOpen: {
      true: "block",
      false: "hidden"
    }
  }
});
function Container({ children, className }) {
  const { isOpen } = useComboBox();
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: variant2({ className, isOpen }), children });
}

// src/components/ui/form/combobox/content.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function Content6({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "p-2", children });
}

// src/components/ui/form/combobox/item.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function Item3(_a) {
  var _b = _a, { label, value } = _b, rest = __objRest(_b, ["label", "value"]);
  const { handleSelectValue } = useComboBox();
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    "button",
    __spreadProps(__spreadValues({}, rest), {
      type: "button",
      onClick: () => handleSelectValue({ label, value }),
      className: "w-full rounded-lg p-2 text-start transition-colors hover:bg-gray-100",
      children: label
    })
  );
}

// src/components/ui/form/combobox/portal.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
function Portal6({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "relative", children });
}

// src/components/ui/form/combobox/search.tsx
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime39 = require("react/jsx-runtime");
function Search(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex w-full items-center justify-between gap-2 border-b border-b-gray-200 p-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("input", __spreadProps(__spreadValues({}, rest), { type: "text", className: "w-full outline-none" })),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("button", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react6.Search, { size: 14 }) })
  ] });
}

// src/components/ui/form/combobox/trigger.tsx
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime40 = require("react/jsx-runtime");
function Trigger6(_a) {
  var rest = __objRest(_a, []);
  const { toggle, selectedValue } = useComboBox();
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
    "button",
    __spreadProps(__spreadValues({}, rest), {
      type: "button",
      onClick: toggle,
      className: "flex w-full items-center justify-between rounded border-2 border-gray-200 bg-zinc-50 px-4 py-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { children: selectedValue == null ? void 0 : selectedValue.label }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react7.ChevronsUpDownIcon, { size: 16 })
      ]
    })
  );
}

// src/components/ui/form/combobox/index.tsx
var ComboBox = {
  Root: Root7,
  Portal: Portal6,
  Trigger: Trigger6,
  Container,
  Content: Content6,
  Search,
  Item: Item3
};

// src/components/ui/form/tag-input/index.tsx
var import_lucide_react8 = require("lucide-react");
var import_tailwind_variants14 = require("tailwind-variants");
var import_react7 = require("react");

// src/components/typograph/text/index.tsx
var import_tailwind_variants13 = require("tailwind-variants");
var import_jsx_runtime41 = require("react/jsx-runtime");
var textVariant = (0, import_tailwind_variants13.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
}

// src/components/ui/form/tag-input/index.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
var variant3 = (0, import_tailwind_variants14.tv)({
  base: "rounded border border-gray-200 p-4 w-full"
});
function TagInput({
  label,
  className,
  placeholder,
  defaultValue = [],
  onChange
}) {
  const inputRef = (0, import_react7.useRef)(null);
  const [tags, setTags] = (0, import_react7.useState)(defaultValue);
  const addTag = () => {
    if (!inputRef.current) {
      return;
    }
    const newTag = inputRef.current.value.toLowerCase().trim();
    if (!newTag || tags.includes(newTag)) return;
    const updated = [...tags, newTag];
    inputRef.current.value = "";
    setTags(updated);
    onChange == null ? void 0 : onChange(updated);
  };
  const removeTag = (target) => {
    const updated = tags.filter((item) => item !== target);
    onChange == null ? void 0 : onChange(updated);
    setTags(updated);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: variant3({ className }), children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "gap flex gap-2 py-4", children: tags.length ? tags.map((item) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
      "div",
      {
        className: "flex w-fit items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Text, { size: "xs", children: item }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("button", { type: "button", onClick: () => removeTag(item), children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_lucide_react8.X, { size: 12 }) })
        ]
      },
      item
    )) : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Text, { size: "xs", className: "text-gray-400", children: placeholder }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "flex w-full gap-2 rounded border border-gray-200 focus-within:border-yellow-700", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "input",
        {
          className: "w-full rounded p-2 outline-none",
          type: "text",
          ref: inputRef
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        "button",
        {
          type: "button",
          onClick: addTag,
          className: "rounded-r bg-gray-200 px-4",
          children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_lucide_react8.Plus, { size: 14 })
        }
      )
    ] })
  ] });
}

// src/components/ui/form/input-file/index.tsx
var import_lucide_react9 = require("lucide-react");
var import_react8 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var InputFile = (0, import_react8.forwardRef)(
  (_a, ref) => {
    var _b = _a, { accept = ".pdf" } = _b, rest = __objRest(_b, ["accept"]);
    const [files, setFiles] = (0, import_react8.useState)(null);
    const onInputChange = (e) => setFiles(e.currentTarget.files);
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "flex w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full cursor-pointer items-center justify-center text-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("small", { children: !files ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react9.UploadIcon, { className: "text-zinc-400" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("small", { className: "text-zinc-500", children: [
              "(Somente arquivos ",
              accept,
              ")"
            ] })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("p", { children: "Arquivos selecionados:" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "mt-4", children: Array.from(files).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("small", { children: [
              item.name,
              " ",
              index > 0 && ", "
            ] }, item.name)) }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("small", { className: "text-zinc-500" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
var import_react9 = require("react");
var import_date_fns = require("date-fns");
var import_lucide_react10 = require("lucide-react");
var Popover = __toESM(require("@radix-ui/react-popover"));

// src/components/surfaces/calendar/index.tsx
var import_locale = require("react-day-picker/locale");
var import_react_day_picker = require("react-day-picker");
var import_jsx_runtime44 = require("react/jsx-runtime");
function Calendar(_a) {
  var rest = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_react_day_picker.DayPicker,
    __spreadProps(__spreadValues({}, rest), {
      locale: import_locale.ptBR,
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
var import_jsx_runtime45 = require("react/jsx-runtime");
var DatePicker = ({
  defaultValue,
  onValueChange,
  mode
}) => {
  const [selected, setSelected] = (0, import_react9.useState)(() => {
    if (mode === "single" && defaultValue) {
      return defaultValue;
    }
    if (mode === "single" && !defaultValue) {
      return /* @__PURE__ */ new Date();
    }
    if (defaultValue && mode !== "single") {
      return {
        from: defaultValue.from,
        to: defaultValue.to
      };
    }
    return {
      from: defaultValue.from,
      to: defaultValue.to ? defaultValue.from : (0, import_date_fns.add)(/* @__PURE__ */ new Date(), { days: 15 })
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(Popover.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Popover.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      Button,
      {
        variant: "ghost",
        className: "w-full border border-zinc-300",
        type: "button",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_lucide_react10.Calendar1, { size: 14 }),
          mode === "single" ? (0, import_date_fns.format)(selected, "dd/LL/yyyy") : (0, import_date_fns.format)(selected.from || /* @__PURE__ */ new Date(), "dd/LL/yyyy") + " - " + (0, import_date_fns.format)(selected.to || /* @__PURE__ */ new Date(), "dd/LL/yyyy")
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Popover.Content, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
};

// src/components/ui/form/year-picker/index.tsx
var import_react10 = require("react");
var import_tailwind_variants17 = require("tailwind-variants");
var import_lucide_react11 = require("lucide-react");

// src/components/ui/popover/root.tsx
var Popover2 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime46 = require("react/jsx-runtime");
function Root10(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Popover2.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/arrow.tsx
var Popover3 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime47 = require("react/jsx-runtime");
function Arrow2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Popover3.Arrow, __spreadProps(__spreadValues({}, rest), { className: "fill-zinc-50", children }));
}

// src/components/ui/popover/close.tsx
var Popover4 = __toESM(require("@radix-ui/react-popover"));
var import_tailwind_variants15 = require("tailwind-variants");
var import_jsx_runtime48 = require("react/jsx-runtime");
var popoverCloseVariant = (0, import_tailwind_variants15.tv)({
  base: "absolute right-2 top-2 inline-flex cursor-pointer items-center justify-center text-zinc-400 outline-none border border-zinc-400 rounded hover:bg-zinc-100 transition-colors"
});
function Close3(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    Popover4.Close,
    __spreadProps(__spreadValues({}, rest), {
      className: popoverCloseVariant({ className }),
      "aria-label": "Close",
      children
    })
  );
}

// src/components/ui/popover/anchor.tsx
var Popover5 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime49 = require("react/jsx-runtime");
function Anchor2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Popover5.Anchor, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/portal.tsx
var Popover6 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime50 = require("react/jsx-runtime");
function Portal9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Popover6.Portal, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/content.tsx
var Popover7 = __toESM(require("@radix-ui/react-popover"));
var import_tailwind_variants16 = require("tailwind-variants");
var import_jsx_runtime51 = require("react/jsx-runtime");
var popoverContentVariation = (0, import_tailwind_variants16.tv)({
  base: "bg-zinc-100 rounded shadow-lg"
});
function Content9(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    Popover7.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: popoverContentVariation({ className }),
      sideOffset: 5,
      children
    })
  );
}

// src/components/ui/popover/trigger.tsx
var Popover8 = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime52 = require("react/jsx-runtime");
function Trigger9(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(Popover8.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/popover/index.tsx
var Popover9 = {
  Anchor: Anchor2,
  Arrow: Arrow2,
  Close: Close3,
  Content: Content9,
  Portal: Portal9,
  Root: Root10,
  Trigger: Trigger9
};

// src/components/ui/form/year-picker/index.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var variant4 = (0, import_tailwind_variants17.tv)({
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
  const [year, setYear] = (0, import_react10.useState)(defaultValue);
  const [years] = (0, import_react10.useState)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(Popover9.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Popover9.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
      Button,
      {
        variant: "ghost",
        className: "w-full border border-zinc-300",
        type: "button",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_lucide_react11.Calendar1, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { children: year })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Popover9.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(Popover9.Content, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "flex items-center justify-between border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { onClick: handlePreviousYearChange, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_lucide_react11.ChevronLeft, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", { onClick: handleNextYearChange, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_lucide_react11.ChevronRight, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "grid w-fit grid-cols-3 gap-2 rounded bg-zinc-50 p-2", children: years.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
        "button",
        {
          onClick: () => handleYearChange(year + index),
          className: variant4({ selected: year === year + index }),
          children: year + index
        }
      )) })
    ] }) }) })
  ] });
};
YearPicker.displayName = "YearPicker";

// src/components/ui/form/month-picker/index.tsx
var import_tailwind_variants18 = require("tailwind-variants");
var import_react11 = require("react");
var import_lucide_react12 = require("lucide-react");
var import_date_fns2 = require("date-fns");
var import_jsx_runtime54 = require("react/jsx-runtime");
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
var variant5 = (0, import_tailwind_variants18.tv)({
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
  defaultValue = (0, import_date_fns2.format)(/* @__PURE__ */ new Date(), "yyyy-MM")
}) => {
  const [year, setYear] = (0, import_react11.useState)(() => {
    if (defaultValue && mode === "month-year") {
      const [defaultYear] = defaultValue.split("-");
      return Number(defaultYear);
    }
    return (/* @__PURE__ */ new Date()).getFullYear();
  });
  const [month, setMonth] = (0, import_react11.useState)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(Popover9.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Popover9.Trigger, { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(
      Button,
      {
        variant: "ghost",
        className: "w-full border border-zinc-300",
        type: "button",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_lucide_react12.Calendar1, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("p", { children: [
            month,
            " ",
            mode === "month-year" && " - " + year
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Popover9.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Popover9.Content, { align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { children: [
      mode === "month-year" && /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { className: "flex items-center justify-between border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("button", { onClick: handlePreviousYearChange, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_lucide_react12.ChevronLeft, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("p", { children: year }),
        /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("button", { onClick: handleNextYearChange, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_lucide_react12.ChevronRight, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: "grid w-fit grid-cols-3 gap-2 rounded bg-zinc-50 p-2", children: months.map((item) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
        "button",
        {
          onClick: () => handleMonthChange(item.value),
          className: variant5({
            selected: item.label === month
          }),
          children: item.label
        }
      )) })
    ] }) }) })
  ] });
};
MonthPicker.displayName = "MonthPicker";

// src/components/ui/form/file-uploader/index.tsx
var import_react12 = require("react");
var import_lucide_react13 = require("lucide-react");
var import_jsx_runtime55 = require("react/jsx-runtime");
function FileUploader({
  accept,
  permissionType = "",
  onFileChange
}) {
  const [files, setFiles] = (0, import_react12.useState)([]);
  (0, import_react12.useEffect)(() => {
    onFileChange == null ? void 0 : onFileChange(files);
  }, [files]);
  const handleSelect = (0, import_react12.useCallback)(
    (event) => {
      const selected = event.target.files;
      if (!selected) return;
      const newFiles = [];
      Array.from(selected).forEach((file) => {
        newFiles.push({
          id: crypto.randomUUID(),
          file,
          previewUrl: URL.createObjectURL(file),
          permission: permissionType
        });
      });
      setFiles((prev) => [...prev, ...newFiles]);
    },
    []
  );
  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };
  const handleDrop = (0, import_react12.useCallback)((event) => {
    event.preventDefault();
    const dropped = event.dataTransfer.files;
    if (!dropped) return;
    const newFiles = [];
    Array.from(dropped).forEach((file) => {
      newFiles.push({
        id: crypto.randomUUID(),
        file,
        previewUrl: URL.createObjectURL(file),
        permission: permissionType
      });
    });
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
      "div",
      {
        className: "cursor-pointer rounded border border-dashed border-gray-400 p-6 text-center",
        onDragOver: (e) => e.preventDefault(),
        onDrop: handleDrop,
        children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("label", { className: "cursor-pointer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
            "input",
            {
              type: "file",
              className: "hidden",
              accept,
              multiple: true,
              onChange: handleSelect
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_lucide_react13.CloudUpload, { className: "h-8 w-8" }),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { children: "Arraste arquivos ou clique para enviar" })
          ] })
        ] })
      }
    ),
    files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("ul", { className: "space-y-2", children: files.map((item) => /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
      "li",
      {
        className: "flex items-center justify-between rounded bg-gray-50 p-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_lucide_react13.File, { className: "h-5 w-5" }),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text-sm font-medium", children: item.file.name }),
              /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
                "select",
                {
                  className: "rounded border p-1 text-xs",
                  value: item.permission,
                  onChange: (e) => {
                    const value = e.target.value;
                    setFiles(
                      (prev) => prev.map(
                        (f) => f.id === item.id ? __spreadProps(__spreadValues({}, f), { permission: value }) : f
                      )
                    );
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("option", { value: "", children: "P\xFAblico" }),
                    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("option", { value: "8f2c1f7f-fb9e-4410-838d-27e9fec92fef", children: "Administrador" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
            "button",
            {
              type: "button",
              onClick: () => removeFile(item.id),
              className: "text-red-500 hover:text-red-700",
              children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_lucide_react13.Trash, { className: "h-4 w-4" })
            }
          )
        ]
      },
      item.id
    )) })
  ] });
}

// src/components/ui/tooltip/index.tsx
var Primitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime56 = require("react/jsx-runtime");
var Tooltip = ({ children, value }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Primitive.Provider, { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(Primitive.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Primitive.Trigger, { className: "w-full", children }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Primitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(Primitive.Content, { className: "w-full select-none rounded bg-white px-[15px] py-2.5 text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]", children: [
      value,
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Primitive.Arrow, { className: "fill-white" })
    ] }) })
  ] }) });
};

// src/components/surfaces/menu/trigger.tsx
var import_jsx_runtime57 = require("react/jsx-runtime");
function Trigger11(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Popover9.Trigger, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/menu/content.tsx
var import_react13 = require("react");
var import_jsx_runtime58 = require("react/jsx-runtime");
var Content11 = (0, import_react13.forwardRef)(
  (_a, ref) => {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", __spreadProps(__spreadValues({}, rest), { ref, className: "w-full bg-zinc-50", children }));
  }
);

// src/components/surfaces/menu/header.tsx
var import_tailwind_variants19 = require("tailwind-variants");
var import_jsx_runtime59 = require("react/jsx-runtime");
var menuHeaderVariant = (0, import_tailwind_variants19.tv)({
  base: "p-4 flex gap-4 items-center border-b border-b-zinc-200 rounded-t bg-zinc-50"
});
function Header2(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", __spreadProps(__spreadValues({ className: menuHeaderVariant({ className }) }, rest), { children }));
}

// src/components/surfaces/menu/footer.tsx
var import_tailwind_variants20 = require("tailwind-variants");
var import_jsx_runtime60 = require("react/jsx-runtime");
var menuFooterVariant = (0, import_tailwind_variants20.tv)({
  base: "bg-zinc-50 border-t border-t-zinc-200 rounded-b"
});
function Footer(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", __spreadProps(__spreadValues({ className: menuFooterVariant({ className }) }, rest), { children }));
}

// src/components/surfaces/menu/root.tsx
var import_jsx_runtime61 = require("react/jsx-runtime");
function Root12(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Popover9.Root, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/menu/portal.tsx
var import_jsx_runtime62 = require("react/jsx-runtime");
function Portal11(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Popover9.Portal, __spreadProps(__spreadValues({}, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(Popover9.Content, __spreadProps(__spreadValues({}, rest), { className: "w-[276px]", children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Popover9.Arrow, {})
  ] })) }));
}

// src/components/surfaces/menu/item.tsx
var import_react14 = require("react");
var import_jsx_runtime63 = require("react/jsx-runtime");
var Item4 = (0, import_react14.forwardRef)(
  (_a, ref) => {
    var _b = _a, { children, icon: Icon4 } = _b, rest = __objRest(_b, ["children", "icon"]);
    return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
      "a",
      __spreadProps(__spreadValues({}, rest), {
        ref,
        className: "flex w-full items-center gap-2 p-4 transition-colors hover:bg-zinc-100/75 hover:text-yellow-700",
        children: [
          Icon4 && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(Icon4, { size: 14 }),
          children
        ]
      })
    );
  }
);

// src/components/surfaces/menu/index.tsx
var Menu = {
  Root: Root12,
  Trigger: Trigger11,
  Portal: Portal11,
  Header: Header2,
  Content: Content11,
  Item: Item4,
  Footer
};

// src/components/surfaces/footer/index.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
function Footer2() {
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
var import_tailwind_variants21 = require("tailwind-variants");
var import_jsx_runtime65 = require("react/jsx-runtime");
var imageVariation = (0, import_tailwind_variants21.tv)({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
var import_tailwind_variants22 = require("tailwind-variants");
var import_jsx_runtime66 = require("react/jsx-runtime");
var rootVariation = (0, import_tailwind_variants22.tv)({
  base: "fixed left-0 top-0 w-full bg-zinc-950"
});
function Root13(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: "m-auto flex w-full max-w-[1440px] items-center justify-between p-4", children }) }));
}

// src/components/surfaces/header/index.tsx
var Header3 = {
  Root: Root13,
  Image
};

// src/components/surfaces/sidebar/icon.tsx
var import_lucide_react14 = require("lucide-react");

// src/components/surfaces/sidebar/context/sidebar.tsx
var import_react16 = require("react");

// src/components/surfaces/sidebar/context/hooks/useSidebarContext.tsx
var import_react15 = require("react");
function useSidebarContext() {
  const [state, setState] = (0, import_react15.useState)("open");
  const toggle = () => setState(state === "open" ? "close" : "open");
  return {
    state,
    toggle
  };
}

// src/components/surfaces/sidebar/context/sidebar.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
var SidebarContext = (0, import_react16.createContext)({});
function SidebarProvider({ children }) {
  const value = useSidebarContext();
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(SidebarContext.Provider, { value, children });
}
var useSidebar = () => (0, import_react16.useContext)(SidebarContext);

// src/components/surfaces/sidebar/icon.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
function Icon3(_a) {
  var rest = __objRest(_a, []);
  const { toggle, state } = useSidebar();
  return state === "open" ? /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react14.PanelLeftClose, __spreadProps(__spreadValues({}, rest), { onClick: toggle })) : /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_lucide_react14.PanelLeftOpen, __spreadProps(__spreadValues({}, rest), { onClick: toggle }));
}

// src/components/surfaces/sidebar/item.tsx
var import_tailwind_variants23 = require("tailwind-variants");
var import_react17 = require("react");
var import_jsx_runtime69 = require("react/jsx-runtime");
var variant6 = (0, import_tailwind_variants23.tv)({
  base: "flex gap-2 w-full bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 data-[state=close]:max-w-24 data-[state=close]:justify-center"
});
function Item5(_a) {
  var _b = _a, {
    children,
    icon,
    asChild = false,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "icon",
    "asChild",
    "className"
  ]);
  const Icon4 = icon;
  const { state } = useSidebar();
  if (asChild) {
    if (asChild && (0, import_react17.isValidElement)(children)) {
      return (0, import_react17.cloneElement)(children, {
        className: variant6({ className })
      });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsxs)("button", __spreadProps(__spreadValues({}, rest), { "data-state": state, className: variant6({ className }), children: [
    Icon4 && /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(Icon4, {}),
    /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
      Text,
      {
        as: "strong",
        "data-state": state,
        className: "data-[state=close]:hidden",
        children
      }
    )
  ] }));
}

// src/components/surfaces/sidebar/root.tsx
var import_jsx_runtime70 = require("react/jsx-runtime");
function Root14(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(SidebarProvider, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/typograph/heading/index.tsx
var import_tailwind_variants24 = require("tailwind-variants");
var import_jsx_runtime71 = require("react/jsx-runtime");
var headingVariant = (0, import_tailwind_variants24.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(As, __spreadProps(__spreadValues({ className: headingVariant({ size, className }) }, rest), { children }));
}

// src/components/surfaces/sidebar/title.tsx
var import_jsx_runtime72 = require("react/jsx-runtime");
function Title4(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
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
var import_jsx_runtime73 = require("react/jsx-runtime");
function Footer3(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "w-full rounded-b data-[state=close]:max-w-24",
      children
    })
  );
}

// src/components/surfaces/sidebar/header.tsx
var import_jsx_runtime74 = require("react/jsx-runtime");
function Header4(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "flex h-16 w-full items-center justify-between rounded-t border-b border-b-zinc-200 p-4 data-[state=close]:max-w-24 data-[state=close]:justify-center",
      children
    })
  );
}

// src/components/surfaces/sidebar/content.tsx
var import_jsx_runtime75 = require("react/jsx-runtime");
function Content12(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("div", __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/surfaces/sidebar/container.tsx
var import_jsx_runtime76 = require("react/jsx-runtime");
function Container2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  const { state } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    "div",
    __spreadProps(__spreadValues({}, rest), {
      "data-state": state,
      className: "parent group grid h-full w-full max-w-60 grid-rows-[auto,1fr,auto] gap-4 rounded border border-zinc-200 bg-zinc-50 data-[state=close]:max-w-24",
      children
    })
  );
}

// src/components/surfaces/sidebar/footer-content.tsx
var import_tailwind_variants25 = require("tailwind-variants");
var import_jsx_runtime77 = require("react/jsx-runtime");
var variant7 = (0, import_tailwind_variants25.tv)({
  base: "flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-zinc-50 p-4"
});
function FooterContent(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", __spreadProps(__spreadValues({ className: variant7({ className }) }, rest), { children }));
}

// src/components/surfaces/sidebar/user-container.tsx
var import_tailwind_variants26 = require("tailwind-variants");
var import_jsx_runtime78 = require("react/jsx-runtime");
var variant8 = (0, import_tailwind_variants26.tv)({
  base: "flex flex-col data-[state=close]:hidden"
});
function UserContainer(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  const { state } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { "data-state": state, className: variant8({ className }), children });
}

// src/components/surfaces/sidebar/index.tsx
var Sidebar = {
  Root: Root14,
  Content: Content12,
  Container: Container2,
  Header: Header4,
  Footer: Footer3,
  Item: Item5,
  Title: Title4,
  Icon: Icon3,
  FooterContent,
  UserContainer
};

// src/components/ui/navigation-menu/item.tsx
var Navigation = __toESM(require("@radix-ui/react-navigation-menu"));
var import_jsx_runtime79 = require("react/jsx-runtime");
var Item7 = (_a) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(Navigation.Item, __spreadProps(__spreadValues({}, rest), { children }));
};

// src/components/ui/navigation-menu/list.tsx
var Navigation2 = __toESM(require("@radix-ui/react-navigation-menu"));
var import_jsx_runtime80 = require("react/jsx-runtime");
function List2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Navigation2.List, { id: "navigation", children });
}

// src/components/ui/navigation-menu/root.tsx
var Navigation3 = __toESM(require("@radix-ui/react-navigation-menu"));
var import_jsx_runtime81 = require("react/jsx-runtime");
function Root16(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(Navigation3.Root, { id: "navigation", children });
}

// src/components/ui/navigation-menu/link.tsx
var Navigation4 = __toESM(require("@radix-ui/react-navigation-menu"));
var import_jsx_runtime82 = require("react/jsx-runtime");
function Link2(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(Navigation4.Link, __spreadProps(__spreadValues({}, rest), { children }));
}

// src/components/ui/navigation-menu/trigger.tsx
var Navigation5 = __toESM(require("@radix-ui/react-navigation-menu"));
var import_tailwind_variants27 = require("tailwind-variants");
var import_jsx_runtime83 = require("react/jsx-runtime");
var navigationMenuContentVariant = (0, import_tailwind_variants27.tv)({
  base: "bg-zinc-200 flex gap-4 items-center p-2 rounded"
});
function Trigger13(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    Navigation5.Trigger,
    __spreadProps(__spreadValues({}, rest), {
      className: navigationMenuContentVariant({ className }),
      children
    })
  );
}

// src/components/ui/navigation-menu/content.tsx
var Navigation6 = __toESM(require("@radix-ui/react-navigation-menu"));
var import_tailwind_variants28 = require("tailwind-variants");
var import_jsx_runtime84 = require("react/jsx-runtime");
var navigationMenuContentVariant2 = (0, import_tailwind_variants28.tv)({
  base: "bg-zinc-50 mt-4 rounded h-fit"
});
function Content14(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
    Navigation6.Content,
    __spreadProps(__spreadValues({}, rest), {
      className: navigationMenuContentVariant2({ className }),
      children
    })
  );
}

// src/components/ui/navigation-menu/index.tsx
var NavigationMenu = {
  Root: Root16,
  Item: Item7,
  List: List2,
  Link: Link2,
  Content: Content14,
  Trigger: Trigger13
};

// src/components/ui/pagination/index.tsx
var import_lucide_react15 = require("lucide-react");
var import_tailwind_variants29 = require("tailwind-variants");

// src/components/ui/pagination/hooks/usePagination.tsx
var import_react18 = require("react");
function usePagination({
  currentPage = 1,
  perPage: currentPerPage = 10,
  totalCount = 0,
  onPageChange,
  onPerPageChange
}) {
  const [page, setPage] = (0, import_react18.useState)(currentPage);
  const [perPage, setPerPage] = (0, import_react18.useState)(currentPerPage);
  const nextPage = () => {
    if (page >= Math.ceil(totalCount / currentPerPage)) {
      return;
    }
    setPage(page + 1);
    onPageChange == null ? void 0 : onPageChange(page + 1);
  };
  const previousPage = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
    onPageChange == null ? void 0 : onPageChange(page - 1);
  };
  const firstPage = () => {
    setPage(1);
    onPageChange == null ? void 0 : onPageChange(1);
  };
  const lastPage = () => {
    setPage(Math.ceil(totalCount / currentPerPage));
    onPageChange == null ? void 0 : onPageChange(Math.ceil(totalCount / currentPerPage));
  };
  const handlePerPage = (value) => {
    setPerPage(Number(value));
    setPage(1);
    onPerPageChange == null ? void 0 : onPerPageChange(Number(value));
  };
  return {
    page,
    perPage,
    nextPage,
    lastPage,
    firstPage,
    previousPage,
    handlePerPage
  };
}

// src/components/ui/pagination/index.tsx
var import_jsx_runtime85 = require("react/jsx-runtime");
var pageItemVariant = (0, import_tailwind_variants29.tv)({
  base: "rounded bg-yellow-700 py-2 px-4 text-xs text-zinc-50",
  variants: {
    disabled: {
      true: "bg-zinc-200 text-zinc-500 cursor-not-allowed"
    }
  }
});
function Pagination({
  currentPage = 1,
  totalCount,
  perPage: defaultPerpage = 10,
  onPageChange,
  onPerPageChange
}) {
  const { page, perPage, firstPage, lastPage, nextPage, previousPage, handlePerPage } = usePagination({
    currentPage,
    totalCount,
    onPageChange,
    onPerPageChange,
    perPage: defaultPerpage
  });
  const totalPages = totalCount / perPage;
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "flex w-full items-center justify-between py-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("p", { className: "whitespace-nowrap text-sm text-zinc-950", children: [
      page,
      " de ",
      Math.ceil(totalCount / perPage),
      " p\xE1ginas"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(
        Select.Root,
        {
          onValueChange: handlePerPage,
          defaultValue: perPage.toString(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(Select.Trigger, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Value, {}),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Icon, {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Content, { children: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(Select.Viewport, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Item, { value: "10", children: "10" }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Item, { value: "30", children: "30" }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Item, { value: "50", children: "50" }),
              /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Select.Item, { value: "100", children: "100" })
            ] }) }) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
        "button",
        {
          onClick: firstPage,
          disabled: page === 1,
          className: pageItemVariant({ disabled: page === 1 }),
          children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react15.ChevronsLeft, { size: 14 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
        "button",
        {
          onClick: previousPage,
          disabled: page === 1,
          className: pageItemVariant({ disabled: page === 1 }),
          children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react15.ChevronLeft, { size: 14 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: "flex items-center rounded border border-yellow-600 bg-yellow-600/25 px-4 py-2 text-xs text-yellow-600", children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("p", { children: page }) }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
        "button",
        {
          onClick: nextPage,
          disabled: page >= totalPages,
          className: pageItemVariant({
            disabled: page >= totalPages
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react15.ChevronRight, { size: 14 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
        "button",
        {
          onClick: lastPage,
          disabled: page >= totalPages,
          className: pageItemVariant({
            disabled: page >= totalPages
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(import_lucide_react15.ChevronsRight, { size: 14 })
        }
      )
    ] })
  ] });
}

// src/components/ui/badge/index.tsx
var import_jsx_runtime86 = require("react/jsx-runtime");
function Badge({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "flex w-fit items-center justify-center rounded-2xl border border-gray-300 bg-gray-200 px-4 py-1", children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("small", { className: "text-xs text-gray-600", children }) });
}

// src/components/ui/treeview/item.tsx
var import_lucide_react16 = require("lucide-react");
var import_tailwind_variants30 = require("tailwind-variants");
var import_jsx_runtime87 = require("react/jsx-runtime");
var variant9 = (0, import_tailwind_variants30.tv)({
  base: "h-full cursor-grab border-l border-l-gray-200 p-2"
});
function TreeViewItem(_a) {
  var _b = _a, {
    children,
    className,
    icon: Icon4,
    onNavigate,
    iconSize = 20
  } = _b, rest = __objRest(_b, [
    "children",
    "className",
    "icon",
    "onNavigate",
    "iconSize"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", __spreadProps(__spreadValues({ className: variant9({ className }) }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)(
    "button",
    {
      onClick: () => onNavigate == null ? void 0 : onNavigate(),
      className: "flex items-center gap-2",
      children: [
        Icon4 ? /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(Icon4, { className: "text-gray-400", size: iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(import_lucide_react16.File, { className: "text-gray-400", size: iconSize }),
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("small", { className: "underline", children })
      ]
    }
  ) }));
}

// src/components/ui/treeview/root.tsx
var import_react19 = require("react");
var import_jsx_runtime88 = require("react/jsx-runtime");
var TreeViewContext = (0, import_react19.createContext)({});
function TreeViewRoot({ children }) {
  const [state, setState] = (0, import_react19.useState)("closed");
  const toggle = () => state === "closed" ? setState("open") : setState("closed");
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(TreeViewContext.Provider, { value: { state, toggle }, children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "py-1", children }) });
}
var useTreeView = () => (0, import_react19.useContext)(TreeViewContext);

// src/components/ui/treeview/portal.tsx
var import_tailwind_variants31 = require("tailwind-variants");
var import_jsx_runtime89 = require("react/jsx-runtime");
var variant10 = (0, import_tailwind_variants31.tv)({
  base: "p-2 data-[state=closed]:hidden"
});
function TreeViewPortal(_a) {
  var _b = _a, {
    children,
    className
  } = _b, rest = __objRest(_b, [
    "children",
    "className"
  ]);
  const { state } = useTreeView();
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("div", __spreadProps(__spreadValues({ "data-state": state, className: variant10({ className }) }, rest), { children }));
}

// src/components/ui/treeview/trigger.tsx
var import_lucide_react17 = require("lucide-react");
var import_tailwind_variants32 = require("tailwind-variants");
var import_jsx_runtime90 = require("react/jsx-runtime");
var variant11 = (0, import_tailwind_variants32.tv)({
  base: "flex w-full cursor-pointer justify-between"
});
function TreeViewTrigger(_a) {
  var _b = _a, {
    children,
    className,
    icon: Icon4,
    iconSize = 24
  } = _b, rest = __objRest(_b, [
    "children",
    "className",
    "icon",
    "iconSize"
  ]);
  const { toggle, state } = useTreeView();
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("button", __spreadProps(__spreadValues({}, rest), { onClick: toggle, className: variant11({ className }), children: [
    /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)("div", { className: "flex items-end gap-2", children: [
      Icon4 ? /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(Icon4, { className: "text-gray-400", size: iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(import_lucide_react17.Folder, { className: "text-gray-400", size: iconSize }),
      children
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
      import_lucide_react17.ChevronDown,
      {
        size: 18,
        className: "text-gray-500 data-[state=open]:rotate-180",
        "data-state": state
      }
    )
  ] }));
}

// src/components/ui/treeview/index.tsx
var TreeView = {
  Root: TreeViewRoot,
  Item: TreeViewItem,
  Portal: TreeViewPortal,
  Trigger: TreeViewTrigger
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDialog,
  Avatar,
  Badge,
  Button,
  Calendar,
  Card,
  Checkbox,
  ComboBox,
  DatePicker,
  Dialog,
  FileUploader,
  Footer,
  Header,
  Heading,
  Input,
  InputFile,
  Label,
  Menu,
  MonthPicker,
  NavigationMenu,
  Pagination,
  Popover,
  Select,
  Sidebar,
  Table,
  TagInput,
  Text,
  TextArea,
  Tooltip,
  TreeView,
  YearPicker
});
