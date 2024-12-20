import { ptBR } from "react-day-picker/locale";
import { DayPicker, DayPickerProps } from "react-day-picker";

export type CalendarProps = {} & DayPickerProps;

export function Calendar({ ...rest }: CalendarProps) {
  return (
    <DayPicker
      {...rest}
      locale={ptBR}
      classNames={{
        today: "text-red-500",
        range_end: "rounded-r",
        range_start: "rounded-l",
        chevron: "fill-zinc-500",
        month_caption: "py-4 px-12",
        day: "px-4 py-3 text-center",
        nav: "absolute right-4 top-8",
        month_grid: "w-full bg-zinc-10",
        range_middle: "bg-amber-500/25",
        selected: "bg-amber-500 text-white",
        root: "bg-zinc-50 p-4 rounded relative border border-zinc-200 shadow-lg",
      }}
    />
  );
}
