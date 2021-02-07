import { AUTHORIZE_URI, CLIENT_ID, CLIENT_SECRET, post } from "api";

const saveToken = (token: string) =>
  localStorage.setItem("nibble4_token", token);
export const loadToken = (): string =>
  localStorage.getItem("nibble4_token") || "";

export const fetchToken = async (): Promise<void> => {
  // Currently it returns 'unsuported grant_type' when using application/json. Should look into it.
  const payload = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
  const response = await post({
    url: AUTHORIZE_URI,
    body: payload,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json = await response.json();
  saveToken(json.access_token as string);
};
