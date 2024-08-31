import React, { useState } from "react";
import "./paymenttype.css";
import { Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function PaymentType() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handlePayLater = () => {
    navigate("/videos");
  };
  const handlePayment = () => {
    alert(`Selected payment method: ${paymentMethod}`);
  };

  return (
    <div className="payment-option">
      <h1 className="payment-title">Choose your payment method</h1>
      <div className="payment-container">
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <div className="payment-method">
            <FormControlLabel
              value="card"
              control={<Radio />}
              label="Credit or Debit Card"
            />
            <div className="payment-info">
              {paymentMethod === "card" && (
                <div className="card-details">
                  <input
                    type="text"
                    className="form-controll"
                    placeholder="Card Number"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name on Card"
                  />
                  <div className="expiry-cvv">
                    <input
                      type="text"
                      className="form-control me-2"
                      placeholder="Expiry Date (MM/YY)"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="payment-method">
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
            {paymentMethod === "paypal" && (
              <div className="payment-info">
                <Button variant="contained" color="primary">
                  Pay with PayPal
                </Button>
              </div>
            )}
          </div>

          <div className="payment-method">
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            {paymentMethod === "upi" && (
              <div className="payment-info">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter UPI ID"
                />
              </div>
            )}
          </div>
        </RadioGroup>

        <Button
          variant="contained"
          color="error"
          className="pay-now-button"
          onClick={handlePayment}
        >
          Pay Now
        </Button>
        <Button
          variant="contained"
          color="error"
          className="pay-now-button mt-4"
          onClick={handlePayLater}
        >
          Pay Later
        </Button>
      </div>
    </div>
  );
}
