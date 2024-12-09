import { tv, VariantProps } from "tailwind-variants";

export const imageVariation = tv({
  base: "w-24",
});

export type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof imageVariation>;

export function Image({ className, ...rest }: ImageProps) {
  return <img className={imageVariation({ className })} {...rest} />;
}
