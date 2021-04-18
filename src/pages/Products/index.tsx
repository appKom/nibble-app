import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import BottomNavigationBar from "components/BottomNavigationBar";
import inventoryState from "state/inventory";
import { Product } from "./Product";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const Products = () => {
  const [inventory] = useRecoilState(inventoryState);
  if (!inventory) return null;
  return (
    <div>
      <Wrapper>
        {inventory?.map((product) => (
          <Product product={product} key={product.pk} />
        ))}
      </Wrapper>
      <BottomNavigationBar />
    </div>
  );
};

export default Products;
