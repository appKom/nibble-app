import BottomNavigationBar from "components/BottomNavigationBar";
import { Product } from "components/Product";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const Products = () => {
  return (
    <div>
      <Wrapper>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </Wrapper>
      <BottomNavigationBar />
    </div>
  );
};

export default Products;
