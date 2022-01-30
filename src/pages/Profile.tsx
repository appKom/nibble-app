import { Box, Button, Heading } from '@chakra-ui/react';
import Page from 'components/Page';
import { Redirect } from 'react-router-dom';
import { useUser } from 'state/auth';
import userManager from 'utils/oidc';
import GetUser from './profile/GetUser';

const Profile = () => {
  const user = useUser();
  const { data } = GetUser(
    `${process.env.REACT_APP_API_BASE}/profile/`,
  );
  const signoutRedirect = () => userManager.signoutRedirect();

  return (
    <Page>
      <Box
        w="100%"
        h="95%"
        align={'center'}
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={'column'}
      >
        <Box>
          <Heading as="h3" size="xl" padding={5}>
            {user?.profile.name}
          </Heading>
          <Heading as="h3" size="md">
            Din saldo: {data.saldo} kr
          </Heading>
        </Box>
        <Box>
          <Button w="100%" onClick={() => console.log('TODO')}>
            Fyll på mer penger
          </Button>
          <Box paddingTop={4}></Box>
          <Button w="100%" onClick={signoutRedirect}>
            Logg ut
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default Profile;
