import React, { useState, ChangeEvent } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Form, SupportContainer } from "./style";
import { contactUs } from "../../utils/api";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await contactUs(name, message, setSuccess);
    setSuccess(true);
    setLoading(false);
  };

  return (
    <SupportContainer>
      <h3>Send Us A Message</h3>
      <Form
        action="#"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        {!success ? (
          <>
            <label style={{ flexBasis: "unset" }} htmlFor="email">
              Name
            </label>
            <input
              type="text"
              name="email"
              style={{ height: "40px", padding: "5px" }}
              value={name}
              onChange={onNameChangeHandler}
            />
            <label
              htmlFor="message"
              style={{ flexBasis: "unset", marginTop: "10px" }}
            >
              Message
            </label>
            <textarea
              name="message"
              id=""
              cols={50}
              rows={15}
              style={{ padding: "10px", margin: "20px 0px" }}
              onChange={onMessageChangeHandler}
              value={message}
            />
            <button
              style={{
                width: "70%",
                alignSelf: "center",
                backgroundColor: "darkslategray",
                color: "whitesmoke",
              }}
              onClick={(e) => handleSend(e)}
            >
              Submit
            </button>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>SUCCESS! THANKS FOR YOUR FEEDBACK!</span>
            <BsCheckCircle size={"200px"} color={"green"} />
            <a
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setSuccess(false)}
            >
              Post another feedback
            </a>
          </div>
        )}
      </Form>

      <span style={{ textAlign: "center", color: "#A0A0A0", fontSize: "12px" }}>
        Contact Us Directly - 
        <a
          style={{ fontWeight: "700", margin: "0px 5px" }}
          target="_blank"
          href="mailto:kolosafo@gmail.com"
          rel="noreferrer"
        >
          Mail
        </a>
      </span>
    </SupportContainer>
  );
};

export default ContactUs;
