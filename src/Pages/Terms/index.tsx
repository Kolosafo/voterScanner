import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <div className="inner-container">
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "15px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/party`);
          }}
        >
          <IoMdArrowBack size={45} />
        </div>
        {/* <button onClick={() => toggleErrorModal()}>Toggle Show</button> */}
        <h1 style={{ fontSize: "24px" }}>Terms Of Service</h1>
        <span style={{ fontSize: "16px" }}>
          By accessing or using this website, you agree to be bound by these
          Terms of Use. If you do not agree to these terms, please do not use
          this website. Ownership and Intellectual Property Rights This website
          and all of its content, including but not limited to text, graphics,
          logos, images, software, and design, are the property of Visual
          Splendor and are protected by applicable intellectual property laws.
          You may not use any of the content on this website for commercial
          purposes without our prior written permission. Disclaimer of
          Warranties This website is provided on an "as is" and "as available"
          basis, without warranties of any kind, either express or implied. We
          do not warrant that the website will be uninterrupted or error-free,
          nor do we make any warranties as to the accuracy, completeness, or
          reliability of any information, content, services, or products offered
          through this website. Limitation of Liability In no event shall Visual
          Splendor be liable for any direct, indirect, incidental, special, or
          consequential damages arising out of or in connection with your use of
          this website, even if we have been advised of the possibility of such
          damages. User Conduct By using this website, you agree not to: Use the
          website for any unlawful purpose Impersonate any person or entity
          Harass, intimidate, or threaten any person or entity Upload or
          transmit any content that is defamatory, obscene, or offensive
          Interfere with the proper functioning of the website or its servers
          Attempt to gain unauthorized access to the website or any of its
          services <h5>Privacy Policy</h5> We do not save any of your data. We
          only use the picture of your thumbs to check for marks on your thumb
          nail as a sign that you have voted. We do not save or store any
          picture uploaded for this purpose, Neither do we guarantee the
          accuracy of the scan. The purpose of this website is not to verify
          user votes but only to generate Profile Picture, Banner and Post
          Designs for users. We do not share your data with any third parties.
          Governing Law These Terms of Use shall be governed by and construed in
          accordance with the laws of the Supreme Court Of Nigeria, Abuja,
          without giving effect to any principles of conflicts of law. Any legal
          action arising out of or in connection with these Terms of Use or this
          website shall be brought exclusively in the Supreme Court Of Nigeria,
          Abuja. Changes to Terms of Use We reserve the right to modify these
          Terms of Use at any time, without prior notice. Your continued use of
          this website after any such changes constitutes your acceptance of the
          new Terms of Use. Contact Information If you have any questions or
          concerns about these Terms of Use. <h5>Refund Policy</h5> At Visual
          Splendor, we offer no refunds for our generated images and all refund
          requests will be rejected in compliance to this policy.
          <Link to="/">
            <h5 style={{ color: "red" }}>Contact Us</h5>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
