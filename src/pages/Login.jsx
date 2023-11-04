import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/api-token-auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, email, password }),
    });

    if (response.ok) {
      // Handle successful login
      const data = await response.json();
      // Store the access token in a secure manner (e.g., in local storage or a cookie)
      localStorage.setItem("ost_user", JSON.stringify(data));
      // Redirect or update the UI as needed
    } else {
      // Handle login failure (e.g., display error message)
      const errorData = await response.json();
      console.error(errorData);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
