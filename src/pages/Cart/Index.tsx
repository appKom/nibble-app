import { useRecoilState } from "recoil";
import cartState, { emptyCart, useGetCartTotal } from "state/cart";
import CartItem from "./Item";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Grid, Flex, GridItem } from "@chakra-ui/layout";
import Page from "components/Page";
import styled from "styled-components";

const Cart = () => {
  const cartTotal = useGetCartTotal();
  const [cart, setCart] = useRecoilState(cartState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function confirmation() {
    setCart(emptyCart(cart));
    onClose();
  }

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

        <Button w="100%" onClick={onOpen}>
          Kjøp
        </Button>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bekreft</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Total>
              <p>
                <strong>Total sum:</strong>
              </p>
              <p>{cartTotal}kr</p>
            </Total>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={confirmation}>
              Kjøp
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Page>
  );
};

const Total = styled.div`
  justify-content: center;
  text-align: center;
  background-color: #f7f7fb;
  border-radius: 3px;
  margin: auto;
  width: 10em;
  padding: 20px;
`;

export default Cart;
