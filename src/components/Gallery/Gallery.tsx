import React, { FC, useMemo, useCallback, DragEvent, useState } from "react";
import { cn } from "../../util/cn";
import { swapIdx } from "../../util/swapIdx";
import "./Gallery.css";

const cls = cn("gallery");
interface GalleyProps {
  srcList: string[];
  setSrcList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Gallery: FC<GalleyProps> = ({ srcList, setSrcList }) => {
  const [draggedIdx, setDraggetIdx] = useState(null as number | null);

  const swap = useCallback(
    (idx: number, idx1: number) =>
      setSrcList((srcList) => swapIdx<string>(idx, idx1, srcList)),
    [setSrcList]
  );

  const onDragStartHandler = useCallback(
    (idx: number) => (e: DragEvent) => {
      setDraggetIdx(idx);
      e.dataTransfer.effectAllowed = "move";
    },
    []
  );

  const onDragEnterHandler = useCallback(
    (idx: number) => (e: DragEvent) => {
      const target = e.target as HTMLImageElement;
      if (!target.classList.contains(cls("image"))) return;
      if (draggedIdx !== null) {
        swap(idx, draggedIdx);
        setDraggetIdx(idx);
      }
    },
    [swap, draggedIdx]
  );

  const images = useMemo(
    () =>
      srcList.map((src, idx) => (
        <img
          src={src}
          alt="Ты пидор"
          className={cls("image")}
          draggable={true}
          onDragStart={onDragStartHandler(idx)}
          onDragEnter={onDragEnterHandler(idx)}
        />
      )),
    [srcList, onDragEnterHandler]
  );
  return <div className={cls()}>{images}</div>;
};
