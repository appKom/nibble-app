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
  Text,
} from '@chakra-ui/layout';
import Page from 'components/Page';
import styled from 'styled-components';

import QrReader from 'react-qr-reader';

const Cart = () => {
  const cartTotal = useGetCartTotal();
  const [cart, setCart] = useRecoilState(cartState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function emptyTheCart() {
    setCart(emptyCart(cart));
  }

  const handleScan = (data: any) => {
    console.log(data);

    // emptyTheCart();
    // onClose();
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <Page>
      {cart.length > 0 ? (
        <>
          <Grid templateRows="10fr 1fr 1fr" h="95%">
            <GridItem>
              {cart.map((item) => (
                <CartItem cartItem={item} key={item.name} />
              ))}
            </GridItem>
            <Flex justifyContent="space-between">
              <p>
                <strong>Total Sum: </strong>
              </p>
              <p>
                <strong>{cartTotal}kr</strong>
              </p>
            </Flex>

            <Button
              variant="outline"
              colorScheme="blue"
              onClick={emptyTheCart}
            >
              Tøm handlekurv
            </Button>
            <Button onClick={onOpen}>Kjøp</Button>
          </Grid>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="xs"
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <Total>
                <Heading as="h3" size="md">
                  Total sum: {cartTotal}kr
                </Heading>
                <br />
                <Text fontSize="lg">
                  Skan QR koden på Nibble skjermen for å fullføre kjøp
                </Text>
              </Total>
              <ModalBody>
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: '100%' }}
                />
              </ModalBody>

              <ModalFooter></ModalFooter>
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
  border-radius: 3px;
  margin: auto;
  width: 100%;
  padding: 20px;
`;

export default Cart;
