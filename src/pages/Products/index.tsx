import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import inventoryState from "state/inventory";
import { Product } from "./Product";
import Page from "components/Page";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const Products = () => {
  const [inventory] = useRecoilState(inventoryState);
  return (
    <Page>
      <Wrapper>
        {inventory?.map((product) => (
          <Product product={product} key={product.pk} />
        ))}
      </Wrapper>
    </Page>
  );
};

export default Products;
