import { PageFooter } from "../../login/footer/pageFooter";
import { SignInHeader } from "../../login/signInHeader/signInHeader";
import "./registration.css";
import Devcie from "../../../assets/Devices.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function Registration() {
  let navigate = useNavigate();

  function handleRegNextClick() {
    navigate("/regform");
  }

  return (
    <div className="register_page">
      <div className="register-header">
        <SignInHeader />
      </div>
      <section className="register_page-section">
        <div className="bg">
          <img src={Devcie} alt="" />
        </div>
        <div className="section-header">
          <div className="steps">
            STEP <b>1</b> OF <b>3</b>
          </div>
          <div className="title">
            <h2>Finish setting up your account</h2>
          </div>
        </div>
        <main className="register-main">
          <div className="small">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </div>
        </main>
        <Button
          variant="contained"
          color="error"
          className="Next w-25 mt-4 p-2"
          onClick={handleRegNextClick}
        >
          <span className="fs-4"> Next</span>
        </Button>
      </section>
      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}
