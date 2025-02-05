import { tv } from "tailwind-variants";
import { useEffect, useState } from "react";
import { Calendar1, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "../button";
import { Popover } from "../../popover";

export type YearPickerProps = {
  defaultValue?: number;
  onValueChange?: (value: number) => void;
};

const variant = tv({
  base: "rounded bg-zinc-100 p-2 transition-colors hover:bg-zinc-200",
  variants: {
    selected: {
      true: "bg-yellow-600 hover:bg-yellow-700 text-zinc-50",
    },
  },
});

export const YearPicker: React.FC = ({
  onValueChange,
  defaultValue = new Date().getFullYear(),
}: YearPickerProps) => {
  const [year, setYear] = useState<number>(defaultValue);
  const [years] = useState<Array<number>>(() =>
    Array.from({
      length: 9,
    })
  );

  const handleYearChange = (value: number) => {
    setYear(value);

    if (onValueChange) {
      onValueChange(value);
    }
  };

  const handleNextYearChange = () => setYear(year + 1);
  const handlePreviousYearChange = () => setYear(year - 1);

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant="ghost"
          className="w-full border border-zinc-300"
          type="button"
        >
          <Calendar1 size={14} />
          <p>{year}</p>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="start">
          <div>
            <div className="flex items-center justify-between border-b border-b-zinc-200 p-2">
              <button onClick={handlePreviousYearChange}>
                <ChevronLeft />
              </button>
              <button onClick={handleNextYearChange}>
                <ChevronRight />
              </button>
            </div>
            <div className="grid w-fit grid-cols-3 gap-2 rounded bg-zinc-50 p-2">
              {years.map((_, index) => (
                <button
                  onClick={() => handleYearChange(year + index)}
                  className={variant({ selected: year === year + index })}
                >
                  {year + index}
                </button>
              ))}
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

YearPicker.displayName = "YearPicker";
