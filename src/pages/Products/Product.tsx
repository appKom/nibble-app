import { IMAGE_URI } from "api";
import { useAddCartItem } from "state/cart";
import styled from "styled-components";
import { Product as ProductType } from "types/inventory";

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

type Props = {
  product: ProductType;
};

export const Product = (props: Props) => {
  const addCartItem = useAddCartItem();
  const { product } = props;
  const imageSrc = product.image
    ? IMAGE_URI(product.image.sm)
    : `${process.env.PUBLIC_URL}/images/noImage.png`;
  const cartItem = { name: product.name, price: product.price, quantity: 1 };
  return (
    <Wrapper onClick={() => addCartItem(cartItem)}>
      <Image src={imageSrc}></Image>
      <TextWrapper>
        <Name>{product.name}</Name>
        <Price>{product.price}kr</Price>
      </TextWrapper>
      <Description>{product.description}</Description>
    </Wrapper>
  );
};
