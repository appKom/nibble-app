import { Button, Heading, Stack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import Page from "components/Page";
import { useUser } from "state/auth";
import userManager from "utils/oidc";
import GetUser from "./profile/GetUser";

const Profile = () => {
  const user = useUser();
  const { data } = GetUser(`${process.env.REACT_APP_API_BASE}/profile/`);
  const signoutRedirect = () => userManager.signoutRedirect();
  return (
    <Page>
      <Stack spacing={6} align={"center"}>
        <Image
          borderRadius='full'
          boxSize='150px'
          src={data.image}
          alt={user?.profile.name}
        />
        <Heading as='h3' borderTop={"200px"}>
          {user?.profile.name}
        </Heading>
        <Heading as='h3'>
          Din saldo: {data.saldo} kr
        </Heading>
        <Button w="100%" onClick={() => console.log("Fyll på mer penger")}>
          Fyll på mer penger
        </Button>
        <Button w="100%" onClick={signoutRedirect}>
          Logg ut
        </Button>
      </Stack>
    </Page>
  );
};

export default Profile;
