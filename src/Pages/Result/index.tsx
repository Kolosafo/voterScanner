import React, { useEffect, useState } from "react";
import { ResultType } from "../../utils/api";
import { croppedProfilePicture } from "../ProfilePicture";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Payment from "../../components/Payment";
import { handleGetDesign } from "../../utils/api";
// import { IoMdArrowBack } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
const Result = () => {
  const { party } = useParams();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<ResultType | null>(null);

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
          top: "25px",
          left: "35px",
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
      {result && (
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
                src={result.profile_img}
                alt="img"
                style={{ width: "20%" }}
              />
              <div style={{ display: "flex" }}>
                <h3>N500</h3>
                <h3
                  style={{
                    opacity: "0.3",
                    textDecoration: "line-through",
                    marginLeft: "20px",
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
              <h4 style={{ fontSize: "5vw" }}>Profile Banner</h4>
              <img src={result.banner_img} alt="img" style={{ width: "40%" }} />
              <div style={{ display: "flex" }}>
                <h3>N500</h3>
                <h3
                  style={{
                    opacity: "0.3",
                    textDecoration: "line-through",
                    marginLeft: "20px",
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
            <h2 style={{ color: "cyan" }}>N1,000</h2>
            <Payment />
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
