import React, { useState, FC, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { InterswitchPay } from "react-interswitch";
import Modal from "../modal/Modal";
import { DesktopModalContainer } from "../modal/styles";
import GooglePayButton from "@google-pay/button-react";
import { handleExtract, saveTransactionReceipt } from "../../utils/api";
import { ColorRing } from "react-loader-spinner";
import { croppedProfilePicture } from "../../Pages/ProfilePicture";
import Typewriter from "typewriter-effect";
import { TyprewriterDiv } from "../../Pages/Result/style";

type Props = {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  handleDownloadAll?: () => void;
  setPaid?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Payment: FC<Props> = ({
  isModalVisible,
  onBackdropClick,
  handleDownloadAll,
  setPaid,
}) => {
  if (!isModalVisible) {
    return null;
  }

  type Process = {
    choice: string;
    account: string;
    paid: string;
  };
  const payProcess = {
    choice: "choice",
    account: "account",
    pay: "pay",
    paid: "paid",
  };

  const [image, setImage] = useState<File | null>(null);
  const [score, setSetGoodScore] = useState<number>(-1);
  const [pay, setPay] = useState<string>(payProcess.choice);
  const [receiptText, setReceiptText] = useState<string>("");
  const [verifyPayment, setVerifyPayment] = useState<boolean | null>(null);

  const runTest = () => {
    image ? handleExtract(image, setSetGoodScore, setReceiptText) : null;
  };
  useEffect(() => {
    if (image && croppedProfilePicture.fileName !== "") {
      if (localStorage.getItem("reciept")) {
        const alreadyAdded = localStorage.getItem("reciept");
        alreadyAdded === `"${croppedProfilePicture.fileName}"`
          ? setSetGoodScore(0)
          : runTest();
        localStorage.setItem(
          "reciept",
          JSON.stringify(croppedProfilePicture.fileName)
        );
      } else {
        runTest();
        localStorage.setItem(
          "reciept",
          JSON.stringify(croppedProfilePicture.fileName)
        );
      }
    }
  }, [image]);
  useEffect(() => {
    if (score >= 3 && handleDownloadAll) {
      handleDownloadAll();
      setPaid ? setPaid(true) : null;
      console.log("Score", score);
    } else {
      console.log("Score", score);
    }
  }, [score]);

  useEffect(() => {
    if (receiptText !== "" && croppedProfilePicture.name !== "") {
      saveTransactionReceipt(croppedProfilePicture.name, receiptText);
    }
  }, [receiptText]);

  // return <InterswitchPay {...paymentParameters} />;
  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer
        style={{
          justifyContent: !pay ? "flex-start" : "center",
          height: !pay ? "200px" : "370px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            onBackdropClick();
            // setUserProfilePic(null);
          }}
        >
          <ImCancelCircle size={"25px"} />
        </div>
        {pay === payProcess.choice ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                onBackdropClick();
                // setUserProfilePic(null);
              }}
            >
              <ImCancelCircle size={"25px"} />
            </div>
            <h4>Select Payment Method</h4>

            <button onClick={() => setPay(payProcess.account)}>
              BANK TRANSFER
            </button>
          </>
        ) : pay === payProcess.account ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                onBackdropClick();
                // setUserProfilePic(null);
              }}
            >
              <ImCancelCircle size={"25px"} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "12px",
                justifyContent: "center",
                lineHeight: "10px",
                width: "80%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  margin: "0",
                  padding: "0",
                }}
              >
                <span>Account Number</span>
                <h3>7727691020</h3>
              </div>
              <hr style={{ backgroundColor: "black", width: "100%" }} />
              <div>
                <label>Account Name</label>
                <h3>Muhammad Dauda Kolo</h3>
              </div>

              <hr style={{ backgroundColor: "black", width: "100%" }} />
              <div>
                <span>Bank Name</span>
                <h3>First City Monument Bank (FCMB)</h3>
              </div>

              <hr style={{ backgroundColor: "black", width: "100%" }} />
              <div>
                <span>Total Amount</span>
                <h3 style={{ color: "red" }}>N1,500</h3>
              </div>
              <hr style={{ backgroundColor: "black", width: "100%" }} />
            </div>
            <button
              style={{ padding: "10px", fontSize: "16px" }}
              onClick={() => {
                setPay(payProcess.pay);
              }}
            >
              I have Paid
            </button>
          </>
        ) : pay === payProcess.pay ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                onBackdropClick();
                // setUserProfilePic(null);
              }}
            >
              <ImCancelCircle size={"25px"} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "13px",
                justifyContent: "center",
                lineHeight: "16px",
                alignItems: "center",
                width: "80%",
                textAlign: "center",
              }}
            >
              <h3>Upload Screenshot of your payment reciept</h3>
              <input
                type="file"
                onChange={(e) => {
                  e.target.files
                    ? (setImage(e.target.files[0]),
                      (croppedProfilePicture.fileName = e.target.files[0].name))
                    : null;
                  setPay(payProcess.paid);
                }}
              />
            </div>
          </>
        ) : pay === payProcess.paid && score !== -1 ? (
          <>
            {score >= 3 ? (
              <h3 style={{ color: "green" }}>Success!</h3>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "16px",
                  justifyContent: "center",
                  lineHeight: "20px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "red" }}>Invalid Transaction Reciept</h3>
                <h5 style={{ width: "70%" }}>
                  try uploading a clearer image of the reciept or send it to our
                  support
                  <a
                    style={{ fontWeight: "700", margin: "0px 5px" }}
                    target="_blank"
                    href="mailto:kolosafo@gmail.com"
                    rel="noreferrer"
                  >
                    Mail
                  </a>
                </h5>
              </div>
            )}
          </>
        ) : (
          <TyprewriterDiv>
            <ColorRing
              visible={true}
              height="120"
              width="120"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
            <Typewriter
              options={{
                strings: ["Our AI is checking your payment reciept"],
                autoStart: true,
                delay: 60,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).start();
              }}
            />
          </TyprewriterDiv>
        )}
      </DesktopModalContainer>
    </Modal>
  );
};

export default Payment;
