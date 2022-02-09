import { Box, Button, Heading } from '@chakra-ui/react';
import Page from 'components/Page';
import { useUser } from 'state/auth';
import userManager from 'utils/oidc';
import GetUser from './profile/GetUser';

const Profile = () => {
  const user = useUser();
  const { data, error } = GetUser(
    `${process.env.REACT_APP_API_BASE}/profile/`,
  );

  const signout = () => {
    userManager.removeUser();
    userManager.revokeAccessToken();
    window.location.reload();
  };

  const addMoney = () => {
    window.open('https://online.ntnu.no/payments/wallet', '_blank');
  };

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
          {!error ? (
            <Heading as="h3" size="md">
              Din saldo: {data.saldo} kr
            </Heading>
          ) : (
            <Heading as="h3" size="sm">
              En feil oppsto, kunne ikke finne saldoen din :/
            </Heading>
          )}
        </Box>
        <Box>
          <Button w="100%" onClick={addMoney}>
            Fyll på mer penger
          </Button>
          <Box paddingTop={4}></Box>
          <Button w="100%" onClick={signout}>
            Logg ut
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default Profile;
