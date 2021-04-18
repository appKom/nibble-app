import { atom, useRecoilState } from "recoil";

type CartItem = { name: string; price: number; quantity: number };

interface CartState {
  items: CartItem[];
  cartConfirmed: boolean;
}

const initialState: CartState = {
  items: [],
  cartConfirmed: false,
};

const cartState = atom<CartState>({
  key: "cart",
  default: initialState,
});

export const useGetCartTotal = () => {
  const [cart] = useRecoilState(cartState);
  return cart.items.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0
  );
};

export const useAddCartItem = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const addItemAndResetConfirmation = (cartItem: CartItem) => {
    const newCartItems = addCartItem(cart.items, cartItem);
    setCart({ ...cart, items: newCartItems, cartConfirmed: false });
  };
  return addItemAndResetConfirmation;
};

export const useEnablePurchase = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const enablePurchase = () => setCart({ ...cart, cartConfirmed: true });
  return enablePurchase;
};

const addCartItem = (cartItems: CartItem[], cartItem: CartItem) => {
  const cartItemIndex = cartItems.findIndex(
    (item) => item.name === cartItem.name
  );
  if (cartItemIndex === -1) {
    return [...cartItems, cartItem];
  }
  const mutatedCartItem = {
    ...cartItem,
    quantity: cartItems[cartItemIndex].quantity + 1,
  };
  const filteredCart = cartItems.filter((item) => item.name !== cartItem.name);
  return [...filteredCart, mutatedCartItem];
};

export default cartState;
