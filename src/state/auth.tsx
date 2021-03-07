import { User } from "oidc-client";
import { atom } from "recoil";

const authState = atom<User | null>({
  key: "auth",
  default: null,
});

export default authState;
