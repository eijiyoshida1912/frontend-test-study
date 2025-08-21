import React from "react";
import LoginMessage from "./component/LoginMessage/LoginMessage";

const Login = () => {
  return (
    <div>
      <LoginMessage loggedIn={false} />
    </div>
  );
};

export default Login;
