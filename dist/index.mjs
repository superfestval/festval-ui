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

// src/components/surfaces/footer/index.tsx
import { jsxs } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "item-center flex w-full justify-center bg-zinc-100 p-4 text-xs text-zinc-700", children: [
    "Super Festval \xA9 | ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " | Todos os direitos reservados"
  ] });
}

// src/components/surfaces/header/image.tsx
import { tv } from "tailwind-variants";
import { jsx } from "react/jsx-runtime";
var imageVariation = tv({
  base: "w-24"
});
function Image(_a) {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("img", __spreadValues({ className: imageVariation({ className }) }, rest));
}

// src/components/surfaces/header/root.tsx
import { tv as tv2 } from "tailwind-variants";
import { jsx as jsx2 } from "react/jsx-runtime";
var rootVariation = tv2({
  base: "fixed left-0 top-0 w-full bg-zinc-950"
});
function Root(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx2("header", __spreadProps(__spreadValues({ className: rootVariation({ className }) }, rest), { children: /* @__PURE__ */ jsx2("div", { className: "m-auto flex w-full max-w-4xl items-center justify-between p-4", children }) }));
}

// src/components/surfaces/header/index.tsx
var Header = {
  Root,
  Image
};

// src/components/surfaces/menu/index.tsx
import * as Navigation from "@radix-ui/react-navigation-menu";

// src/components/ui/avatar/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Avatar({ image, username }) {
  return /* @__PURE__ */ jsx3("div", { className: "h-14 w-14 rounded-full border-[3px] border-yellow-700 p-1", children: /* @__PURE__ */ jsx3(
    "img",
    {
      src: image,
      alt: username,
      className: "h-full w-full rounded-full object-cover"
    }
  ) });
}

// src/components/ui/form/button/index.tsx
import { tv as tv3 } from "tailwind-variants";
import { jsx as jsx4 } from "react/jsx-runtime";
var buttonVariant = tv3({
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
  return /* @__PURE__ */ jsx4(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant, disabled }), children }));
}

// src/components/surfaces/menu/index.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function Menu({ signOut, children, username, avatarImage }) {
  return /* @__PURE__ */ jsx5(Navigation.Root, { id: "navigation", children: /* @__PURE__ */ jsx5(Navigation.List, { children: /* @__PURE__ */ jsxs2(Navigation.Item, { children: [
    /* @__PURE__ */ jsx5(Navigation.Trigger, { children }),
    /* @__PURE__ */ jsxs2(Navigation.Content, { className: "absolute right-2 w-[300px] rounded bg-zinc-50 shadow", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex w-full items-center gap-4 border-b border-b-zinc-200 p-2", children: [
        /* @__PURE__ */ jsx5(Avatar, { image: avatarImage, username }),
        /* @__PURE__ */ jsx5("p", { className: "inline-block", children: username })
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "w-full p-4", children: /* @__PURE__ */ jsx5(Button, { onClick: signOut, className: "w-full", children: "Sair" }) })
    ] })
  ] }) }) });
}

// src/components/typograph/heading/index.tsx
import { tv as tv4 } from "tailwind-variants";
import { jsx as jsx6 } from "react/jsx-runtime";
var headingVariant = tv4({
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
  return /* @__PURE__ */ jsx6(As, __spreadProps(__spreadValues({ className: headingVariant({ size }) }, rest), { children }));
}

// src/components/typograph/text/index.tsx
import { tv as tv5 } from "tailwind-variants";
import { jsx as jsx7 } from "react/jsx-runtime";
var textVariant = tv5({
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
  return /* @__PURE__ */ jsx7(As, __spreadProps(__spreadValues({ className: textVariant({ size }) }, rest), { children }));
}

// src/components/ui/form/checkbox/index.tsx
import { Check } from "lucide-react";
import { useState } from "react";
import { tv as tv6 } from "tailwind-variants";
import { jsx as jsx8 } from "react/jsx-runtime";
var variants = tv6({
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
  const [isChecked, setIsChecked] = useState(checked);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return /* @__PURE__ */ jsx8(
    "button",
    {
      type: "button",
      onClick: toggleCheck,
      className: variants({ checked: isChecked }),
      children: isChecked && /* @__PURE__ */ jsx8(Check, { size: 18 })
    }
  );
}

// src/components/ui/form/input/index.tsx
import { tv as tv7 } from "tailwind-variants";
import { forwardRef } from "react";
import { InputMask } from "@react-input/mask";
import { Fragment, jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var variants2 = tv7({
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
    return /* @__PURE__ */ jsxs3(Fragment, { children: [
      /* @__PURE__ */ jsx9("div", { className: variants2({ className, hasError: !!error }), children: mask ? /* @__PURE__ */ jsx9(
        InputMask,
        __spreadProps(__spreadValues({}, rest), {
          mask,
          className: "w-full bg-transparent outline-none"
        })
      ) : /* @__PURE__ */ jsx9(
        "input",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ jsx9("p", { className: "mt-1 text-xs text-rose-600", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/form/input-file/index.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var InputFile = forwardRef2(
  (_a, ref) => {
    var rest = __objRest(_a, []);
    return /* @__PURE__ */ jsxs4("div", { className: "flex h-full min-h-[80px] w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ jsx10(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full items-center justify-center text-center",
          children: /* @__PURE__ */ jsx10("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsx10("small", { children: /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx10("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ jsx10("small", { className: "text-zinc-500", children: "(Somente arquivos em .doc, .docx e .pdf)" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ jsx10("input", __spreadValues({ id: "file", ref, type: "file", className: "hidden" }, rest))
    ] });
  }
);

// src/components/ui/form/label/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function Label(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx11("label", __spreadProps(__spreadValues({}, rest), { className: "font-bold", children }));
}

// src/components/ui/form/select/index.tsx
import { ChevronDown } from "lucide-react";
import * as SelectElement from "@radix-ui/react-select";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var Root4 = (_a) => {
  var _b = _a, { placeholder, children } = _b, rest = __objRest(_b, ["placeholder", "children"]);
  return /* @__PURE__ */ jsxs5(SelectElement.Root, { children: [
    /* @__PURE__ */ jsxs5(SelectElement.Trigger, { className: "flex w-full items-center justify-between rounded border border-zinc-200 bg-zinc-100 p-4", children: [
      /* @__PURE__ */ jsx12(SelectElement.Value, { placeholder }),
      /* @__PURE__ */ jsx12(SelectElement.Icon, { children: /* @__PURE__ */ jsx12(ChevronDown, {}) })
    ] }),
    /* @__PURE__ */ jsx12(SelectElement.Portal, { children: /* @__PURE__ */ jsx12(
      SelectElement.Content,
      __spreadProps(__spreadValues({}, rest), {
        className: "mt-2 w-full rounded bg-zinc-100",
        children: /* @__PURE__ */ jsx12(SelectElement.Viewport, { className: "w-full", children: /* @__PURE__ */ jsx12(SelectElement.Group, { children }) })
      })
    ) })
  ] });
};
var Option = (_a) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx12(SelectElement.Item, __spreadProps(__spreadValues({}, rest), { className: "w-full p-4", children }));
};
var Select = {
  Root: Root4,
  Option
};

// src/components/ui/form/textarea/index.tsx
import { tv as tv8 } from "tailwind-variants";
import { forwardRef as forwardRef3 } from "react";
import { Fragment as Fragment2, jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var variants3 = tv8({
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
var TextArea = forwardRef3(
  (_a, ref) => {
    var _b = _a, { error, name, className } = _b, rest = __objRest(_b, ["error", "name", "className"]);
    return /* @__PURE__ */ jsxs6(Fragment2, { children: [
      /* @__PURE__ */ jsx13("div", { className: variants3({ className }), children: /* @__PURE__ */ jsx13(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ jsx13("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";
export {
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
};
