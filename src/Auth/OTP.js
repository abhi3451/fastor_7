import React, { useState } from "react";
import "../styles/Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken } from "../store/InfoSlice";
import { MdArrowBack } from "react-icons/md";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (otp.length === 6) {
        setLoading(true);
        setErr("");
        const inputData = {
          phone: state.phone,
          dial_code: state.dial_code,
          otp: otp,
        };
        const res = await axios.post(
          "https://staging.fastor.in/v1/pwa/user/login",
          inputData
        );
        if (res.status === 200) {
          const token = res.data.data.token;

          dispatch(addToken({ token: token }));
          localStorage.setItem("token", token);
          navigate("/restaurant");
        } else {
          console.error("Response status is not 200.");
          setErr("Invalid OTP. Please try again.");
        }
      } else {
        setErr("OTP must be 6 digits");
      }
    } catch (err) {
      console.error(err);
      setErr("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOTPInputClick = () => {
    setErr("");
  };

  return (
    <div className="contain">
      <div className="Icon-Contain" onClick={() => navigate("/")}>
        <MdArrowBack />
      </div>

      <header className="head-card">
        <main>
          <p className="para">OTP Verification</p>
          <p className="para2">
            Enter the verification code we just sent on your Mobile Number.
          </p>
          <div className="phn">
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              onClick={handleOTPInputClick}
            />
          </div>
          <div className="err">
            <p>{err}</p>
          </div>
          <div className="btn1">
            <button className="btn" onClick={handleClick} disabled={loading}>
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </main>
      </header>
    </div>
  );
};

export default OTPVerification;
