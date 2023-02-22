import React, { useEffect, useState } from "react";
import { IoMdFingerPrint } from "react-icons/io";
import Parties from "../../components/ChooseParty";
import { handleGetViewCount } from "../../utils/api";
const Party = () => {
  const [votesVerified, setVotesVerified] = useState<null | number>(null);
  const [updateVote, setUpdateVote] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVotesVerified((vote: number | null) => (vote ? (vote += 1) : 20000));
    }, 5000);
  }, [votesVerified]);
  useEffect(() => {
    if (updateVote) {
      // console.log("instant updating");
      handleGetViewCount(setVotesVerified);
      setUpdateVote(false);
    }
  }, [updateVote]);

  useEffect(() => {
    setTimeout(() => {
      setUpdateVote(true);
      // console.log("After 5 mins updating");
    }, 300000);
  }, []);
  return (
    <>
      <div>
        <h1>SUPPORTERS RECORDED</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10px",
        }}
      >
        <IoMdFingerPrint size={"5vw"} color="lightgreen" />
        <h2 style={{ marginLeft: "10px", fontSize: "4vw" }}>
          {votesVerified ? votesVerified.toLocaleString("en-US") : null}
        </h2>
      </div>
      <Parties />
    </>
  );
};

export default Party;
