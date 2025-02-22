


import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import TextDisplay from "./components/TextDisplay";
import "./styles.css";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-white text-3xl font-bold mb-5">🖼️ Image to Text Converter</h1>
      <ImageUploader setText={setText} />
      <TextDisplay text={text} />
    </div>
  );
};

export default App;



/*
import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import TextDisplay from "./components/TextDisplay";
import GradientButton from "./components/GradientButton";
import "./styles.css";

function App() {
  const [text, setText] = useState("");

  const handleImageUpload = (file) => {
    console.log("Processing OCR...");
    setText("Sample extracted text from image.");
  };

  return (
    <div className="container">
      <h1>🖼️ Image to Text Converter</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
      <GradientButton text="Convert to Text" onClick={() => alert("Processing...")} />
      <TextDisplay extractedText={text} />
    </div>
  );
}

export default App;

*/


/*
import React, { useState } from "react";
import UploadForm from "./components/ImageUploader";
import DisplayText from "./components/TextDisplay";
import "./styles.css";

const App = () => {
  const [extractedText, setExtractedText] = useState("");

  return (
    <div className="app-container">
      <h1>Image to Text Converter</h1>
      <UploadForm setExtractedText={setExtractedText} />
      <DisplayText extractedText={extractedText} />
    </div>
  );
};

export default App;


*/