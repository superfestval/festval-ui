import { tv } from "tailwind-variants";
import { forwardRef, TextareaHTMLAttributes } from "react";

const variants = tv({
  base: "w-full p-2 bg-transparent border border-zinc-200 rounded outline-yellow-700",
  variants: {
    variant: {
      default: "border-2 border-zinc-200 focus-within:border-yellow-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, name, className, ...rest }, ref) => (
    <>
      <div className={variants({ className })}>
        <textarea
          ref={ref}
          {...rest}
          name={name}
          className="w-full bg-transparent outline-none"
        ></textarea>
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </>
  )
);

TextArea.displayName = "TextArea";

export default TextArea;
