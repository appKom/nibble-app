import { CartItem } from 'state/cart';

export type OrderLineFormat = {
  user: number;
  orders: CartItem[];
};
