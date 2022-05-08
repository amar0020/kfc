import { Form2 } from "./Form";
import "./Login.css";

export default function Login() {
  return (
    <div className="Akfc">
      <div className="Asign"> signin/signup</div>
      <img
        src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/KFC_logo.svg"
        alt="new"
        className="Aimgk"
      />
      <div className="Ahead">
        LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
      </div>
      <Form2 />
    </div>
  );
}