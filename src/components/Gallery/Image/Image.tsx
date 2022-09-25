import React, { FC, DragEvent } from "react";
import { cn } from "../../../util/cn";
import "./Image.css";

const cls = cn("image");

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  onStart: (e: DragEvent) => void;
  onDrag: (e: DragEvent) => void;
  onEnd: (e: DragEvent) => void;
}

export const Image: FC<ImageProps> = (props) => {
  const { src, alt, className, onStart, onDrag, onEnd } = props;
  return (
    <div
      className={cls("", [className])}
      onDragStart={onStart}
      onDrag={onDrag}
      onDragEnd={onEnd}
    >
      <img src={src} alt={alt} className={cls("image")} />
    </div>
  );
};
