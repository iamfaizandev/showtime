import { Link, useNavigate } from "react-router-dom";
import "./regform.css";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Alert, Button, CircularProgress } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { SignInHeader } from "../../login/signInHeader/signInHeader";
import { PageFooter } from "../../login/footer/pageFooter";

export function RegForm() {
  let navigate = useNavigate();
  const [userError, setUserError] = useState("");
  const [cookies, setCookie] = useCookies(["Email", "fName", "lName"]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertName, setAlertName] = useState("");
  /// user details State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);

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
      setAlertName("You are Registered. Please verify your email.");
      setShowAlert(true);
      setTimeout(() => {
        navigate("/verifyemail");
      }, 1000);
    } catch (error) {
      console.log("Error", error.message);
      setShowAlert(true);
      setAlertName(error.message);
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
          <div className="regForm-header">
            <span>
              STEP <b>1</b> OF <b>3</b>
            </span>
            <h1>Create a password to start your membership</h1>
          </div>
          <div className="regForm-title">
            <div>Just a few more steps and you're done!</div>
            <span>We hate paperwork, too.</span>
          </div>
          <form className="form" onSubmit={handleRegister}>
            <div className="names-container ">
              <input
                className="form-control me-2  mt w-75"
                type="text"
                placeholder="Enter Your First Name"
                name="fname"
                required
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                className="form-control mt w-75"
                type="text"
                placeholder="Enter Your Last Name"
                name="lname"
                required
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <input
              className="form-control mt"
              type="email"
              placeholder="Enter Your Email Again"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control mt-3"
              type="password"
              placeholder="Enter Your Password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-danger mt-2 mb-2">{userError}</div>

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
