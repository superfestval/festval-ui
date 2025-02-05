import { tv } from "tailwind-variants";
import { useEffect, useState } from "react";
import { Calendar1, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "../button";
import { Popover } from "../../popover";
import { format } from "date-fns";

export type MonthPickerProps = {
  mode?: "month" | "month-year";
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const months = [
  { label: "Janeiro", value: 1 },
  { label: "Fevereiro", value: 2 },
  { label: "Março", value: 3 },
  { label: "Abril", value: 4 },
  { label: "Maio", value: 5 },
  { label: "Junho", value: 6 },
  { label: "Julho", value: 7 },
  { label: "Agosto", value: 8 },
  { label: "Setembro", value: 9 },
  { label: "Outubro", value: 10 },
  { label: "Novembro", value: 11 },
  { label: "Dezembro", value: 12 },
];

const variant = tv({
  base: "rounded bg-zinc-100 p-2 transition-colors hover:bg-zinc-200",
  variants: {
    selected: {
      true: "bg-yellow-600 hover:bg-yellow-700 text-zinc-50",
    },
  },
});

export const MonthPicker: React.FC<MonthPickerProps> = ({
  onValueChange,
  mode = "month",
  defaultValue = format(new Date(), "yyyy-MM"),
}: MonthPickerProps) => {
  const [year, setYear] = useState<number>(() => {
    if (defaultValue && mode === "month-year") {
      const [defaultYear] = defaultValue.split("-");
      return Number(defaultYear);
    }

    return new Date().getFullYear();
  });
  const [month, setMonth] = useState<string>(() => {
    if (defaultValue && mode === "month-year") {
      const [_, defaultMonth] = defaultValue.split("-");

      return months.find((item) => item.value === Number(defaultMonth))!.label;
    }

    return months.find((item) => item.value === new Date().getMonth())!.label;
  });

  const handleMonthChange = (value: number) => {
    const month = months.find((item) => item.value === value);

    setMonth(month!.label);

    if (onValueChange && mode === "month-year") {
      const selectedMonth: number = months.find(
        (item) => item.value === value
      )!.value;
      const formatedMonth: string =
        selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth.toString();

      onValueChange(year + "-" + formatedMonth);
    }

    if (onValueChange && mode === "month") {
      const selectedMonth: number = months.find(
        (item) => item.value === value
      )!.value;
      const formatedMonth: string =
        selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth.toString();

      onValueChange(formatedMonth);
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
          <p>
            {month} {mode === "month-year" && " - " + year}
          </p>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content align="start">
          <div>
            {mode === "month-year" && (
              <div className="flex items-center justify-between border-b border-b-zinc-200 p-2">
                <button onClick={handlePreviousYearChange}>
                  <ChevronLeft />
                </button>
                <p>{year}</p>
                <button onClick={handleNextYearChange}>
                  <ChevronRight />
                </button>
              </div>
            )}
            <div className="grid w-fit grid-cols-3 gap-2 rounded bg-zinc-50 p-2">
              {months.map((item) => (
                <button
                  onClick={() => handleMonthChange(item.value)}
                  className={variant({
                    selected: item.label === month,
                  })}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

MonthPicker.displayName = "MonthPicker";
