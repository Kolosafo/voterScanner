import React, {FC, useState} from 'react'
import { IoMdArrowBack } from 'react-icons/io';
import { ColorRing } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { croppedProfilePicture } from '../ProfilePicture';
import { LoaderDiv } from './style';
import Typewriter from "typewriter-effect";
import { ResultType, updateRealVoteCount } from '../../utils/api';
import Loading from '../../components/Loading';
import Payment from '../../components/Payment';


type Props = {
    party: string;
    loading: boolean;
    result: ResultType;
    handleDownloadAll: () => void;
    paid: boolean
    setPaid: React.Dispatch<React.SetStateAction<boolean>>;
  };
const Paid: FC<Props> = ({party, loading, result, handleDownloadAll, paid, setPaid}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
      }

      const [isModalOpen, setModalOpen] = useState(false);

      const toggleModal = () => {
        setModalOpen((wasModalVisible) => !wasModalVisible);
      };
  const navigate = useNavigate();
  const buttonStyle = {
    width: "200px",
    height: "40px",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    backgroundColor: "#ff0000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const isMobile = width <= 768;
  const priceStyle = {
    fontSize: "3vw",
  };
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
              <h3 style={priceStyle}>N250</h3>
              <h3
                style={{
                  opacity: "0.3",
                  textDecoration: "line-through",
                  marginLeft: "20px",
                  fontSize: "3vw",
                }}
              >
                N1000
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
              <h3 style={priceStyle}>N250</h3>
              <h3
                style={{
                  opacity: "0.3",
                  textDecoration: "line-through",
                  marginLeft: "20px",
                  fontSize: "3vw",
                }}
              >
                N1000
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
          {!paid ? (
            <h2 style={{ color: "cyan", fontSize: "3vw" }}>N1,000</h2>
          ) : (
            <h2 style={{ color: "cyan", fontSize: "3vw" }}>N0</h2>
          )}

          {!paid ? (
            <>
              <button style={buttonStyle} onClick={() => toggleModal()}>
                Download Original
              </button>
              <Payment
                isModalVisible={isModalOpen}
                onBackdropClick={toggleModal}
                handleDownloadAll={handleDownloadAll}
                setPaid={setPaid}
              />
            </>
          ) : (
            <button style={buttonStyle} onClick={() => {
                handleDownloadAll()
                updateRealVoteCount()
                }}>
              Free Download All
            </button>
          )}

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
  </div>
  )
}

export default Paid