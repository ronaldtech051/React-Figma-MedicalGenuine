// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "700",
        fontSize: "4xl",
        LineHeight: "50px",
        letterSpacing: "0.2px",
        height: "auto",
        color: "#fff",
      },
      variants: {
        nav: {
          alignSelf: "center",
          w: "100%",
          lineHeight: "32px",
          fontSize: "24",
          letterSpacing: "0.1",
          m: "30px 44px 29px 136px",
        },
        "header-big": {
          LineHeight: "80px",
          size: "4xl",
          textAlign: "center",
        },
        "header-small": {
          LineHeight: "30px",
          size: "md",
          textAlign: "center",
          fontWeight: "400",
        },
      },
    },
    Text: {
      baseStyle: {
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        letterSpacing: "0.2",
      },
      variants: {
        green: {
          color: "#96BB7C",
        },
        "dark-blue": {
          color: "#252B42",
          fontWeight: "700",
        },
        grey: {
          color: "#737373",
          fontWeight: "400",
        },
      },
    },
    Flex: {
      variants: {
        Container: {
          base: {
            padding: "5px 95px",
            w: "100%",
            justifyContent: "center",
            alignItems: "center",
            bgColor: "#2D4059",
          },
          sm: {},
        },
      },
    },
  },
});
export default theme;
