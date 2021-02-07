import React, { useEffect } from "react";
import Router from "./Router";
import BaseStyle from "BaseStyle";
import { fetchInventory, INVENTORY_URI } from "./api";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await fetchInventory(INVENTORY_URI);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <BaseStyle />
      <Router />
    </>
  );
};

export default App;
