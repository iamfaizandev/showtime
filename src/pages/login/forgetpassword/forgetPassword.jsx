import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./forgetpassword.css";
import { useState } from "react";
import { PageFooter } from "../footer/pageFooter";
import { SignInHeader } from "../signInHeader/signInHeader";
import { auth } from "../../../firebase"; // Adjust the import path if needed
import { sendPasswordResetEmail } from "firebase/auth";

export function ForgetPassword() {
  const [emailStyle, setEmailStyle] = useState({ display: "block" });
  const [numberStyle, setNumberStyle] = useState({ display: "none" });
  const [buttonText, setButtonText] = useState("Email Me");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function smsRadioChange(e) {
    if (e.target.value === "sms") {
      setNumberStyle({ display: "block" });
      setEmailStyle({ display: "none" });
      setButtonText("Text Me");
    }
  }

  function emailChange(e) {
    if (e.target.value === "email") {
      setNumberStyle({ display: "none" });
      setEmailStyle({ display: "block" });
      setButtonText("Email Me");
    }
  }

  const handleResetPassword = async () => {
    if (buttonText === "Email Me") {
      try {
        await sendPasswordResetEmail(auth, email);
        setSuccessMessage(
          "Password reset email sent! Please check your inbox."
        );
        setError("");
      } catch (error) {
        setError("Error sending password reset email: " + error.message);
        setSuccessMessage("");
      }
    } else if (buttonText === "Text Me") {
      // Implement SMS functionality if using Firebase or another SMS service
      setError("SMS functionality is not implemented yet.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="forgetPage">
        <div className="header">
          <SignInHeader />
        </div>
        <div className="section">
          <div className="card">
            <div className="h3">Forgot Email/Password</div>
            <div className="cardBody">
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  className="mt-2 mb-2"
                >
                  How would you like to reset your password?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="email"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="email"
                    control={<Radio />}
                    label="Email"
                    onChange={emailChange}
                  />
                  <FormControlLabel
                    value="sms"
                    control={<Radio />}
                    label="Text Message (SMS)"
                    onChange={smsRadioChange}
                  />
                </RadioGroup>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  className="mt-4 inputLabel"
                >
                  We will send you an email with instructions on how to reset
                  your password.
                </FormLabel>
                <input
                  style={emailStyle}
                  type="email"
                  placeholder="name@example.com"
                  className="form-control w-100 mt-2 mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  style={numberStyle}
                  className="form-control w-100 mt-2 mb-2"
                  placeholder="enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="Next mt-2"
                  onClick={handleResetPassword}
                >
                  <span className="text fs-4">{buttonText}</span>
                </Button>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
              </FormControl>
            </div>
            {/* <div className="cardFooter mt-3">
              <Link>I can't remember my email address or phone number.</Link>
            </div> */}
          </div>
          {/* <div className="text-center text-white mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </div> */}
        </div>
      </div>
    </>
  );
}
