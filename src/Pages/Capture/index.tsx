import React, { useState, useCallback, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import Scanner from "../../components/Scanner";
import thumb_back_with_arrow from "../../assets/images/thumb-back.png";
import { MdOutlineCamera } from "react-icons/md";
import { CaptureBtn } from "./style";
const Capture = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [thumbPrint, setThumbPrint] = useState("");
  const [startCapture, setStartCapture] = useState(false);
  const [finger, setFinger] = useState("");

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const webcamRef = useRef<any>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current
      ? setThumbPrint(webcamRef.current.getScreenshot())
      : null;
  }, [webcamRef]);

  const videoConstraints = {
    facingMode: isMobile ? { exact: "environment" } : "user",
  };
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
          <h3 style={{ textTransform: "capitalize", fontSize: "3vw" }}>
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
          <Webcam
            ref={webcamRef}
            videoConstraints={videoConstraints}
            height={isMobile ? 220 : 500}
          />
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
