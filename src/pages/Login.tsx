import userManager from 'utils/oidc';
import { Redirect } from 'react-router-dom';
import { useUser } from 'state/auth';
import styled from 'styled-components';
import { OnlineBlue } from 'utils/colors';
import { Heading } from '@chakra-ui/react';

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  text-align: center;
  background: #fff;
`;

const HeaderText = styled.div`
  width: 100%;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`;

const LoginFrame = styled.div`
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background: ${OnlineBlue};
`;

const LoginLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const AppkomLogo = styled.img`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Login = () => {
  const user = useUser();
  const signInWithRedirect = () => userManager.signinRedirect();
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <HeaderText>
        <Heading as="h3" size="xl" padding={5}>
          Logg inn gjennom
        </Heading>
      </HeaderText>
      <LoginFrame onClick={signInWithRedirect}>
        <LoginLogo
          src="images/online.png"
          alt="Online logo"
        ></LoginLogo>
      </LoginFrame>
      <AppkomLogo
        src="images/appkom.png"
        alt="Appkom logo"
      ></AppkomLogo>
    </Wrapper>
  );
};

export default Login;
