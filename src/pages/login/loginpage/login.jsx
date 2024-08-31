import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Alert, Button } from "@mui/material";
import { PageFooter } from "../footer/pageFooter";
import { SignInHeader } from "../signInHeader/signInHeader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";

export function Login() {
  let navigate = useNavigate();
  const [userError, setUserError] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertName, setAlertName] = useState("");
  /// user details State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cookies, setCookie] = useCookies(["Email", "fName", "lName"]);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      setCookie("Email", email);
      setCookie("fName", fname);
      setCookie("lName", lname);
      setAlertName("You are Registered");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (error) {
      console.log("Error", error.message);
      setAlertName(error.message);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  };

  return (
    <div className="login_page">
      <SignInHeader className="headerInLogin" />
      <div className="alert-container">
        {showAlert && (
          <Alert className="alert  m-3" severity="success">
            {alertName}
          </Alert>
        )}
      </div>
      <section className="login-section">
        <div className="section-body">
          <div className="login-header">
            <div className="steps">
              STEP <b>1</b> OF <b>3</b>
            </div>
            <div className="title">
              <h1>Welcome back! Joining Netflix is easy.</h1>
            </div>
          </div>
          <form className="form" onSubmit={handleRegister}>
            <div className="form-header">
              Enter your password and you'll be watching in no time.
            </div>
            <div className="names-container ">
              <input
                className="form-control me-2  mt w-75"
                type="text"
                placeholder="First Name"
                name="fname"
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                className="form-control mt w-75"
                type="text"
                placeholder=" Last Name"
                name="lname"
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <input
              className="form-control mt"
              type="email"
              placeholder="Enter Your Email Again"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control mt-3"
              type="password"
              placeholder="Enter Your Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-danger mt-2 mb-2">{userError}</div>
            <div className="link">
              <Link className="link_text">Forgot Your Password?</Link>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="error"
              className="Next mt-4"
              fullWidth
            >
              <span className="text fs-4">Next</span>
            </Button>
          </form>
        </div>
      </section>
      <footer>
        <PageFooter />
      </footer>
    </div>
  );
}
