import BottomNavigationBar from "components/BottomNavigationBar";
import { useRecoilState } from "recoil";
import cartState, {
  useGetCartTotal,
  CartItem as CartItemType,
} from "state/cart";
import styled from "styled-components";

const Cart = () => {
  const [cart] = useRecoilState(cartState);
  const cartTotal = useGetCartTotal();
  return (
    <div>
      {cart.map((item) => (
        <CartItem cartItem={item} />
      ))}
      <p>Total: {cartTotal}kr</p>
      <button onClick={() => console.log("kjøpt")}>Kjøp</button>
      <BottomNavigationBar />
    </div>
  );
};

type CartItemProps = { cartItem: CartItemType };
const CartItem = (props: CartItemProps) => {
  return (
    <div>
      <CartItemHeader>
        <p>{props.cartItem.name}</p>
        <p>{props.cartItem.price}kr</p>
      </CartItemHeader>
      <p>Antall: {props.cartItem.quantity}</p>
    </div>
  );
};

const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Cart;
