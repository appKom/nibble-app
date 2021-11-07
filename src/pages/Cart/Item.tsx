import { useRecoilState } from "recoil";
import cartState, { CartItem as CartItemType, reduceCartItem, addCartItem, deleteCartItem } from "state/cart";
import styled from "styled-components";
import { Button } from "@chakra-ui/react"; 
import { SmallCloseIcon, AddIcon, MinusIcon} from "@chakra-ui/icons";

type CartItemProps = { cartItem: CartItemType };
const CartItem = (props: CartItemProps) => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div>
      <CartItemContainer>
        <CartItemHeader>
          <p>{props.cartItem.name}</p>
          <p>{props.cartItem.price}kr</p>
        </CartItemHeader>
        <p>Antall: {props.cartItem.quantity}</p>

        <Stack>
         <div> 
          
          <Button fontSize="12px" size="xs" onClick={() => setCart(reduceCartItem(cart, props.cartItem)) }>
          -
          </Button>

          <Button fontSize="12px" size="xs" onClick={() => setCart(addCartItem(cart, props.cartItem)) }>
          +
  </Button>
          </div> 
     

          <SmallCloseIcon color = "red" onClick={() => setCart(deleteCartItem(cart, props.cartItem)) }>
          Slett
          </SmallCloseIcon>
        </Stack>


        {/* <button onClick={() => setCart(reduceCartItem(cart, props.cartItem))}>-</button>
        <button onClick={() => setCart(addCartItem(cart, props.cartItem))}>+</button>
        <button onClick={() => setCart(deleteCartItem(cart, props.cartItem))}>Slett</button> */}
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
`;

const Stack = styled.div`
  display: flex; 
  justify-content: space-between; 
`;



export default CartItem;