import BottomNavigationBar from "components/BottomNavigationBar";
import { useRecoilState } from "recoil";
import cartState from "state/cart";
import QRScanner from "./QrScanner";

type PurchaseButtonProps = {
  isConfirmed: boolean;
};

const PurchaseButton = (props: PurchaseButtonProps) => {
  if (props.isConfirmed) {
    return <button>Purchase</button>;
  }
  return <QRScanner />;
};

const Cart = () => {
  const [cart] = useRecoilState(cartState);
  return (
    <div>
      <p>Cart</p>
      <PurchaseButton isConfirmed={cart.cartConfirmed} />
      <BottomNavigationBar />
    </div>
  );
};

export default Cart;
