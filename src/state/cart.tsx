import { atom, useRecoilState } from "recoil";

export type CartItem = { name: string; price: number; quantity: number };

const cartState = atom<CartItem[]>({
  key: "auth",
  default: [],
});

export const useGetCartTotal = () => {
  const [cart] = useRecoilState(cartState);
  return cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0
  );
};

export const addCartItem = (cart: CartItem[], cartItem: CartItem) => {
  const cartItemIndex = cart.findIndex((item) => item.name === cartItem.name);
  if (cartItemIndex === -1) {
    return [...cart, cartItem];
  }
  const mutatedCartItem = {
    ...cartItem,
    quantity: cart[cartItemIndex].quantity + 1,
  };
  const filteredCart = cart.filter((item) => item.name !== cartItem.name);
  return [...filteredCart, mutatedCartItem];
};

export const reduceCartItem = (cart: CartItem[], cartItem: CartItem) => {
  const cartItemIndex = cart.findIndex((item) => item.name === cartItem.name);
  if (cartItemIndex === -1) {
    return [...cart, cartItem];
  }

  const mutatedCartItem = {
    ...cartItem,
    quantity: cart[cartItemIndex].quantity - 1,
  };

  if (mutatedCartItem.quantity <= 0) {
    // Noe bedre måte å bruke deleteCartItem?
    const filteredCart = cart.filter((item) => item.name !== cartItem.name);
    return [...filteredCart];
  }
  const filteredCart = cart.filter((item) => item.name !== cartItem.name);
  return [...filteredCart, mutatedCartItem];
};

export const deleteCartItem = (cart: CartItem[], cartItem: CartItem) => {
  const filteredCart = cart.filter((item) => item.name !== cartItem.name);
  return [...filteredCart];
};

export default cartState;
