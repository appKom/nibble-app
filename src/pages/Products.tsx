import BottomNavigationBar from "components/BottomNavigationBar";
import { Product } from "components/Product";
import { useRecoilState } from "recoil";
import inventoryState from "state/inventory";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const Products = () => {
  const [inventory, setInventory] = useRecoilState(inventoryState);
  return (
    <div>
      <Wrapper>
      {inventory?.map((product) => 
        <Product product={product} key={product.pk}/>
      )}
      </Wrapper>
      <BottomNavigationBar />
    </div>
  );
};

export default Products;
