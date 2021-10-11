import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/home";
  const handleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirectUrl);
    });
  };
  return (
    <div>
      <h1>This is Login</h1>
      <h3>Welcome {user.displayName}</h3>
      <button onClick={handleLogin}>Google SignIn</button>
    </div>
  );
};

export default Login;
