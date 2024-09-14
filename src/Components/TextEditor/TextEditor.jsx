/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { modules } from "../../Api/utils/minicode";

const TextEditor = ({ handleDescription }) => {
  // Initialize Quill only once
  useEffect(() => {
    if (document.querySelector(".ql-toolbar")) {
      return;
    }
    const quill = new Quill("#editor", {
      theme: "snow",
      modules: modules,
    });
    quill.on("text-change", () => {
      const content = quill.root.innerHTML; // Get the HTML content
      handleDescription(content); // Pass the content via the prop
    });
  }, [handleDescription]);

  return (
    <div>
      <div>
        {/* Quill editor container */}
        <div id="editor" style={{ height: "300px", width: "100%" }}></div>
      </div>
    </div>
  );
};

export default TextEditor;
