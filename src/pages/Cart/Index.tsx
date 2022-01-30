import { useRecoilState } from "recoil";
import cartState, { useGetCartTotal } from "state/cart";
import CartItem from "./Item";
import { Button } from "@chakra-ui/react";
import { Grid, Flex, GridItem } from "@chakra-ui/layout";
import Page from "components/Page";

const Cart = () => {
  const cartTotal = useGetCartTotal();
  const [cart] = useRecoilState(cartState);
  console.log(cart);
  const purchase = () => {
    console.log("kjøpt");
  };
  return (
    <Page>
      <Grid templateRows="10fr 1fr 1fr" h="100%">
        <GridItem>
          {cart.map((item) => (
            <CartItem cartItem={item} key={item.name} />
          ))}
        </GridItem>
        <Flex justifyContent="space-between">
          <p>Total Sum: </p>
          <p>{cartTotal}kr</p>
        </Flex>
        <Button w="100%" onClick={purchase}>
          Kjøp
        </Button>
      </Grid>
    </Page>
  );
};

export default Cart;
