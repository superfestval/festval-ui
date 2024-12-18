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
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var buttonVariant = tv3({
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
    variant,
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
  return /* @__PURE__ */ jsxs2(As, __spreadProps(__spreadValues({}, rest), { className: buttonVariant({ className, variant, disabled }), children: [
    IconLeft && /* @__PURE__ */ jsx4(IconLeft, {}),
    children,
    IconRight && /* @__PURE__ */ jsx4(IconRight, {})
  ] }));
}
Button.displayName = "Button";

// src/components/surfaces/menu/index.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Menu({ signOut, children, username, avatarImage }) {
  return /* @__PURE__ */ jsx5(Navigation.Root, { id: "navigation", children: /* @__PURE__ */ jsx5(Navigation.List, { children: /* @__PURE__ */ jsxs3(Navigation.Item, { children: [
    /* @__PURE__ */ jsx5(Navigation.Trigger, { children }),
    /* @__PURE__ */ jsxs3(Navigation.Content, { className: "absolute right-2 w-[300px] rounded bg-zinc-50 shadow", children: [
      /* @__PURE__ */ jsxs3("div", { className: "flex w-full items-center gap-4 border-b border-b-zinc-200 p-2", children: [
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
  return /* @__PURE__ */ jsx6(As, __spreadProps(__spreadValues({ className: headingVariant({ size, className }) }, rest), { children }));
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
import { useState } from "react";
import { Check } from "lucide-react";
import { tv as tv6 } from "tailwind-variants";
import { jsx as jsx8 } from "react/jsx-runtime";
var variants = tv6({
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
  return /* @__PURE__ */ jsx8(
    "button",
    {
      type: "button",
      disabled,
      onClick: toggleCheck,
      className: variants({ checked: isChecked, disabled }),
      children: isChecked && /* @__PURE__ */ jsx8(Check, { size: 18 })
    }
  );
}

// src/components/ui/form/input/index.tsx
import { tv as tv7 } from "tailwind-variants";
import { forwardRef } from "react";
import { InputMask } from "@react-input/mask";
import { Fragment, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs4(Fragment, { children: [
      /* @__PURE__ */ jsx9("div", { className: variants2({ className, hasError: !!error }), children: mask ? /* @__PURE__ */ jsx9(
        InputMask,
        __spreadProps(__spreadValues({}, rest), {
          mask,
          replacement: {
            _: /\d/
          },
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
import { UploadIcon } from "lucide-react";
import { forwardRef as forwardRef2, useState as useState2 } from "react";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var InputFile = forwardRef2(
  (_a, ref) => {
    var _b = _a, { accept = ".pdf" } = _b, rest = __objRest(_b, ["accept"]);
    const [files, setFiles] = useState2(null);
    const onInputChange = (e) => setFiles(e.currentTarget.files);
    return /* @__PURE__ */ jsxs5("div", { className: "flex w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950", children: [
      /* @__PURE__ */ jsx10(
        "label",
        {
          htmlFor: "file",
          className: "flex h-full w-full cursor-pointer items-center justify-center text-center",
          children: /* @__PURE__ */ jsx10("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsx10("small", { children: !files ? /* @__PURE__ */ jsxs5("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx10("p", { children: "Clique aqui para inserir um documento" }),
            /* @__PURE__ */ jsx10("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsx10(UploadIcon, { className: "text-zinc-400" }) }),
            /* @__PURE__ */ jsxs5("small", { className: "text-zinc-500", children: [
              "(Somente arquivos ",
              accept,
              ")"
            ] })
          ] }) : /* @__PURE__ */ jsxs5("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx10("p", { children: "Arquivos selecionados:" }),
            /* @__PURE__ */ jsx10("div", { className: "mt-4", children: Array.from(files).map((item, index) => /* @__PURE__ */ jsxs5("small", { children: [
              item.name,
              " ",
              index > 0 && ", "
            ] }, item.name)) }),
            /* @__PURE__ */ jsx10("small", { className: "text-zinc-500" })
          ] }) }) })
        }
      ),
      /* @__PURE__ */ jsx10(
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

// src/components/ui/form/label/index.tsx
import { tv as tv8 } from "tailwind-variants";
import { jsx as jsx11 } from "react/jsx-runtime";
var labelVariant = tv8({
  base: "font-bold text-zinc-600"
});
function Label(_a) {
  var _b = _a, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
  return /* @__PURE__ */ jsx11("label", __spreadProps(__spreadValues({}, rest), { className: labelVariant({ className }), children }));
}

// src/components/ui/form/select/components/content.tsx
import { tv as tv9 } from "tailwind-variants";

// src/components/ui/form/select/context/index.tsx
import { createContext, useContext } from "react";

// src/components/ui/form/select/context/hooks/useSelectContext.tsx
import { useState as useState3 } from "react";
function useSelectContext(onChange) {
  const [isOpen, setIsOpen] = useState3(false);
  const [value, setValue] = useState3(null);
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
import { jsx as jsx12 } from "react/jsx-runtime";
var SelectContext = createContext({});
var SelectProvider = ({ children, onChange }) => {
  const value = useSelectContext(onChange);
  return /* @__PURE__ */ jsx12(SelectContext.Provider, { value, children });
};
var useSelect = () => useContext(SelectContext);

// src/components/ui/form/select/components/content.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var contentVariable = tv9({
  base: "top-12 flex max-h-24 flex-col overflow-y-auto rounded absolute w-full",
  variants: {
    isOpen: {
      true: "flex",
      false: "hidden"
    }
  }
});
var Content2 = ({ children }) => {
  const { isOpen } = useSelect();
  return /* @__PURE__ */ jsx13("div", { className: contentVariable({ isOpen }), children });
};

// src/components/ui/form/select/components/item.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var Item2 = ({ value, children }) => {
  const { onValueChange } = useSelect();
  const onClick = () => onValueChange(value);
  return /* @__PURE__ */ jsx14(
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
import { jsx as jsx15 } from "react/jsx-runtime";
var Root3 = ({ children, onValeuChange }) => {
  return /* @__PURE__ */ jsx15(SelectProvider, { onChange: onValeuChange, children: /* @__PURE__ */ jsx15("div", { className: "relative", children }) });
};

// src/components/ui/form/select/components/trigger.tsx
import { tv as tv10 } from "tailwind-variants";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { jsx as jsx16, jsxs as jsxs6 } from "react/jsx-runtime";
var triggerVariable = tv10({
  base: "flex w-full items-center justify-between rounded border  bg-zinc-100 px-4 py-2 text-left",
  variants: {
    isOpen: {
      true: "border-yellow-600",
      false: "border-zinc-200"
    }
  }
});
var Trigger2 = ({ placeholder }) => {
  const { value, isOpen, onTriggerClick } = useSelect();
  return /* @__PURE__ */ jsxs6("button", { onClick: onTriggerClick, className: triggerVariable({ isOpen }), children: [
    value ? value : placeholder,
    isOpen ? /* @__PURE__ */ jsx16(ChevronUpIcon, {}) : /* @__PURE__ */ jsx16(ChevronDownIcon, {})
  ] });
};

// src/components/ui/form/select/index.tsx
var Select = {
  Root: Root3,
  Trigger: Trigger2,
  Content: Content2,
  Item: Item2
};

// src/components/ui/form/textarea/index.tsx
import { tv as tv11 } from "tailwind-variants";
import { forwardRef as forwardRef3 } from "react";
import { Fragment as Fragment2, jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
var variants3 = tv11({
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
    return /* @__PURE__ */ jsxs7(Fragment2, { children: [
      /* @__PURE__ */ jsx17("div", { className: variants3({ className }), children: /* @__PURE__ */ jsx17(
        "textarea",
        __spreadProps(__spreadValues({
          ref
        }, rest), {
          name,
          className: "w-full bg-transparent outline-none"
        })
      ) }),
      error && /* @__PURE__ */ jsx17("p", { className: "mt-1 text-xs text-red-600", children: error })
    ] });
  }
);
TextArea.displayName = "TextArea";

// src/components/ui/table/index.tsx
import { ArrowDownUp } from "lucide-react";
import { tv as tv12 } from "tailwind-variants";
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
var cellHeadVariant = tv12({
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
    return /* @__PURE__ */ jsx18("table", __spreadProps(__spreadValues({ className: "m-auto mt-6 w-full max-w-[1120px]" }, rest), { children }));
  },
  Caption: (_c) => {
    var _d = _c, { children } = _d, rest = __objRest(_d, ["children"]);
    return /* @__PURE__ */ jsx18(
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
    return /* @__PURE__ */ jsx18("thead", __spreadProps(__spreadValues({ className: "rounded-t" }, rest), { children }));
  },
  TBody: (_g) => {
    var _h = _g, { children } = _h, rest = __objRest(_h, ["children"]);
    return /* @__PURE__ */ jsx18("tbody", __spreadProps(__spreadValues({}, rest), { children }));
  },
  Tr: (_i) => {
    var _j = _i, { children } = _j, rest = __objRest(_j, ["children"]);
    return /* @__PURE__ */ jsx18("tr", __spreadProps(__spreadValues({ className: "rounded-t bg-zinc-50" }, rest), { children }));
  },
  Th: (_k) => {
    var _l = _k, { children, position, onClick } = _l, rest = __objRest(_l, ["children", "position", "onClick"]);
    return /* @__PURE__ */ jsxs8("th", __spreadProps(__spreadValues({}, rest), { className: cellHeadVariant({ position }), children: [
      children,
      onClick && /* @__PURE__ */ jsx18("button", { onClick, className: "ml-4", children: /* @__PURE__ */ jsx18(ArrowDownUp, { size: 12 }) })
    ] }));
  },
  Td: (_m) => {
    var _n = _m, { children } = _n, rest = __objRest(_n, ["children"]);
    return /* @__PURE__ */ jsx18("td", __spreadProps(__spreadValues({ className: "border-b border-b-zinc-200 px-4 py-2" }, rest), { children }));
  }
};
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
  Table,
  Text,
  headingVariant,
  textVariant
};
