import { useState, FC, useRef } from "react";
import { DragAndDropDiv, TextIconDiv, UploadInput } from "./style";
import { BsHandIndexThumb } from "react-icons/bs";
import "./cssStyle.css";
import { IoMdArrowBack } from "react-icons/io";

import { FileUploader } from "react-drag-drop-files";

interface Props {
  setImageFile: (file: any) => void;
}

const DragAndDropArea = ({ setImageFile }: Props) => {
  //USESATE
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  //CONTEXT
  // const userContext = useContext(UserContext);
  const fileTypes = ["jpg", "png", "jpeg"];

  //USE-EFFECT

  const handleChange = async (file: any) => {
    setImageFile(file);
    setFileName(file.name);
  };

  const handleTypeError = () => {
    console.log("TYPE ERROR");
  };

  return (
    // <UserProvider>
    <DragAndDropDiv>
      <FileUploader
        handleChange={(e: any) => {
          handleChange(e);
        }}
        name="file"
        types={fileTypes}
        onTypeError={handleTypeError}
      >
        <TextIconDiv>
          <span className="DragandDrop" style={{ fontSize: "14px" }}>
            {fileName !== "" && <span>{fileName}</span>}
          </span>
          <UploadInput
            placeholder="Upload Your Thumbnail"
            type="file"
            onChange={(e) => {
              e.target.files ? setImageFile(e.target.files[0]) : null;
            }}
          />
          <span className="DragandDrop-text" style={{ marginTop: "20px" }}>
            Drag and Drop or Click{" "}
            <BsHandIndexThumb color="yellow" size={"18px"} fill={"yellow"} /> To
            Select Your Twitter Profile Picture
          </span>
        </TextIconDiv>
      </FileUploader>
    </DragAndDropDiv>
    // </UserProvider>
  );
};

export default DragAndDropArea;
