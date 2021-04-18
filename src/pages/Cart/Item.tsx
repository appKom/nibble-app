import { useRecoilState } from "recoil";
import cartState, { CartItem as CartItemType, reduceCartItem, addCartItem, deleteCartItem } from "state/cart";
import styled from "styled-components";

type CartItemProps = { cartItem: CartItemType };
const CartItem = (props: CartItemProps) => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div>
      <CartItemHeader>
        <p>{props.cartItem.name}</p>
        <p>{props.cartItem.price}kr</p>
      </CartItemHeader>
      <p>Antall: {props.cartItem.quantity}</p>

      <button onClick={() => setCart(reduceCartItem(cart, props.cartItem))}>-</button>
      <button onClick={() => setCart(addCartItem(cart, props.cartItem))}>+</button>
      <button onClick={() => setCart(deleteCartItem(cart, props.cartItem))}>Slett</button>
    </div>
  );
};

const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CartItem;