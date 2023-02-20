import React, { FC, useEffect, useState } from "react";
import { ScanH3, Scan, FingerPrint } from "./style";
import { useNavigate } from "react-router-dom";

type Props = {
  thumbImg: string;
};
const Scanner: FC<Props> = ({ thumbImg }) => {
  const navigate = useNavigate();
  const [scanText, setScanText] = useState("Scanning...");

  useEffect(() => {
    setTimeout(() => {
      setScanText("Done!");
      setTimeout(() => {
        navigate("/party");
      }, 2000);
    }, 6500);
  }, []);
  return (
    <Scan>
      <FingerPrint finger_img={thumbImg}></FingerPrint>
      <ScanH3 style={{ color: scanText === "Scanning..." ? "" : "white" }}>
        {scanText}
      </ScanH3>
    </Scan>
  );
};

export default Scanner;
