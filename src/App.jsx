import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/home";
import { Login } from "./pages/login/loginpage/login";
import { ForgetPassword } from "./pages/login/forgetpassword/forgetPassword";
import { SignIn } from "./pages/signIn/signin";
import { MainPage } from "./pages/main/main";
import { ChoosePlan } from "./pages/chooseplan/choosePlan";
import { PlanForm } from "./pages/planforms/planForm";
import { Payment } from "./pages/payments/payment";
import { SignOutHeader } from "./pages/signoutheader/signoutHeader";
import { RegForm } from "./pages/register/regForm/regForm";
import { NotFound } from "./error/notFound";
import { Registration } from "./pages/register/registration/registration";
import { EmailVerify } from "./pages/register/email-verify/emailVerify";
import { MovieDetailsPage } from "./pages/movieDetails/movieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupnxt" element={<ChoosePlan />} />
          <Route path="/planform" element={<PlanForm />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/LoginHelp" element={<ForgetPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/regform" element={<RegForm />} />
          <Route path="/verifyemail" element={<EmailVerify />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/videos" element={<MainPage />} />
          <Route path="/signOutHeader" element={<SignOutHeader />} />

          {/* New route for movie details */}
          <Route path="/shows/:id" element={<MovieDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
