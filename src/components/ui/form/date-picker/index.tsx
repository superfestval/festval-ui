import { Calendar } from "@/components/surfaces/calendar";
import { Button } from "../button";
import * as Popover from "@radix-ui/react-popover";
import { Calendar1 } from "lucide-react";
import { useState } from "react";
import { DateRange, Mode } from "react-day-picker";
import { add, format } from "date-fns";

export type DatePickerProps = {
  mode: Mode;
  defaultValue?: {
    from: Date;
    to?: Date;
  };
  onRangeChange?: (range: DateRange) => void;
};

export function DatePicker({
  defaultValue,
  onRangeChange,
  mode = "single",
}: DatePickerProps) {
  const [selected, setSelected] = useState<any>(() => {
    if (mode === "single") {
      return new Date();
    }

    return {
      from: defaultValue ? defaultValue.from : new Date(),
      to:
        defaultValue && defaultValue.to
          ? defaultValue.to
          : add(new Date(), {
              days: 15,
            }),
    };
  });

  const onRangeSelected = (data: DateRange | Date) => {
    setSelected(data);

    if (onRangeChange && mode === "range") {
      onRangeChange(data as DateRange);
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant="ghost"
          className="w-full border border-zinc-300"
          type="button"
        >
          <Calendar1 size={14} />
          {mode === "single"
            ? format(selected, "dd/LL/yyyy")
            : format(selected.from || new Date(), "dd/LL/yyyy") +
              " - " +
              format(selected.to || new Date(), "dd/LL/yyyy")}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Calendar
            required
            className="mt-4"
            mode={mode as any}
            selected={selected}
            onSelect={onRangeSelected}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
