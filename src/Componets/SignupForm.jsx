import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  <input value={username} onChange={(e) => setUsername(e.target.value)} />;
  async function handleSubmit(event) {
    preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      console.log(result);
      setToken(result.Token);
    } catch (err) {
      setError(error.message);
    }
  }
  return (
    <div className="Signup-Form">
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="Uswername" />
        </label>
        <label>
          Password:
          <input type="password" name="Password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
console.log(SignUpForm);
