import BottomNavigationBar from "components/BottomNavigationBar";
import React from "react";
import { useRecoilState } from "recoil";
import cartState, {
  useGetCartTotal
} from "state/cart";
//import styled from "styled-components";
import CartItem from "./Item";

const Cart = () => {
  // const [cart] = useRecoilState(cartState);
  const cartTotal = useGetCartTotal();
  const [cart] = useRecoilState(cartState);
  //const pk = { name: "Powerking", price: 10, quantity: 1 };
  console.log(cart);
  const buy = () => {
    console.log("kjøpt")
  }
  return (
    <div>
      {cart.map((item) => (
        <CartItem cartItem={item}  key={item.name}/>
      ))}
      <p>Total: {cartTotal}kr</p>
      {/* Pluss og minus burde kanskje bare vises ved siden av et produkt i cart hvis det finnes noe */}
      <button onClick={buy}>Kjøp</button>
      <BottomNavigationBar />
    </div>
  );
};

export default Cart;

