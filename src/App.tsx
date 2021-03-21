import React, { useEffect } from "react";
import Router from "./Router";
import BaseStyle from "BaseStyle";
import { fetchInventory, INVENTORY_URI } from "./api";
import { useRecoilState } from "recoil";
import inventoryState from "state/inventory";

const App = () => {
  const [,setInventory] = useRecoilState(inventoryState);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchInventory(INVENTORY_URI);
      setInventory(data);
    };
    getData();
  }, [setInventory]);

  return (
    <>
      <BaseStyle />
      <Router />
    </>
  );
};

export default App;
