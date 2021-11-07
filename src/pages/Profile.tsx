import Page from "components/Page";
import { useUser } from "state/auth";

const getProfile = async (token:any) => {
  const data = await fetch('https://online.ntnu.no/api/v1/profile/', {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  });
}

const Profile = () => {
  const user = useUser();
  let data = getProfile(user?.access_token);
  //console.log(data);
  let saldo = data?.then(response => console.log(response));
  return (
    <Page>
      <h1>{user?.profile.name}</h1>
      <h1>{}</h1>
    </Page>
  );
};

export default Profile;
