import React, { useEffect } from "react";
import userManager from "utils/oidc";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import authState from "state/auth";

const Login = () => {
  const [auth, setAuth] = useRecoilState(authState);
  useEffect(() => {
    const getUser = async () => {
      userManager.getUser().then((user) => {
        if (user) {
          console.log(user);
          setAuth(user);
        } else {
          userManager
            .signinRedirectCallback()
            .then((user) => setAuth(user))
            .catch((err) => console.log(err));
        }
      });
    };
    if (!auth) {
      getUser();
    }
  }, [auth, setAuth]);

  const signInWithRedirect = () => {
    userManager.signinRedirect();
  };

  if (auth) {
    return <Redirect to="/" />;
  }
  return <button onClick={signInWithRedirect}>Klikk</button>;
};

export default Login;
