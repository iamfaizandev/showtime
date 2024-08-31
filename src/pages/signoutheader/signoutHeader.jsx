import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../../assets/oneflix-.png";
import "./signoutheader.css";
import { useCookies } from "react-cookie";

export function SignOutHeader() {
  let navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([
    "Email",
    "userPassword",
    "fName",
    "lName",
  ]);
  function onsignOutclick() {
    removeCookie("Email");
    removeCookie("lName");
    removeCookie("fName");
    navigate("/");
  }
  return (
    <div className="signout-header">
      <header>
        <div className="brand-div">
          <Link to="/">
            <img src={brandLogo} alt="" />
          </Link>
        </div>
        <div className="leftText">
          <button className="btn btn-text " onClick={onsignOutclick}>
            <span className="leftText">SignOut</span>
          </button>
        </div>
      </header>
      <div className="border"></div>
    </div>
  );
}
