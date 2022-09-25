import React, { FC, useState, DragEvent, useCallback } from "react";
import { cn } from "../../util/cn";
import "./DownloadZone.css";

const cls = cn("downloadZone");

interface DownloadZoneProps {
  className?: string;
  getDropedFile?: (imgFile: File) => void;
  active?: boolean;
}

export const DownloadZone: FC<DownloadZoneProps> = ({
  className,
  getDropedFile,
  active = false,
}) => {
  const [isDragged, setIsDragged] = useState(false);

  const onDragHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragged(true);
  }, []);

  const onLeaveHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragged(false);
  }, []);

  const onDropHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setIsDragged(false);
      const files = [...e.dataTransfer.files];
      if (
        !files.length ||
        files.some((file: File) => !file.type.includes("image"))
      )
        return;

      files?.map((file) => getDropedFile?.(file));
    },
    [getDropedFile]
  );

  return (
    <>
      {active && (
        <div
          className={cls("", { isDragged, dropArea: true })}
          onDragOver={onDragHandler}
          onDragLeave={onLeaveHandler}
          onDrop={onDropHandler}
        >
          {isDragged ? "Пиздуй сюда" : "Тащи картинку, заебал"}
        </div>
      )}
    </>
  );
};
