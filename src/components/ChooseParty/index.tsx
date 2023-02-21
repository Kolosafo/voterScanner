import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Party } from "./style";
import lp_logo from "../../assets/images/lp-img.png";
import pdp_logo from "../../assets/images/pdp_logo.png";
import apc_logo from "../../assets/images/apc_logo.png";
import nnpp_logo from "../../assets/images/nnpp_logo.png";

import peter_obi from "../../assets/images/peter-obi.png";
import atiku from "../../assets/images/atiku.png";
import tinubu from "../../assets/images/tinubu.png";
import kwankwaso from "../../assets/images/kwankwaso.png";

const Parties = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Party
        onClick={() => {
          navigate("/profile_picture/LP");
        }}
      >
        <img
          src={lp_logo}
          alt=""
          style={{
            width: "20%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white", marginBottom: "10px" }}>Labour Party</h1>
          <h2 style={{ color: "yellow" }}>Peter Obi</h2>
        </div>
        <img
          src={peter_obi}
          alt=""
          style={{
            width: "20%",
          }}
        />
      </Party>
      <Party
        onClick={() => {
          navigate("/profile_picture/APC");
        }}
      >
        <img
          src={apc_logo}
          alt=""
          style={{
            width: "18%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", marginBottom: "-5px" }}>
            {" "}
            All Progressive Congress
          </h1>
          <h2 style={{ color: "yellow" }}>Bola Tinubu</h2>
        </div>
        <img
          src={tinubu}
          alt=""
          style={{
            width: "30%",
          }}
        />
      </Party>
      <Party
        onClick={() => {
          navigate("/profile_picture/PDP");
        }}
      >
        <img
          src={pdp_logo}
          alt=""
          style={{
            width: "20%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", marginBottom: "-5px" }}>
            People's Democratic Party
          </h1>
          <h2 style={{ color: "yellow" }}>Atiku Abubakar</h2>
        </div>
        <img
          src={atiku}
          alt=""
          style={{
            width: "20%",
          }}
        />
      </Party>
      <Party
        onClick={() => {
          navigate("/profile_picture/NNPP");
        }}
      >
        <img
          src={nnpp_logo}
          alt=""
          style={{
            width: "20%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", marginBottom: "-5px" }}>
            New Nigeria People's Party
          </h1>
          <h2 style={{ color: "yellow" }}>Rabi'u Kwankwaso</h2>
        </div>
        <img
          src={kwankwaso}
          alt=""
          style={{
            width: "25%",
          }}
        />
      </Party>
    </Container>
  );
};

export default Parties;
