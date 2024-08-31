import { useNavigate } from "react-router-dom";
import "./chooseplan.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { SignOutHeader } from "../signoutheader/signoutHeader";
import { PageFooter } from "../login/footer/pageFooter";
import { useState } from "react";
export function ChoosePlan() {
  let navigate = useNavigate();
  const [charToRemove] = useState(10);
  const [cookies, setCookie, removeCookie] = useCookies(["Email"]);
  const [Email] = useState(`${cookies["Email"]}`);
  function handleNextClick() {
    setCookie("Email", Email);
    navigate("/planform");
  }

  return (
    <div className="Choose-plan_page">
      <SignOutHeader />

      <section>
        <div className="section-container">
          <div className="checkmarkLogo mb-4">
            <span className="checkmark ">
              <CheckCircleOutlineIcon color="error" className="checkIcon" />
            </span>
          </div>
          <div className="section-header">
            <div className="steps mb-4">
              <span className="pageno ">
                STEP <b>2</b> OF <b>3</b>
              </span>
              <h1>Choose your plan.</h1>
            </div>
          </div>
          <div className="section-body mt-2">
            <ul className="checkmark-group">
              <li className="checkmark-list">
                <DoneIcon
                  color="error"
                  className="checkIcons"
                  fontSize="large"
                />
                <span className="checkmark-text">
                  No commitments, cancel anytime.
                </span>
              </li>
              <li className="checkmark-list">
                <DoneIcon
                  color="error"
                  className="checkIcons"
                  fontSize="large"
                />
                <span className="checkmark-text">
                  Everything on Netflix for one low price.
                </span>
              </li>
              <li className="checkmark-list">
                <DoneIcon
                  color="error"
                  className="checkIcons"
                  fontSize="large"
                />
                <span className="checkmark-text">
                  No ads and no extra fees. Ever.
                </span>
              </li>
            </ul>
            <Button
              fullWidth
              variant="contained"
              color="error"
              className="Next mt-2 p-2"
              onClick={handleNextClick}
            >
              <span className="fs-4"> Next</span>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}
