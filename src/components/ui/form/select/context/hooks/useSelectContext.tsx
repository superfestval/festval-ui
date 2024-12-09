import { useState } from "react";

export function useSelectContext(onChange?: (value: string) => void) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);

  const onValueChange = (value: string) => {
    setValue(value);
    setIsOpen(false);

    if (onChange) {
      onChange(value);
    }
  };

  const onTriggerClick = () => setIsOpen(!isOpen);

  return {
    value,
    isOpen,
    onValueChange,
    onTriggerClick,
  };
}
