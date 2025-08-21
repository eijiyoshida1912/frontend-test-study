import React, { useState } from "react";

const HelloButton = () => {
  const [message, setMessage] = useState("こんにちは！");
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("こんばんは！")}>押してね</button>
    </div>
  );
};

export default HelloButton;
