import { Link } from "react-router-dom";
import "./signInheader.css";

export function SignInHeader() {
  return (
    <>
      <div className="signIn-header">
        <header>
          <div className="brand-div">
            <Link to="/" className="text-decoration-none">
              <h3>
                {" "}
                <span className="text-success">Show</span>
                <span className="text-danger">Time</span>
              </h3>
            </Link>
          </div>
          <div className="leftText">
            <Link className="textLink" to="/signin">
              SignIn
            </Link>
          </div>
        </header>
      </div>
      <div className="border"></div>
    </>
  );
}
