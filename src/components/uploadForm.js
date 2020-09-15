import React, { useState } from "react";
import ProgressBar from "./progressBar";

const UploadForm = () => {
  const [image, setImage] = useState(null);
  // const [error, setError] = useState(false);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
      // setError(false);
    } else {
      setImage(null);
    }
  };

  return (
    <form>
      <input type="file" accept="image/*" onChange={handleChange} />
      <div className="result">
        {/* {error && <div className="error">{error}</div>} */}
        {image && (
          <>
            <ProgressBar image={image} setImage={setImage} />
          </>
        )}
      </div>
    </form>
  );
};

export default UploadForm;
