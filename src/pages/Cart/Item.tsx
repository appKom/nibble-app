import { useRecoilState } from 'recoil';
import cartState, {
  CartItem as CartItemType,
  reduceCartItem,
  addCartItem,
  deleteCartItem,
} from 'state/cart';
import styled from 'styled-components';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { CloseIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Stack, HStack, VStack } from '@chakra-ui/react';

type CartItemProps = { cartItem: CartItemType };
const CartItem = (props: CartItemProps) => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div>
      <CartItemContainer>
        <CartItemHeader>
          <Heading as="h3" size="sm">
            {props.cartItem.name}
          </Heading>
          <p>{props.cartItem.price}kr</p>
        </CartItemHeader>
        <p>
          Antall: <b>{props.cartItem.quantity}</b>
        </p>
        <br />

        <Stack
          spacing={4}
          direction="row"
          align="center"
          display={'flex'}
          justifyContent={'space-between'}
        >
          <div>
            <Button
              size="sm"
              onClick={() =>
                setCart(reduceCartItem(cart, props.cartItem))
              }
            >
              -
            </Button>
            {'        '}
            <Button
              size="sm"
              onClick={() =>
                setCart(addCartItem(cart, props.cartItem))
              }
            >
              +
            </Button>
          </div>
          <CloseIcon
            color="red"
            onClick={() =>
              setCart(deleteCartItem(cart, props.cartItem))
            }
          >
            Slett
          </CloseIcon>
        </Stack>
      </CartItemContainer>
    </div>
  );
};

const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartItemContainer = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 2px 2px 7px #888888;
  border-radius: 7px;
  background-color: #fff;
`;

export default CartItem;
