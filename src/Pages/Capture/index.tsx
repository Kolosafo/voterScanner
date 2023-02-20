import React, { useState, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import Scanner from "../../components/Scanner";
import thumb_back_with_arrow from "../../assets/images/thumb-back.png";
import { MdOutlineCamera } from "react-icons/md";
import { CaptureBtn } from "./style";
const Capture = () => {
  const [thumbPrint, setThumbPrint] = useState("");
  const [startCapture, setStartCapture] = useState(false);
  const [finger, setFinger] = useState("");
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current
      ? setThumbPrint(webcamRef.current.getScreenshot())
      : null;
  }, [webcamRef]);
  return (
    <>
      {!startCapture && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ textTransform: "capitalize " }}>
            Please show us the mark that indicates you voted
          </h3>
          <img src={thumb_back_with_arrow} alt="" width={"70%"} />
          <CaptureBtn onClick={() => setStartCapture(true)}>Snap</CaptureBtn>
        </div>
      )}

      {!thumbPrint && startCapture ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Webcam ref={webcamRef} />
          <button
            onClick={capture}
            style={{
              border: "2px solid white",
              padding: "15px",
              borderRadius: "10000px",
              margin: "20px 0px",
            }}
          >
            <MdOutlineCamera size={30} />
          </button>
        </div>
      ) : thumbPrint ? (
        <Scanner thumbImg={thumbPrint} />
      ) : null}
    </>
  );
};

export default Capture;
