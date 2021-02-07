import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OnlineBlue } from "utils/colors";

type Props = {
  className?: string;
};

const BottomNavigationBar = ({ className }: Props) => {
  return (
    <nav className={className}>
      <LinkWrapper>
        <StyledLink>
          <Link to="/products">Products</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/profile">Profile</Link>
        </StyledLink>
        <StyledLink>
          <Link to="/cart">Cart</Link>
        </StyledLink>
      </LinkWrapper>
    </nav>
  );
};

const LinkWrapper = styled.ol`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledLink = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export default styled(BottomNavigationBar)`
  background-color: ${OnlineBlue};
  padding: 10px 0;
`;
