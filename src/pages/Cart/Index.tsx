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
import BottomNavigationBar from "components/BottomNavigationBar";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import cartState, { emptyCart, useGetCartTotal } from "state/cart";
import styled from "styled-components";
import CartItem from "./Item";

const Cart = () => {
  const cartTotal = useGetCartTotal();
  const [cart, setCart] = useRecoilState(cartState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buy = () => {
    setCart(emptyCart(cart));
  };

  function confirmation() {
    setCart(emptyCart(cart));
    onClose();
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem cartItem={item} key={item.name} />
      ))}
      <p>Total: {cartTotal}kr</p>
      <button onClick={onOpen}>Kjøp</button>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Total>
              <p>
                <strong>Your total</strong>
              </p>
              <p>{cartTotal}kr</p>
            </Total>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={confirmation}>
              Purchase
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <BottomNavigationBar />
    </div>
  );
};

const Total = styled.div`
  width: 60%;
  justify-content: center;
  text-align: center;
  background-color: #f7f7fb;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  width: 8em;
  padding: 20px;
`;

export default Cart;
