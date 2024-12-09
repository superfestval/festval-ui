import { forwardRef, InputHTMLAttributes, useState } from "react";

export type InputFileProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ accept = ".pdf", ...rest }, ref) => {
    const [files, setFiles] = useState<FileList | null>(null);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setFiles(e.currentTarget.files);

    return (
      <div className="flex h-full min-h-[80px] w-full items-center justify-center rounded border border-dashed border-zinc-200 bg-zinc-100 text-zinc-950">
        <label
          htmlFor="file"
          className="flex h-full w-full items-center justify-center text-center"
        >
          <div className="flex w-full items-center justify-center">
            <small>
              {!files ? (
                <div>
                  <p>Clique aqui para inserir um documento</p>
                  <small className="text-zinc-500">
                    (Somente arquivos {accept})
                  </small>
                </div>
              ) : (
                <div className="p-4">
                  <p>Arquivos selecionados:</p>
                  <div>
                    {Array.from(files).map((item, index) => (
                      <small key={item.name}>
                        {item.name} {index > 0 && ", "}
                      </small>
                    ))}
                  </div>
                  <small className="text-zinc-500"></small>
                </div>
              )}
            </small>
          </div>
        </label>
        <input
          id="file"
          ref={ref}
          {...rest}
          type="file"
          className="hidden"
          accept={accept}
          onChange={onInputChange}
        />
      </div>
    );
  }
);
