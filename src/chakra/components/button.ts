const Button = {
  variants: {
    solid: {
      bg: "online.blue",
      _hover: {
        bg: "online.blue",
      },
      color: "#fff",
    },
    // Left the comment to easily see how to change bg based on color mode

    // solid: (props: { colorMode: string }) => ({
    //   bg: props.colorMode === "dark" ? "red.100" : "brand.300",
    // }),
  },
};

export default Button;
