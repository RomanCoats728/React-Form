import Authenticate from "./Componets/Authenticate";
import SignUpForm from "./Componets/SignupForm";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
// } alert("Welcome !!! Please contince by signing up. Be sure to write down your Autherization key. ")
