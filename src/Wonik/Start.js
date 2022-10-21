import axios from "axios";
import React from "react";

const MENU = "__ZINNOHUB_MENU__";
const TOKEN = "__ZINNOHUB_TOKEN__";
const REFRESH_TOKEN = "__ZINNOHUB_REFRESHTOKEN__";

function Start(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    const formData = {
      email: email.toLowerCase().trim(),
      password: password.trim(),
      module_name: "zinnoHUB",
      // ip_address: ipAddress.data,
      mac_address: null,
    };

    const request = await axios.put(
      "http://localhost:3000/api/login_v2",
      formData
    );

    const { is_success, message, token, refresh_token, feature_list } =
      request.data;

    if (is_success) {
      setToken(token);
      setRefreshToken(refresh_token);
      setMenu(feature_list);

      window.location.href = "http://localhost:3000";
    }
  };

  const setToken = (value) => {
    let settingValue;

    if (value) {
      settingValue = value;
    } else {
      settingValue = "";
    }

    localStorage.setItem(TOKEN, settingValue);
  };

  const setRefreshToken = (token) => {
    let settingValue;

    if (token) {
      settingValue = token;
    } else {
      settingValue = "";
    }

    localStorage.setItem(REFRESH_TOKEN, settingValue);
  };

  const setMenu = (value) => {
    let settingValue;

    if (value) {
      settingValue = JSON.stringify(value);
    } else {
      settingValue = "";
    }

    localStorage.setItem(MENU, settingValue);
  };

  return (
    <div>
      <input type="text" value={email} onChange={handleEmail} />
      <input type="password" value={password} onChange={handlePassword} />
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
}

export default Start;
