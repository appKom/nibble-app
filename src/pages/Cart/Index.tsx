import { useRecoilState } from 'recoil';
import cartState, { emptyCart, useGetCartTotal } from 'state/cart';
import CartItem from './Item';
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
} from '@chakra-ui/react';
import {
  Grid,
  Flex,
  GridItem,
  Center,
  Heading,
  SimpleGrid,
  Box,
} from '@chakra-ui/layout';
import Page from 'components/Page';
import styled from 'styled-components';
import Item from './Item';

const Cart = () => {
  const cartTotal = useGetCartTotal();
  const [cart, setCart] = useRecoilState(cartState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function confirmation() {
    emptyTheCart();
    onClose();
  }

  function emptyTheCart() {
    setCart(emptyCart(cart));
  }

  return (
    <Page>
      {cart.length > 0 ? (
        <>
          <SimpleGrid overflow="auto" h="70%">
              {cart.map((item) => (
                <CartItem cartItem={item} key={item.name} /> 
              ))}
          </SimpleGrid>
          <SimpleGrid width="95%" height="25%" position={'fixed'} bg="white" borderRadius={5}>
            <Flex justifyContent="space-between">
              <p>
                <strong>Total Sum: </strong>
              </p>
              <p>
                <strong>{cartTotal}kr</strong>
              </p>
            </Flex>

            <Button width="100%"
              variant="outline"
              colorScheme="blue"
              onClick={emptyTheCart}
            >
              Tøm handlekurv
            </Button>
            <Button width="100%" onClick={onOpen}>Kjøp</Button>
          </SimpleGrid>
       

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="xs"
            isCentered
          >
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
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={confirmation}
                >
                  Kjøp
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Center height="100%" align={'center'}>
          <Heading as="h3" size="md">
            Handlekurven din er tom. <br /> Legg til noen produkter.
          </Heading>
        </Center>
      )}
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
