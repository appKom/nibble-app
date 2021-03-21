import React from "react";
import { Link } from "react-router-dom";
import { useGetCartTotal } from "state/cart";
import styled from "styled-components";
import { OnlineBlue } from "utils/colors";
import { BiFoodMenu } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Box } from "@chakra-ui/react";

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
            <BiFoodMenu /> <p>Products</p>
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/profile">
            <CgProfile /> Profile
          </StyledLink>
        </StyledListElement>
        <StyledListElement>
          <StyledLink to="/cart">
            <AiOutlineShoppingCart />
            Cart {cartTotal}kr
          </StyledLink>
        </StyledListElement>
      </LinkWrapper>
    </Box>
  );
};

const LinkWrapper = styled.ol`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledListElement = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #ffffff;
    align: center;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 33vw;
`;

export default styled(BottomNavigationBar)`
  background-color: ${OnlineBlue};
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;
