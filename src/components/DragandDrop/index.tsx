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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  //CONTEXT
  // const userContext = useContext(UserContext);
  const fileTypes = ["jpg", "png", "jpeg"];

  //USE-EFFECT

  const handleChange = async (file: any) => {
    if (file.size > 3500000) {
      setErrorMsg("IMAGE TOO BIG");
    } else {
      setImageFile(file);
      setErrorMsg(null);
      setFileName(file.name);
    }
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
          {errorMsg && (
            <span
              style={{
                fontSize: "16px",
                color: "orangered",
                fontWeight: "700",
              }}
            >
              {errorMsg}
            </span>
          )}
          <span style={{ fontSize: "16px", color: "cyan" }}>
            Image Shouldn't be more than 3mb of size
          </span>
          <UploadInput
            placeholder="Upload Profile Picture"
            type="file"
            onChange={(e) => {
              // e.target.files ? setImageFile(e.target.files[0]) : null;
              e.target.files ? handleChange(e.target.files[0]) : null;
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
