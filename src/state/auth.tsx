import { User } from "oidc-client";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import userManager from "utils/oidc";

const authState = atom<User | null>({
  key: "auth",
  default: null,
});

export const useUser = () => {
  const [auth, setAuth] = useRecoilState(authState);
  useEffect(() => {
    const getUser = async () => {
      userManager.getUser().then((user) => {
        if (user) {
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
  return auth;
};

export default authState;
