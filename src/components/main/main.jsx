import useWindowResize from "../../hooks/useWindowResize";
import { PhoneSignUp } from "../phoneSignup/phoneSignUp";
import { Register } from "../register/register";
import { Welcome } from "../welcome/welcome";
import "./main.css";

export function Main() {
  const { width } = useWindowResize();

  return (
    <main className="register_component ">
      <div className="container-fluid">
        <div className="main-title">
          <div className="h1 Unlimited-text">
            {width > 600 ? "" : <Welcome />}
            Unlimited movies,TV shows and more
          </div>
          <div className="small-text ">
            Check and Cancel anywhere , anytime.
          </div>
        </div>
        {width > 600 ? <Register /> : <PhoneSignUp />}
      </div>
    </main>
  );
}
