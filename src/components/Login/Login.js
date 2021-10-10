import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();
  return (
    <div>
      <h1>This is Login</h1>
      <h3>Welcome {user.displayName}</h3>
      <button onClick={signInUsingGoogle}>Google SignIn</button>
    </div>
  );
};

export default Login;
