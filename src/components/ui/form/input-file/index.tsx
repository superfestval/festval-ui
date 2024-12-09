import { forwardRef, InputHTMLAttributes } from "react";

export type InputFileProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ ...rest }, ref) => (
    <div className="flex h-full min-h-[80px] w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950">
      <label
        htmlFor="file"
        className="flex h-full w-full items-center justify-center text-center"
      >
        <div className="flex w-full items-center justify-center">
          <small>
            <div>
              <p>Clique aqui para inserir um documento</p>
              <small className="text-zinc-500">
                (Somente arquivos em .doc, .docx e .pdf)
              </small>
            </div>
          </small>
        </div>
      </label>
      <input id="file" ref={ref} type="file" className="hidden" {...rest} />
    </div>
  )
);
