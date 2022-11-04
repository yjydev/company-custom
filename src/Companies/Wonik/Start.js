import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
// import {useHistory} from 'react-router';
import * as types from '../../types';
function Start(props) {
  const {companyName} = props;

  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const isLogOut = params.get('logout');

  React.useEffect(() => {
    window.addEventListener('message', handlePostMessage, false);
    handleLogout();
  }, []);

  // React.useEffect(() => {
  //   if (isLogOut) {
  //     localStorage.removeItem(types.TOKEN);
  //     localStorage.removeItem(types.REFRESH_TOKEN);
  //     navigate('/wonik', {replace: true});
  //   } else {
  //     if (localStorage.getItem(types.TOKEN)) {
  //       window.location.href = `${process.env.REACT_APP_TARGET_SERVER}`;
  //     }
  //   }
  // }, [isLogOut]);

  const handleLogout = () => {
    if (isLogOut) {
      localStorage.removeItem(types.TOKEN);
      localStorage.removeItem(types.REFRESH_TOKEN);
      navigate('/wonik', {replace: true});
    } else {
      if (localStorage.getItem(types.TOKEN)) {
        window.location.href = `${process.env.REACT_APP_TARGET_SERVER}`;
      }
    }
  };

  const handlePostMessage = (e) => {
    if (e.origin === process.env.REACT_APP_TARGET_SERVER && e.data) {
      const {token, refresh_token} = e.data;

      localStorage.setItem(types.TOKEN, token);
      localStorage.setItem(types.REFRESH_TOKEN, refresh_token);
    }
  };

  const handleSubmit = () => {
    window.location.href = `${process.env.REACT_APP_TARGET_SERVER}/signin?company_id=${types.COMPANY_LIST[companyName]}`;
  };

  return (
    <>
      <h1>{companyName}</h1>
      <div>
        <button onClick={handleSubmit}>Sign In</button>
      </div>
    </>
  );
}

export default Start;
