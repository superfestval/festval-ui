import { useState } from "react";
import { add, format } from "date-fns";
import { Calendar1 } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import { DateRange, Mode } from "react-day-picker";

import { Calendar } from "@/components/surfaces/calendar";

import { Button } from "../button";

type RangeValue = { from: Date; to?: Date }

type DefaultValue = Date | RangeValue;

export type DatePickerProps = {
  mode: Mode;
  defaultValue?: DefaultValue;
  onValueChange?: (range: DateRange | Date) => void;
};

export const DatePicker = ({
  defaultValue,
  onValueChange,
  mode,
}: DatePickerProps) => {
  const [selected, setSelected] = useState<any>(() => {
    if (mode === "single" && defaultValue) {
      return defaultValue;
    }

    if (mode === "single" && !defaultValue) {
      return new Date()
    }

   if(defaultValue && mode !== "single") {
    return {
      from: (defaultValue as RangeValue).from,
      to: (defaultValue as RangeValue).to
    };
   }

   return {
    from: (defaultValue as RangeValue).from,
    to: (defaultValue as RangeValue).to
      ? (defaultValue as RangeValue).from
      : add(new Date(), { days: 15 }),
  };
  });

  const onRangeSelected = (data: DateRange | Date) => {
    setSelected(data);

    if (onValueChange && mode === "range") {
      onValueChange(data as DateRange);
    }

    if (onValueChange && mode === "single") {
      onValueChange(data as Date);
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
        <Popover.Content align="start">
          <Calendar
            required
            className="mt-2"
            mode={mode as any}
            selected={selected}
            onSelect={onRangeSelected}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
