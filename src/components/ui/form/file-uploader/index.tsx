import { useCallback, useEffect, useState } from "react";
import { CloudUpload, File as FileIcon, Trash } from "lucide-react";

interface UploadedFile {
  id: string;
  file: File;
  previewUrl?: string;
  permission: string;
}

export interface FileUploadProps {
  accept?: string;
  permissionType?: string;
  onFileChange?: (files: UploadedFile[]) => void;
}

export function FileUploader({
  accept,
  permissionType = "",
  onFileChange,
}: FileUploadProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  useEffect(() => {
    onFileChange?.(files);
  }, [files]);

  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selected = event.target.files;
      if (!selected) return;

      const newFiles: UploadedFile[] = [];

      Array.from(selected).forEach((file) => {
        newFiles.push({
          id: crypto.randomUUID(),
          file,
          previewUrl: URL.createObjectURL(file),
          permission: permissionType,
        });
      });

      setFiles((prev) => [...prev, ...newFiles]);
    },
    []
  );

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dropped = event.dataTransfer.files;
    if (!dropped) return;

    const newFiles: UploadedFile[] = [];
    Array.from(dropped).forEach((file) => {
      newFiles.push({
        id: crypto.randomUUID(),
        file,
        previewUrl: URL.createObjectURL(file),
        permission: permissionType,
      });
    });

    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  return (
    <div className="space-y-3">
      <div
        className="cursor-pointer rounded border border-dashed border-gray-400 p-6 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <label className="cursor-pointer">
          <input
            type="file"
            className="hidden"
            accept={accept}
            multiple
            onChange={handleSelect}
          />
          <div className="flex flex-col items-center gap-2">
            <CloudUpload className="h-8 w-8" />
            <span>Arraste arquivos ou clique para enviar</span>
          </div>
        </label>
      </div>

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded bg-gray-50 p-3"
            >
              <div className="flex items-center gap-3">
                <FileIcon className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{item.file.name}</p>
                  <select
                    className="rounded border p-1 text-xs"
                    value={item.permission}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFiles((prev) =>
                        prev.map((f) =>
                          f.id === item.id ? { ...f, permission: value } : f
                        )
                      );
                    }}
                  >
                    <option value="">Público</option>
                    <option value="8f2c1f7f-fb9e-4410-838d-27e9fec92fef">
                      Administrador
                    </option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
