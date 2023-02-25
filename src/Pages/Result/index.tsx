import React, { useEffect, useState } from "react";
import { getRealVoteCount, ResultType } from "../../utils/api";
import { croppedProfilePicture } from "../ProfilePicture";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { handleDownloadDesigns } from "./downloadOriginal";
import { handleGetDesign } from "../../utils/api";
import Typewriter from "typewriter-effect";
import Free from "./free";
import Paid from "./paid";
import { LoaderDiv } from "./style";
import { ColorRing } from "react-loader-spinner";

const Result = () => {
  const { party } = useParams();
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<ResultType | null>(null);
  const [paid, setPaid] = useState(false);

  const [free, setFree] = useState(true);

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

  useEffect(() => {
    const getRealCount = async () => {
      const real_count: any = await getRealVoteCount();
      if (real_count >= 50) {
        setFree(false);
      }
    };
    getRealCount();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      croppedProfilePicture.url !== "" ||
      croppedProfilePicture.url ||
      croppedProfilePicture.name !== "" ||
      croppedProfilePicture.name
        ? (party
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

  useEffect(() => {
    if (result) setLoading(false);
  }, [result]);

  return (
    <>
      {loading && (
        <LoaderDiv>
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
              strings: [
                party === "LP"
                  ? "Designing an Obidient Visual...."
                  : party === "PDP"
                  ? "Designing an Atikulated Visual...."
                  : party === "APC"
                  ? "Designing a Jagabany Visual...."
                  : party === "NNPP"
                  ? "Designing a New Nigerian Visual."
                  : "HSDHASJHJDAHJ",
              ],
              autoStart: true,
              delay: 100,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(3000).start();
            }}
          />
        </LoaderDiv>
      )}
      {free && !loading ? (
        <>
          {party && result && (
            <Free
              party={party}
              loading={loading}
              result={result}
              handleDownloadAll={handleDownloadAll}
            />
          )}
        </>
      ) : (
        <>
          {party && result && (
            <Paid
              party={party}
              loading={loading}
              result={result}
              handleDownloadAll={handleDownloadAll}
              paid={paid}
              setPaid={setPaid}
            />
          )}
        </>
      )}
    </>
  );
};

export default Result;
