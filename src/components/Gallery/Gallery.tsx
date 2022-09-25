import React, { FC, useCallback, DragEvent, useState } from "react";
import { Image } from "./Image/Image";
import { cn } from "../../util/cn";
import "./Gallery.css";

const cls = cn("gallery");

interface GalleryProps {
  srcList: string[];
  setIsActive?: (isActive: boolean) => void;
}

export const Gallery: FC<GalleryProps> = ({ srcList, setIsActive }) => {
  const onDragStartHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setIsActive?.(false);
    },
    [setIsActive]
  );

  const onDragHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
  }, []);

  const onDragEndHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setIsActive?.(true);
    },
    [setIsActive]
  );

  const onDropHandler = useCallback((e: DragEvent) => {
    console.log("DropImage");
    setIsActive?.(true);
    e.preventDefault();
  }, []);

  return (
    <div className={cls()} onDrop={onDropHandler}>
      {srcList.map((src) => (
        <Image
          src={src}
          alt="Ты проебался, дружище"
          className={cls("image")}
          onStart={onDragStartHandler}
          onDrag={onDragHandler}
          onEnd={onDragEndHandler}
        />
      ))}
    </div>
  );
};
