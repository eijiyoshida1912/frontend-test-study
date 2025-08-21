import React from "react";

const LoginMessage = ({ loggedIn }) => {
  return (
    <div>{loggedIn ? <p>ようこそ！</p> : <p>ログインしてください</p>}</div>
  );
};

export default LoginMessage;
