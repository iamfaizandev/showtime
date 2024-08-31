import "./payment.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SignOutHeader } from "../signoutheader/signoutHeader";
import { Button, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { PaymentType } from "./paymenttype/paymenttype";

// Load your Stripe public key

export function Payment() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function handleMainPageBtn() {
    navigate("/videos");
  }

  return (
    <div className="payment_page">
      <SignOutHeader />
      <section>
        <div className="section-header">
          <div className="lock">
            <LockOutlinedIcon
              color="error"
              fontSize="large"
              style={{ display: "block", margin: "auto" }}
            />
          </div>
          <div className="pageNo text-center">
            STEP <span className="no">3</span> OF <span className="no">3</span>
          </div>
          <div className="section-title text-center">
            <h3>Choose how to pay</h3>
            <p>
              Your payment is encrypted and you can change your payment method
              at any time.
            </p>
          </div>
        </div>
        <main className="paymentOptions">
          <h3>Secure for peace of mind. Cancel easily online.</h3>
          <PaymentType />
          <form onSubmit={handleMainPageBtn}>
            <Box mb={2}></Box>
            {/* <Button
              fullWidth
              variant="contained"
              color="error"
              type="submit"
              className="Next mt-2 p-2"
            >
              <span className="fs-4">Submit Payment</span>
            </Button> */}
          </form>
        </main>
      </section>
    </div>
  );
}
