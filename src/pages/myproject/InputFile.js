import React, { useState } from "react";

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewURL(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewURL("");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>선택한 파일: {selectedFile.name}</p>
          <img
            src={previewURL}
            alt="선택한 이미지 미리보기"
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
              border: "1px solid #333",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
