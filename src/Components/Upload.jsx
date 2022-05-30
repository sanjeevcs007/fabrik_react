import React from "react";
import "../Styles/upload.css";

function Upload() {
  return (
    <div id="upload">
      <div className="dark-overlay">
        <div className="row mx-auto col-sm-4">
          <h2 className="text-center text-white mb-5 mt-5">
            Upload a 3D model
          </h2>
          <div className="form-group">
            <input
              type="file"
              name="file_upload"
              className="form-control"
              placeholder="3D Model"
              method="post"
            />
            <br />
            <input
              type="submit"
              value="Upload"
              className="form-control bg-primary text-dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
