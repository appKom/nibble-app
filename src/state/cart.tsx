import { atom } from "recoil";

type CartItem = {name: string, price: number, quantity: number}

const cartState = atom<CartItem[]>({
  key: "auth",
  default: [],
});

export const addCartItem = (cart: CartItem[], cartItem: CartItem) => {
    const cartItemIndex = cart.findIndex(item => item.name === cartItem.name);
    if (cartItemIndex === -1) {
        return [...cart, cartItem];
    }
    const mutatedCartItem = {...cartItem, quantity: cart[cartItemIndex].quantity+1};
    const filteredCart = cart.filter(item => item.name !== cartItem.name);
    return [...filteredCart, mutatedCartItem];
}

export default cartState;
