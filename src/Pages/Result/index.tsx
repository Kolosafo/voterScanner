import React, { useEffect, useState } from "react";
import { ResultType } from "../../utils/api";
import { croppedProfilePicture } from "../ProfilePicture";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Payment from "../../components/Payment";
import { handleDownloadDesigns } from "./downloadOriginal";
import { handleGetDesign } from "../../utils/api";
// import { IoMdArrowBack } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { ColorRing } from "react-loader-spinner";
const Result = () => {
  const { party } = useParams();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<ResultType | null>(null);

  const handleDownloadAll = () => {
    result
      ? handleDownloadDesigns(
          result.original.profile_img,
          result.original.banner_img,
          result.original.post_img
        )
      : null;
  };
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
  const priceStyle = {
    fontSize: "3vw",
  };
  const navigate = useNavigate();
  useEffect(() => {
    console.log(croppedProfilePicture);
    setTimeout(() => {
      croppedProfilePicture.url !== "" ||
      croppedProfilePicture.url ||
      croppedProfilePicture.name! == "" ||
      croppedProfilePicture.name
        ? (setLoading(false),
          party
            ? handleGetDesign(
                croppedProfilePicture.url,
                party,
                croppedProfilePicture.name,
                setResult
              )
            : null,
          console.log(croppedProfilePicture.url === ""))
        : navigate("/");
      if (croppedProfilePicture.url === "") {
        navigate("/");
      } else if (croppedProfilePicture.name === "") {
        navigate("/");
      }
    }, 2000);
  }, [croppedProfilePicture]);

  return (
    <div
      style={{
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "15px",
          cursor: "pointer",
        }}
        onClick={() => {
          croppedProfilePicture.url = "";
          croppedProfilePicture.name = "";
          navigate(`/profile_picture/${party}`);
        }}
      >
        <IoMdArrowBack size={45} />
      </div>
      {loading && <Loading loading={loading} />}
      {result ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4 style={{ fontSize: "5vw" }}>Profile Picture</h4>
              <img
                src={result.watermarked.profile_img}
                alt="img"
                style={{ width: isMobile ? "65%" : "20%" }}
              />
              <div style={{ display: "flex" }}>
                <h3 style={priceStyle}>N500</h3>
                <h3
                  style={{
                    opacity: "0.3",
                    textDecoration: "line-through",
                    marginLeft: "20px",
                    fontSize: "3vw",
                  }}
                >
                  N2000
                </h3>
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ fontSize: "5vw" }}>Twitter Profile Banner</h4>
              <img
                src={result.watermarked.banner_img}
                alt="img"
                style={{ width: isMobile ? "90%" : "40%" }}
              />
              <div style={{ display: "flex" }}>
                <h3 style={priceStyle}>N500</h3>
                <h3
                  style={{
                    opacity: "0.3",
                    textDecoration: "line-through",
                    marginLeft: "20px",
                    fontSize: "3vw",
                  }}
                >
                  N2000
                </h3>
              </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ fontSize: "5vw" }}>Post Design</h4>
              <img
                src={result.watermarked.post_img}
                alt="img"
                style={{ width: isMobile ? "90%" : "40%" }}
              />
              <div style={{ display: "flex" }}>
                <h3 style={priceStyle}>N500</h3>
                <h3
                  style={{
                    opacity: "0.3",
                    textDecoration: "line-through",
                    marginLeft: "20px",
                    fontSize: "3vw",
                  }}
                >
                  N2000
                </h3>
              </div>
            </div>
          </div>

          <hr style={{ width: "100%" }} />
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1>Total:</h1>
            <h2 style={{ color: "cyan", fontSize: "3vw" }}>N1,500</h2>

            <Payment />
            {/* <button onClick={handleDownloadAll}>Download All</button> */}
            <span style={{ marginTop: "15px", fontSize: "18px" }}>
              By Clicking "Download Original", you agree to our{" "}
              <Link
                to="/TOS"
                style={{ color: "red", textDecoration: "underline" }}
              >
                Terms of Service
              </Link>
              .
            </span>
          </div>
        </>
      ) : (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </div>
  );
};

export default Result;
