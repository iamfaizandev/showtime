import { Alert, Button, TextField } from "@mui/material";
import NetflixLogo from "../../assets/oneflix-.png";
import "./signin.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function SignIn() {
  const inputFocusClass = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [alertClass, setAlertClass] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlertName("User Logged ");
      setShowAlert(true);
      setAlertClass("success");
      setTimeout(() => {
        navigate("/signupnxt");
      });
    } catch (error) {
      setShowAlert(true);
      setAlertName(error.message);
      setAlertClass("error");
    }
  };

  return (
    <div className="signIn-Page">
      <div className="bg-shade">
        <div className="signIn-top ">
          <div className="brand-div ">
            <h3>
              <Link to="/" className="text-decoration-none mt-4">
                <span className="text-success ">Show</span>
                <span className="text-danger">Time</span>
              </Link>
            </h3>
            {/* <img src={NetflixLogo} alt="showtime" /> */}
          </div>
        </div>
        <div className="alert-container">
          {showAlert && (
            <Alert className="alert m-3" severity={alertClass}>
              {alertName}
            </Alert>
          )}
        </div>
        <div className="card">
          <div className="card-title">
            <h3>Sign In</h3>
          </div>
          <form action="" className="signin-form " onSubmit={handleSignIn}>
            <div>
              <input
                style={inputFocusClass}
                className="form-control "
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                style={inputFocusClass}
                className="form-control "
                type="password"
                placeholder="Enter Your Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              className="signIn-btn"
              variant="contained"
              type="submit"
              color="error"
              fullWidth
            >
              Sign In
            </Button>
            {/* <div className="text-white text-center mt-4 mb-4">OR</div>
            <Button
              className=" text-white code-bg"
              type="submit"
              color="error"
              fullWidth
              onClick={handleCodeOtp}
            >
              Use a sign-in code
            </Button> */}
            <div className="forgotPassword">
              <Link className="forgotPassword h6 text-decoration-none text-white mt-2 mb-2">
                Forgot password?
              </Link>
            </div>
            <div className="newreg h6">
              <span style={{ color: "grey" }}>New to ShowTime? </span>
              <Link to="/login" className="text-white">
                Register Now
              </Link>
              .
            </div>

            <div className="form-footer"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
