import BottomNavigationBar from "components/BottomNavigationBar";
import { useRecoilState } from "recoil";
import cartState, {
  useGetCartTotal,
  CartItem as CartItemType,
  deleteCartItem,
  reduceCartItem,
  addCartItem,
} from "state/cart";
import styled from "styled-components";

const Cart = () => {
  // const [cart] = useRecoilState(cartState);
  const cartTotal = useGetCartTotal();
  const [cart, setCart] = useRecoilState(cartState);
  const pk = { name: "Powerking", price: 10, quantity: 1 };
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <CartItem cartItem={item} />
      ))}
      <p>Total: {cartTotal}kr</p>
      {/* Pluss og minus burde kanskje bare vises ved siden av et produkt i cart hvis det finnes noe */}
      <button onClick={() => setCart(reduceCartItem(cart, pk))}>-</button>
      <button onClick={() => setCart(addCartItem(cart, pk))}>+</button>
      <button onClick={() => setCart(deleteCartItem(cart, pk))}>Slett</button>
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
