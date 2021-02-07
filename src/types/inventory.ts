export type Product = {
  pk: number;
  name: string;
  description: string;
  price: number;
  image: {
    sm: string;
  };
  category: {
    pk: number;
    name: string;
  };
};
export type CartItem = {
  object_id: number;
  quantity: number;
};

export type CartKeyValue = {
  [name: number]: CartItem;
};

export const getCategories = (inventory: Product[]): string[] =>
  inventory.reduce(
    (acc, current) => {
      if (acc.includes(current.category.name)) {
        return [...acc];
      }
      return [...acc, current.category.name];
    },
    ["Alt"] as string[]
  );

export const createCartItem = (id: number): CartItem => ({
  object_id: id,
  quantity: 1,
});

export const incrementCartItem = (item: CartItem): CartItem => ({
  ...item,
  quantity: item.quantity + 1,
});

export const decrementCartItem = (item: CartItem): CartItem => ({
  ...item,
  quantity: item.quantity - 1,
});

export const calculateCartTotal = (
  cart: CartKeyValue,
  inventory: Product[]
): number =>
  Object.keys(cart).reduce((accumulator: number, id: string) => {
    const item = cart[Number(id)];
    const product = inventory.find((e) => e.pk === Number(id))! as Product;
    return accumulator + product.price * item.quantity;
  }, 0);
