import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCartTotal } from 'state/cart';
import styled from 'styled-components';
import { OnlineBlue } from 'utils/colors';
import { BiFoodMenu } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';

type Props = {
  className?: string;
};

const BottomNavigationBar = ({ className }: Props) => {
  const cartTotal = useGetCartTotal();
  return (
    <Box as="nav" className={className}>
      <LinkWrapper>
        <StyledListElement>
          <StyledLink to="/products">
            <BiFoodMenu /> <p>Produkter</p>
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/profile">
            <CgProfile /> <p>Profil</p>
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/cart">
            <AiOutlineShoppingCart />
            <p>{cartTotal}kr</p>
          </StyledLink>
        </StyledListElement>
      </LinkWrapper>
    </Box>
  );
};

const LinkWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: inherit;
`;

const StyledListElement = styled.li`
  list-style: none;
  align-self: center;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 33vw;
`;

export default styled(BottomNavigationBar)`
  display: flex;
  flex-direction: column;
  background-color: ${OnlineBlue};
  width: 100vw;
  height: 100%;
`;
