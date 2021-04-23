import React from "react";
import { useRecoilState } from "recoil";
import inventoryState from "state/inventory";
import { Product } from "./Product";
import Page from "components/Page";
import { SimpleGrid } from "@chakra-ui/react";

const Products = () => {
  const [inventory] = useRecoilState(inventoryState);
  return (
    <Page>
      <SimpleGrid columns={2} gap="1rem">
        {inventory?.map((product) => (
          <Product product={product} key={product.pk} />
        ))}
      </SimpleGrid>
    </Page>
  );
};

export default Products;
