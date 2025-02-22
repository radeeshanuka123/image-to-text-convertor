

import React, { useState } from "react";
import axios from "axios";

const ImageUploader = ({ setText }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image!");
    
    setLoading(true);
    const formData = new FormData();
    formData.append("image", document.getElementById("file-input").files[0]);

    try {
      const res = await axios.post("http://localhost:5000/convert", formData);
      setText(res.data.text);
    } catch (error) {
      console.error(error);
      alert("OCR conversion failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-center w-full max-w-lg">
      <input type="file" id="file-input" onChange={handleImageChange} className="mb-3" />
      {image && <img src={image} alt="Preview" className="w-full h-40 object-cover rounded-lg mb-3" />}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Processing..." : "Convert to Text"}
      </button>
    </div>
  );
};

export default ImageUploader;




/*

import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div className="upload-box">
      <label>
        <input type="file" accept="image/*" hidden onChange={handleImageChange} />
        <p>📤 Click to Upload Image</p>
      </label>
      {image && <img src={image} alt="Preview" className="image-preview" />}
    </div>
  );
};

export default ImageUploader;

*/