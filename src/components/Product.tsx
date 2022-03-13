import React from 'react';
import { useRecoilState } from 'recoil';
import cartState, { addCartItem } from 'state/cart';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 40%;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  background: #fff;
  padding: 8px;
`;

const Image = styled.img`
  width: 80%;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-weight: 700;
`;

const Price = styled.p``;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: left;
  font-weight: 200;
`;
