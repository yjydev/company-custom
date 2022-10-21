import React from "react";

function Start(props) {
  const handleEmail = () => {};
  const handlePassword = () => {};
  const handleSubmit = () => {};

  return (
    <div>
      <input type="text" onChange={handleEmail} />
      <input type="password" onChange={handlePassword} />
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
}

export default Start;
