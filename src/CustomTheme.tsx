// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "700",
        fontSize: "6xl",
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
        fontSize: "xl",
        fontWeight: "400",
        lineHeight: "24px",
        letterSpacing: "0.2px",
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
  },
});
export default theme;
