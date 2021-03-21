import { Product } from "types/inventory";
import { atom } from "recoil";

const inventoryState = atom<Product[] | null>({
  key: "inventory",
  default: null,
});

export default inventoryState;
