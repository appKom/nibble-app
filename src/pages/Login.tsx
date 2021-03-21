import userManager from "utils/oidc";
import { Redirect } from "react-router-dom";
import { useUser } from "state/auth";

const Login = () => {
  const user = useUser();
  const signInWithRedirect = () => userManager.signinRedirect();
  console.log("user", user);
  if (user) {
    return <Redirect to="/" />;
  }
  return <button onClick={signInWithRedirect}>Klikk</button>;
};

export default Login;
