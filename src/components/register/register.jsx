import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./register.css";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../firebase";

export function Register() {
  const inputFocusClass = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
  };
  const [btnText, setBtnText] = useState("Get Started");
  const [cookies, setCookie] = useCookies(["Email"]);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset the error state

    try {
      setBtnText(<CircularProgress size="20px" className="mt-2" />);

      // Check if the email is already registered
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      setCookie("Email", email);
      if (signInMethods.length > 0) {
        // Email is already registered, navigate to the login page
        setTimeout(() => {
          navigate("/registration");
        }, 1000);
      } else {
        // Email is not registered, navigate to the registration page
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (error) {
      // Handle any errors that occur
      setError("Something went wrong. Please try again.");
      console.log("Error:", error.message);
    } finally {
      // Revert the button text back to "Get Started"
      setBtnText("Get Started");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-fluid">
        <div className="ready_text text-center">
          Ready to watch? Enter your email to create or restart your account.
        </div>
        <div id="register_group" className="input-group">
          <input
            style={inputFocusClass}
            type="email"
            className="form-control bg-dark-shade text-white"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className="ms-2"
          >
            <span className="get_started">{btnText}</span>
            <ArrowForwardIosIcon />
          </Button>
        </div>
        {error && <div className="error-message text-danger mt-2">{error}</div>}
      </div>
    </form>
  );
}
