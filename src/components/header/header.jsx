import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signIn");
  };

  return (
    <div className="container-fluid">
      <header className="header">
        <div className="brand-div">
          <h3 className="brand-logo">
            <span className="text-success">Show</span>
            <span className="text-danger">Time</span>
          </h3>
          {/* <img src={NetflixLogo} alt="Netflix Logo" className="brand-logo" /> */}
        </div>
        <div className="">
          <Button variant="primary" onClick={handleSignIn}>
            Sign In
          </Button>
        </div>
      </header>
    </div>
  );
};
