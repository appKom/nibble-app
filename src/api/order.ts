import { TRANSACTION_URI as url, authorizedPost } from './index';
import { OrderLineFormat } from '../types/api';
import { CartItem } from 'state/cart';

const purchaseItems = (
  id: number,
  orders: { [id: number]: CartItem },
): Promise<Response> => {
  const body: OrderLineFormat = {
    user: id,
    orders: Object.values(orders),
  };
  return authorizedPost({ url, body });
};

export default purchaseItems;
