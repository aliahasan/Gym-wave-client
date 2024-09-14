export const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],

    ["link", "image", "video"],
    ["blockquote", "code-block"],

    ["clean"], // Remove formatting button
  ],
};
