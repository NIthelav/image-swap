import React, { useState, useCallback } from "react";
import { DownloadZone } from "./components/DownloadZone/DownloadZone";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  const [srcList, setSrcList] = useState([] as string[]);
  const [isActive, setIsActive] = useState(true);

  const addSrc = useCallback(
    (imgFile: File) =>
      setSrcList((srcList) => {
        const src = URL.createObjectURL(imgFile);
        console.log(src);
        return src ? srcList.concat(src) : srcList;
      }),
    []
  );

  return (
    <>
      <Gallery
        srcList={srcList}
        setIsActive={(isActive: boolean) => setIsActive(isActive)}
      />
      <DownloadZone getDropedFile={addSrc} active={isActive} />
    </>
  );
}

export default App;

