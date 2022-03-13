import { atom, useRecoilState } from 'recoil';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartState = atom<CartItem[]>({
  key: 'cart',
  default: [],
});

export const useGetCartTotal = () => {
  const [cart] = useRecoilState(cartState);
  return cart.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0,
  );
};

export const addCartItem = (cart: CartItem[], cartItem: CartItem) => {
  const exist = cart.find((item) => item.name === cartItem.name);
  if (exist) {
    return cart.map((item) =>
      item.name === cartItem.name
        ? { ...exist, quantity: exist.quantity + 1 }
        : item,
    );
  } else {
    return [...cart, { ...cartItem, quantity: 1 }];
  }
};

export const reduceCartItem = (
  cart: CartItem[],
  cartItem: CartItem,
) => {
  const exist = cart.find((item) => item.name === cartItem.name);
  if (exist) {
    if (exist.quantity === 1) {
      return deleteCartItem(cart, cartItem);
    } else {
      return cart.map((item) =>
        item.name === cartItem.name
          ? { ...exist, quantity: exist.quantity - 1 }
          : item,
      );
    }
  } else {
    return [...cart];
  }
};

export const deleteCartItem = (
  cart: CartItem[],
  cartItem: CartItem,
) => {
  return cart.filter((item) => item.name !== cartItem.name);
};

export const emptyCart = (cart: CartItem[]) => {
  return cart.filter((item) => !item);
};

export default cartState;
