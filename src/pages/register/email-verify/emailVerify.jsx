import { useCookies } from "react-cookie";
import { PageFooter } from "../../login/footer/pageFooter";
import { SignOutHeader } from "../../signoutheader/signoutHeader";
import "./emailverify.css";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase"; // Adjust the path to your firebase configuration
import { useEffect, useState } from "react";

export function EmailVerify() {
  const [cookies] = useCookies(["Email"]);
  let navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState(false);

  useEffect(() => {
    const checkEmailVerified = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Reload user to fetch latest information
        setVerificationStatus(user.emailVerified);
      }
    };

    const interval = setInterval(async () => {
      await checkEmailVerified();
    }, 5000); // Check every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (verificationStatus) {
      navigate("/signin"); // Redirect to sign-in or main page
    }
  }, [verificationStatus, navigate]);

  function onSkipClick(e) {
    navigate("/signupnxt");
  }

  return (
    <div className="emailVerify">
      <SignOutHeader />
      <section className="verify-section">
        <div className="verify-container">
          <div className="verify-logo">
            <div className="roundBorder">
              <VerifiedUserOutlinedIcon />
            </div>
          </div>
          <div className="header">
            <div className="steps">
              STEP <b>2</b> OF <b>4</b>
            </div>
            <h1 className="title">
              Great, now let us verify your <br /> email
            </h1>
          </div>
          <div className="subHeader">
            <span>
              Click the link we sent to <br />
              <b>{cookies["Email"]}</b> to verify.
              <br />
              <br />
              Verifying your email will improve account security and <br />
              help you receive important Netflix communications.
            </span>
          </div>
          <div className="btnContainer">
            <button className="btn btn-secondary fs-4 " onClick={onSkipClick}>
              Skip
            </button>
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  );
}
