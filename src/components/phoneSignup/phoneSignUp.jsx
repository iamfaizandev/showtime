import { Button } from "@mui/material";
import "./phonesignup.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

export function PhoneSignUp() {
  let navigate = useNavigate();

  function handleFinish() {
    navigate("/signin");
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="signBtn">
          <Button
            variant="contained"
            color="primary"
            className="button"
            name="button"
            onClick={handleFinish}
          >
            <span className="get_started fs-3 fw-bold">Finish Sign Up</span>
            <ArrowForwardIosIcon className="arrowIcon" />
          </Button>
        </div>
      </div>
    </section>
  );
}
