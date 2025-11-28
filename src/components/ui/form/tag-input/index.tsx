import { Plus, X } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";
import { useRef, useState } from "react";
import { Label } from "../label";
import { Text } from "@/components/typograph/text";

const variant = tv({
  base: "rounded border border-gray-200 p-4 w-full",
});

export type TagInputProps = {
  label?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
} & VariantProps<typeof variant>;

export function TagInput({
  label,
  className,
  placeholder,
  defaultValue = [],
  onChange,
}: TagInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [tags, setTags] = useState<string[]>(defaultValue);

  const addTag = () => {
    if (!inputRef.current) {
      return;
    }

    const newTag = inputRef.current.value.toLowerCase().trim();
    if (!newTag || tags.includes(newTag)) return;

    const updated = [...tags, newTag];

    inputRef.current.value = "";
    setTags(updated);
    onChange?.(updated);
  };

  const removeTag = (target: string) => {
    const updated = tags.filter((item: string) => item !== target);

    onChange?.(updated);
    setTags(updated);
  };
  return (
    <div className={variant({ className })}>
      {label && <Label>{label}</Label>}

      <div className="gap flex gap-2 py-4">
        {tags.length ? (
          tags.map((item: string) => (
            <div
              key={item}
              className="flex w-fit items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-2"
            >
              <Text size="xs">{item}</Text>
              <button type="button" onClick={() => removeTag(item)}>
                <X size={12} />
              </button>
            </div>
          ))
        ) : (
          <Text size="xs" className="text-gray-400">
            {placeholder}
          </Text>
        )}
      </div>

      <div className="flex w-full gap-2 rounded border border-gray-200 focus-within:border-yellow-700">
        <input
          className="w-full rounded p-2 outline-none"
          type="text"
          ref={inputRef}
        />
        <button
          type="button"
          onClick={addTag}
          className="rounded-r bg-gray-200 px-4"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
