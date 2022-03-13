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
  Flex,
  Center,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/layout';
import Page from 'components/Page';
import styled from 'styled-components';

import QrReader from 'react-qr-reader';
import { useState } from 'react';

const Cart = () => {
  const cartTotal = useGetCartTotal();
  const [cart, setCart] = useRecoilState(cartState);
  const [confirmation, setConfirmation] = useState(false);
  const {
    isOpen: isQROpen,
    onOpen: onQROpen,
    onClose: onQRClose,
  } = useDisclosure();
  const {
    isOpen: isBuyOpen,
    onOpen: onBuyOpen,
    onClose: onBuyClose,
  } = useDisclosure();

  function emptyTheCart() {
    setCart(emptyCart(cart));
  }

  const buyItems = () => {
    console.log('KJØPT!');
    setConfirmation(true);
    onBuyOpen();
  };

  const handleScan = (data: string | null) => {
    if (data?.match('madeByAppkom<3')) {
      // TODO
      // Implement buy logic
      buyItems();

      emptyTheCart();
      onQRClose();
    }
  };

  const handleError = (err: any) => {
    console.log(err);
  };

  return (
    <Page>
      {cart.length > 0 ? (
        <>
          <SimpleGrid
            overflow="auto"
            h="70%"
            templateRows="1fr 1fr 1fr 1fr"
          >
            {cart.map((item) => (
              <CartItem cartItem={item} key={item.name} />
            ))}
          </SimpleGrid>
          <SimpleGrid
            width="95%"
            height="25%"
            position={'fixed'}
            bg="white"
            borderRadius={5}
            padding={5}
            boxShadow={'2px 2px 7px #888888'}
          >
            <Flex justifyContent="space-between">
              <p>
                <strong>Total Sum: </strong>
              </p>
              <p>
                <strong>{cartTotal}kr</strong>
              </p>
            </Flex>

            <Button
              width="100%"
              variant="outline"
              colorScheme="blue"
              onClick={emptyTheCart}
            >
              Tøm handlekurv
            </Button>
            <Button width="100%" onClick={onQROpen}>
              Kjøp
            </Button>
          </SimpleGrid>

          <Modal
            isOpen={isQROpen}
            onClose={onQRClose}
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

          <Modal
            isOpen={isBuyOpen}
            onClose={onBuyClose}
            size="xs"
            isCentered
          >
            <ModalOverlay />
            <ModalContent backgroundColor={'green.400'}>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <Total>
                <Heading as="h3" size="md">
                  Kjøp vellykket!! 🥳
                </Heading>
              </Total>
              <ModalBody></ModalBody>
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
      {confirmation === true && (
        <>
          <Center height="100%" align={'center'}>
            <Heading as="h3" size="md">
              Handlekurven din er tom.
              <br /> Legg til noen produkter.
            </Heading>
          </Center>
          <Modal
            isOpen={isBuyOpen}
            onClose={onBuyClose}
            size="xs"
            isCentered
          >
            <ModalOverlay />
            <ModalContent backgroundColor={'green.400'}>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <Total>
                <Heading as="h3" size="md">
                  Kjøp vellykket!! 🥳
                </Heading>
              </Total>
              <ModalBody></ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </>
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
