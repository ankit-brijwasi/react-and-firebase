import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ image, setImage }) => {
  const { url, progress } = useStorage(image);
  // console.log(image.name);

  React.useEffect(() => {
    if (url) {
      setImage(null);
    }
  }, [url, setImage]);

  return (
    <>
      <div className="progress">
        <progress value={progress} max="100">
          {progress}
        </progress>
      </div>
    </>
  );
};

export default ProgressBar;
