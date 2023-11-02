import React, { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dial_code = "+91";
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (phone.length === 10) {
        setLoading(true);
        const inputData = { dial_code, phone: parseInt(phone) };

        const res = await axios.post(
          "https://staging.fastor.in/v1/pwa/user/register",
          inputData
        );

        if (res.status === 200) {
          navigate("/otp", { state: { phone: parseInt(phone), dial_code } });
          toast.success("Registration successful!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      } else {
        setErr("Number must be 10 digits");
      }
    } catch (err) {
      console.error(err);
      setErr("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputClick = () => {
    setErr("");
  };

  return (
    <div className="contain">
      <ToastContainer />
      <header className="head-card">
        <main>
          <p className="para">Enter Your Mobile Number</p>
          <p className="para2">We will send you a 6-digit verification code</p>
          <div className="phn">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onClick={handleInputClick}
            />
          </div>
          <div className="err">
            <p>{err}</p>
          </div>
          <div className="btn1">
            <button className="btn" onClick={handleClick} disabled={loading}>
              {loading ? "Sending..." : "Send Code"}
            </button>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Register;
