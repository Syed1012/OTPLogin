import React, { useState } from "react";

const Login = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showOtpInput, setshowOtpInput] = useState(false);

  const handlephoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };

  const handlephoneSubmit = (e) => {
    e.preventDefault();

    //Phone validation
    const regex = /[^0-9]/g;
    if (
      phoneNumber.length > 10 ||
      phoneNumber.length < 10 ||
      regex.test(phoneNumber)
    ) {
      alert("Invalid Phone Number");
    }

    //call backend API

    //show OTP Field
    setshowOtpInput("true");
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlephoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlephoneNumber}
            placeholder="Enter Your number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP Sent to your device no. {phoneNumber}.</p>
        </div>
      )}
    </div>
  );
};

export default Login;
