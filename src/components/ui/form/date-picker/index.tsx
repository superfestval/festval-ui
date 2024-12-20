import { Calendar } from "@/components/surfaces/calendar";
import { Button } from "../button";
import * as Popover from "@radix-ui/react-popover";
import { Calendar1 } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { add, format } from "date-fns";

export type DatePickerProps = {
  defaultValue?: {
    from: Date;
    to?: Date;
  };
  onRangeChange?: (range: DateRange) => void;
};

export function DatePicker({ defaultValue, onRangeChange }: DatePickerProps) {
  const [selected, setSelected] = useState<DateRange>(() => {
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

  const onRangeSelected = (range: DateRange) => {
    setSelected(range);

    if (onRangeChange) {
      onRangeChange(range);
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost" className="mb-1 border border-zinc-300">
          <Calendar1 size={14} />
          {format(selected.from || new Date(), "dd/LL/yyyy")} {" - "}{" "}
          {format(selected.to || new Date(), "dd/LL/yyyy")}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Calendar
            mode="range"
            required
            selected={selected}
            onSelect={onRangeSelected}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
