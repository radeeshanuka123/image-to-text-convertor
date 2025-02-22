

import React from "react";

const TextDisplay = ({ text }) => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-4 w-full max-w-lg rounded-lg textbox">
      <h2 className="text-lg font-bold">Extracted Text:</h2>
      <p className="mt-2">{text || "No text extracted yet!"}</p>
    </div>
  );
};

export default TextDisplay;





/*
import React from "react";

const TextDisplay = ({ extractedText }) => {
  return (
    <div className="text-area">
      <h2>Extracted Text</h2>
      <p>{extractedText || "No text extracted yet..."}</p>
    </div>
  );
};

export default TextDisplay;


*/