import { ChangeEvent, FC, useState, useContext, useRef } from "react";
import { DesktopModalContainer, Header } from "../modal/styles";
import Modal from "../modal/Modal";
import AvatarEditor from "react-avatar-editor";
import { ImCancelCircle } from "react-icons/im";

type Props = {
  isModalVisible: boolean;
  setCroppedUserProfile: React.Dispatch<React.SetStateAction<string | null>>;
  userProfileToCrop: File | string;
  onBackdropClick: () => void;
  setUserProfilePic: React.Dispatch<React.SetStateAction<string | File | null>>;
};

const AdjustProfile: FC<Props> = ({
  onBackdropClick,
  isModalVisible,
  setCroppedUserProfile,
  userProfileToCrop,
  setUserProfilePic,
}) => {
  if (!isModalVisible) {
    return null;
  }
  const editor = useRef(null);

  const handleCropPfileUrl = (img_url: string) =>
    setCroppedUserProfile(img_url);

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            onBackdropClick();
            setUserProfilePic(null);
          }}
        >
          <ImCancelCircle size={"25px"} />
        </div>
        <h4>Adjust Image</h4>
        <AvatarEditor
          width={300}
          height={300}
          image={userProfileToCrop}
          ref={editor}
        />
        <button
          style={{ margin: "10px 0px" }}
          onClick={() => {
            if (editor) {
              //   const canvas = editor.current.getImage()
              const canvasScaled = editor.current.getImage().toDataURL() 
              handleCropPfileUrl(canvasScaled);
            }
            onBackdropClick();
          }}
        >
          Continue
        </button>
      </DesktopModalContainer>
    </Modal>
  );
};
export default AdjustProfile;
