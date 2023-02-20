import React, { FC, useState, useContext, useRef, useEffect } from "react";
import DragAndDropArea from "../DragandDrop";
import Typewriter from "typewriter-effect";
import { PulsateDiv, Container } from "./style";
import NameInput from "../NameInput";

type Props = {
  setUserProfile: React.Dispatch<React.SetStateAction<string | null | File>>;
  party: string;
};
const ProfilePic: FC<Props> = ({ setUserProfile, party }) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <Container>
        <Typewriter
          options={{
            strings: [
              party === "LP"
                ? "Oshey Obidient!"
                : party === "PDP"
                ? "Oshey Atikulated!"
                : party === "APC"
                ? "Oshey JAGABAN!"
                : party === "NNPP"
                ? "Sai Rabi'u!"
                : "",
            ],
            autoStart: true,
            delay: 100,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(3000).start();
          }}
        />
      </Container>
      {!showProfile ? (
        <NameInput setUploadProfile={() => setShowProfile(true)} />
      ) : (
        <PulsateDiv>
          <h2>Import Your Twitter Profile Picture</h2>
          <DragAndDropArea
            setImageFile={(file) => {
              setUserProfile(file);
              setShowProfile(true);
            }}
          />
        </PulsateDiv>
      )}
    </>
  );
};

export default ProfilePic;
