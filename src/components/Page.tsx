import { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import BottomNavigationBar from "./BottomNavigationBar";

const Page: FC = (props) => {
  const { children } = props;
  return (
    <Grid height="100vh" templateRows="10fr 1fr">
      <GridItem p="0.5rem" overflow="scroll">
        {children}
      </GridItem>
      <GridItem>
        <BottomNavigationBar />
      </GridItem>
    </Grid>
  );
};

export default Page;
