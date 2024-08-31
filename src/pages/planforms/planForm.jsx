import { useNavigate } from "react-router-dom";
import "./planform.css";
import PlansList from "./planList";
import Button from "@mui/material/Button";
import { SignOutHeader } from "../signoutheader/signoutHeader";
import { PageFooter } from "../login/footer/pageFooter";
import { useCookies } from "react-cookie";
import { useState } from "react";
export function PlanForm() {
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["Email"]);
  function NextClick() {
    navigate("/payments");
  }

  return (
    <div className="plan_page">
      <SignOutHeader />
      <section>
        <div className="section-header">
          <div className="pageNo">
            STEP <span className="no">1</span> OF <span className="no">3</span>
          </div>
          <div className="section-title">
            <h3>Choose the plan that’s right for you</h3>
          </div>
        </div>
        <main>
          <PlansList />
        </main>
        <div className="section-footer mt-4">
          <div className="para">
            <p>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our Terms of Use for
              more details. Only people who live with you may use your account.
              Watch on 4 different devices at the same time with Premium, 2 with
              Standard, and 1 with Basic and Mobile.
            </p>
          </div>
          <div className="NextBtn">
            <Button
              onClick={NextClick}
              type="submit"
              variant="contained"
              color="error"
              fullWidth
            >
              <span className="text fs-4">Next</span>
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
