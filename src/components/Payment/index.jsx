import React, { useState } from "react";
import { InterswitchPay } from "react-interswitch";

const Payment = () => {
  const [amount, setAmount] = useState(500);
  const [email, setEmail] = useState("daudakolo16@gmail.com");

  const paymentParameters = {
    merchantCode: "MX81866",
    payItemID: "Default_Payable_MX81866",
    customerEmail: "johndoe@gmail.com",
    redirectURL: "http://127.0.0.1:5173/",
    text: "Pay Now",
    mode: "LIVE",
    transactionReference: Date.now().toString(),
    amount: "100000",
    style: {
      width: "200px",
      height: "40px",
      border: "none",
      color: "#fff",
      backgroundColor: "#ff0000",
    },
    callback: (response) => {
      console.log("response: ", response);
    },
  };
  return <InterswitchPay {...paymentParameters} />;
};

export default Payment;
