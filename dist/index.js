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
  Avatar: () => Avatar,
  Button: () => Button,
  Checkbox: () => Checkbox,
  Footer: () => Footer,
  Header: () => Header,
  Heading: () => Heading,
  Input: () => Input,
  InputFile: () => InputFile,
  Label: () => Label,
  Menu: () => Menu,
  Select: () => Select,
  Text: () => Text,
  headingVariant: () => headingVariant,
  textVariant: () => textVariant
});
module.exports = __toCommonJS(src_exports);

// src/components/surfaces/footer/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
var import_tailwind_variants = require("tailwind-variants");
var import_jsx_runtime2 = require("react/jsx-runtime");
var imageVariation = (0, import_tailwind_variants.tv)({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
var import_tailwind_variants2 = require("tailwind-variants");
var import_jsx_runtime3 = require("react/jsx-runtime");
var rootVariation = (0, import_tailwind_variants2.tv)({
  base: "fixed left-0 top-0 flex max-h-20 w-full items-center justify-between bg-zinc-950 p-4"
});
function Root(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children }));
}

// src/components/surfaces/header/index.tsx
var Header = {
  Root,
  Image
};

// src/components/surfaces/menu/index.tsx
var Navigation = __toESM(require("@radix-ui/react-navigation-menu"));

// src/components/ui/avatar/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Avatar({ image, username }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "h-14 w-14 rounded-full border-[3px] border-yellow-700 p-1", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "img",
    {
      src: image,
      alt: username,
      className: "h-full w-full rounded-full object-cover"
    }
  ) });
}

// src/components/ui/form/button/index.tsx
var import_tailwind_variants3 = require("tailwind-variants");
var import_jsx_runtime5 = require("react/jsx-runtime");
var buttonVariant = (0, import_tailwind_variants3.tv)({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors",
  variants: {
    variant: {
      default: "bg-yellow-600 hover:bg-yellow-600/75",
      secondary: "bg-zinc-800 hover:bg-zinc-800/75",
      link: "bg-zin-100 text-yellow-600 underline"
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
    variant,
    children,
    disabled,
    className
  } = _b, rest = __objRest(_b, [
    "as",
    "variant",
    "children",
    "disabled",
    "className"
  ]);
  const As = as || "button";
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant, disabled }), children }));
}

// src/components/surfaces/menu/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Menu({ signOut, children, username, avatarImage }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Navigation.Root, { id: "navigation", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Navigation.List, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Navigation.Item, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Navigation.Trigger, { children }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Navigation.Content, { className: "absolute right-2 w-[300px] rounded bg-zinc-50 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex w-full items-center gap-4 border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Avatar, { image: avatarImage, username }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "inline-block", children: username })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-full p-4", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { onClick: signOut, className: "w-full", children: "Sair" }) })
    ] })
  ] }) }) });
}

// src/components/typograph/heading/index.tsx
var import_tailwind_variants4 = require("tailwind-variants");
var import_jsx_runtime7 = require("react/jsx-runtime");
var headingVariant = (0, import_tailwind_variants4.tv)({
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
  var _b = _a, { as = "h2", children, size } = _b, rest = __objRest(_b, ["as", "children", "size"]);
  const As = as;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(As, __spreadProps(__spreadValues({ className: headingVariant({ size }) }, rest), { children }));
}

// src/components/typograph/text/index.tsx
var import_tailwind_variants5 = require("tailwind-variants");
var import_jsx_runtime8 = require("react/jsx-runtime");
var textVariant = (0, import_tailwind_variants5.tv)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
}

// src/components/ui/form/checkbox/index.tsx
var import_lucide_react = require("lucide-react");
var import_react = require("react");
var import_tailwind_variants6 = require("tailwind-variants");
var import_jsx_runtime9 = require("react/jsx-runtime");
var variants = (0, import_tailwind_variants6.tv)({
  base: "w-5 h-5 rounded border border-zinc-200 bg-zinc-100",
  variants: {
    checked: {
      true: "border border-yellow-700 bg-yellow-700 text-zinc-50"
    }
  },
  defaultVariants: {
    checked: false
  }
});
function Checkbox({ checked = false }) {
  const [isChecked, setIsChecked] = (0, import_react.useState)(checked);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "button",
    {
      type: "button",
      onClick: toggleCheck,
      className: variants({ checked: isChecked }),
      children: isChecked && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react.Check, { size: 18 })
    }
  );
}

// src/components/ui/form/input/index.tsx
var import_tailwind_variants7 = require("tailwind-variants");
var import_react2 = require("react");
var import_mask = require("@react-input/mask");
var import_jsx_runtime10 = require("react/jsx-runtime");
var variants2 = (0, import_tailwind_variants7.tv)({
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
var Input = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { mask, error, name, className } = _b, rest = __objRest(_b, ["mask", "error", "name", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: variants2({ className, hasError: !!error }), children: mask ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_mask.InputMask,
        __spreadProps(__spreadValues({}, rest), {
          mask,
          className: "w-full bg-transparent outline-none"
        })
      ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mt-1 text-xs text-rose-600", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/form/input-file/index.tsx
var import_react3 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var InputFile = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var rest = __objRest(_a, []);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex h-full min-h-[80px] w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full items-center justify-center text-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { className: "text-zinc-500", children: "(Somente arquivos em .doc, .docx e .pdf)" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", __spreadValues({ id: "file", ref, type: "file", className: "hidden" }, rest))
    ] });
  }
);

// src/components/ui/form/label/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Label(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("label", __spreadProps(__spreadValues({}, rest), { className: "font-bold", children }));
}

// src/components/ui/form/select/index.tsx
var import_lucide_react2 = require("lucide-react");
var SelectElement = __toESM(require("@radix-ui/react-select"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Root4 = (_a) => {
  var _b = _a, { placeholder, children } = _b, rest = __objRest(_b, ["placeholder", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SelectElement.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SelectElement.Trigger, { className: "flex w-full items-center justify-between rounded border border-zinc-200 bg-zinc-100 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectElement.Value, { placeholder }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectElement.Icon, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react2.ChevronDown, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectElement.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      SelectElement.Content,
      __spreadProps(__spreadValues({}, rest), {
        className: "mt-2 w-full rounded bg-zinc-100",
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectElement.Viewport, { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectElement.Group, { children }) })
      })
    ) })
  ] });
};
var Option = (_a) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectElement.Item, __spreadProps(__spreadValues({}, rest), { className: "w-full p-4", children }));
};
var Select = {
  Root: Root4,
  Option
};

// src/components/ui/form/textarea/index.tsx
var import_tailwind_variants8 = require("tailwind-variants");
var import_react4 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var variants3 = (0, import_tailwind_variants8.tv)({
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
var TextArea = (0, import_react4.forwardRef)(
  (_a, ref) => {
    var _b = _a, { error, name, className } = _b, rest = __objRest(_b, ["error", "name", "className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: variants3({ className }), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button,
  Checkbox,
  Footer,
  Header,
  Heading,
  Input,
  InputFile,
  Label,
  Menu,
  Select,
  Text,
  headingVariant,
  textVariant
});
