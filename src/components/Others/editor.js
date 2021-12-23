// import React, { useState } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
// import { Grid } from "@mui/material";

// const TextEditor = ({description}) => {

//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const onEditorStateChange = (editorState) => {
//     return setEditorState(editorState);
//   };
//   const hrmlText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
//   const strippedHtml = hrmlText.replace(/<[^>]+>/g, "");
//   return (
//     <Grid style={{ border: "1px solid grey", padding: "10px" }}>
//       <Editor
//         editorState={description}
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onEditorStateChange={onEditorStateChange}
//         placeholder="Write description here"
//       />
//     </Grid>
//   );
// };

// export default TextEditor;
