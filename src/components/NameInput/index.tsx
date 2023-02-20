import React, { useState, useRef, FC } from "react";
import { Input, LoginBtn, marginAdd } from "./style";
import { croppedProfilePicture } from "../../Pages/ProfilePicture";

type Props = {
  setUploadProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const NameInput: FC<Props> = ({ setUploadProfile }) => {
  const [firstName, setFirstName] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lastName, setLastName] = useState("");
  const form = useRef<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!firstName || firstName === "" || !lastName || lastName === "") {
      setErrorMsg("Please Fill the form to continue!");
    } else {
      croppedProfilePicture.name = `${firstName} ${lastName}`;
      setUploadProfile(true);
    }
  };
  return (
    <div style={{ marginTop: "70px", fontSize: "2vw" }}>
      <h4>Enter Your Name</h4>
      {errorMsg && (
        <span style={{ fontSize: "12px", color: "red" }}> {errorMsg}</span>
      )}
      <form
        action="#"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={form}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          style={marginAdd}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          onClick={() => setErrorMsg(null)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          style={marginAdd}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          onClick={() => setErrorMsg(null)}
        />
        <LoginBtn type="submit" style={{ marginBottom: "5px" }}>
          Continue
        </LoginBtn>
      </form>
    </div>
  );
};

export default NameInput;
