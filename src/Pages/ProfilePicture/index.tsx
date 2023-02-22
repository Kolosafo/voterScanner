import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePic from "../../components/ProfileImg";
import { useNavigate } from "react-router-dom";
import AdjustProfile from "../../components/AdjustImg";
import { IoMdArrowBack } from "react-icons/io";

const croppedProfilePicture: {
  url: string;
  name: string;
} = {
  url: "", //THIS IS A BLOB URL FOR SHOWING
  name: "",
};
const ProfilePicture = () => {
  const { party } = useParams();
  const navigate = useNavigate();
  const [reloadOnShow, setReloadOnShow] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [runNavigate, setRunNavigate] = useState(false);
  const [croppedUserProfile, setCroppedUserProfile] = useState<string | null>(
    null
  );
  const [userProfile, setUserProfile] = useState<string | null | File>(null);
  const toggleModal = () => {
    setModalOpen((wasModalVisible) => !wasModalVisible);
  };

  useEffect(() => {
    croppedUserProfile
      ? (croppedProfilePicture.url = croppedUserProfile)
      : null;
    croppedProfilePicture.url !== "" ||
    croppedProfilePicture.url ||
    croppedProfilePicture.name !== "" ||
    croppedProfilePicture.name
      ? navigate(`/result/${party}`)
      : null;
  }, [croppedUserProfile, croppedProfilePicture.url]);
  useEffect(() => {
    userProfile ? toggleModal() : null;
  }, [userProfile]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "15px",
          cursor: "pointer",
        }}
        onClick={() => {
          croppedProfilePicture.url = "";
          navigate(`/`);
        }}
      >
        <IoMdArrowBack size={45} />
      </div>
      {party && <ProfilePic party={party} setUserProfile={setUserProfile} />}
      {userProfile && (
        <AdjustProfile
          isModalVisible={isModalOpen}
          onBackdropClick={toggleModal}
          setCroppedUserProfile={setCroppedUserProfile}
          userProfileToCrop={userProfile}
          setUserProfilePic={setUserProfile}
        />
      )}
    </>
  );
};

export { croppedProfilePicture };
export default ProfilePicture;
