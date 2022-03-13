import { IMAGE_URI } from 'api';
import React from 'react';
import { useRecoilState } from 'recoil';
import cartState, { addCartItem } from 'state/cart';
import styled from 'styled-components';
import { Product as ProductType } from 'types/inventory';

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  background: #fff;
  padding: 3px;
  box-sizing: content-box;
`;

const Image = styled.img`
  width: 80%;
  margin: auto;
`;

const Name = styled.p`
  font-weight: 700;
`;

const Price = styled.p``;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const Description = styled.p`
  text-align: left;
  font-weight: 200;
`;

type Props = {
  product: ProductType;
};

export const Product = (props: Props) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { product } = props;
  const imageSrc = product.image
    ? IMAGE_URI(product.image.sm)
    : `${process.env.PUBLIC_URL}/images/noImage.png`;
  const cartItem = {
    id: product.pk,
    name: product.name,
    price: product.price,
    quantity: 1,
  };
  return (
    <Wrapper onClick={() => setCart(addCartItem(cart, cartItem))}>
      <Image src={imageSrc}></Image>
      <TextWrapper>
        <Name>{product.name}</Name>
        <Price>{product.price}kr</Price>
      </TextWrapper>
      {product.description && (
        <Description>{product.description}</Description>
      )}
    </Wrapper>
  );
};
