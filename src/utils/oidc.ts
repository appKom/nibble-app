import { UserManager } from "oidc-client";

const client_id = process.env.REACT_APP_CLIENT_ID;
const authority = process.env.REACT_APP_OW_AUTHORITY;
const redirect_uri = "http://localhost:3000/login";

const userManager = new UserManager({
  client_id,
  authority,
  redirect_uri,
  response_type: "code",
  scope: "openid onlineweb4",
});

export default userManager;
