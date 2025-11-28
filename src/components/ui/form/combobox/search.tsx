import { Search as SeachIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

export type SearchProps = {} & InputHTMLAttributes<HTMLInputElement>;

export function Search({ ...rest }: SearchProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2 border-b border-b-gray-200 p-2">
      <input {...rest} type="text" className="w-full outline-none" />
      <button className="p-2">
        <SeachIcon size={14} />
      </button>
    </div>
  );
}
