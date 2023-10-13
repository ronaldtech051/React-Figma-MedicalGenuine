// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "700",
        fontSize: "5xl",
        LineHeight: "50px",
        letterSpacing: "0.2px",
        height: "auto",
        overflowY: "hidden",
        color: "#fff",
      },
      variants: {
        nav: {
          lineHeight: "32px",
          fontSize: "4xl",
          letterSpacing: "0.1",
          m: "30px 44px 29px 136px",
        },
        "header-big": {
          LineHeight: "80px",

          fontSize: "4xl",
          textAlign: "center",
        },
        "header-small": {
          LineHeight: "30px",
          fontSize: "md",

          textAlign: "center",
          fontWeight: "400",
        },
      },
    },
    Text: {
      baseStyle: {
        color: "#ffffff",
        overflowY: "hidden",
        fontSize: "xl",
        whiteSpace: "initial",
        fontWeight: "400",
        height: "auto",
        lineHeight: "24px",
        letterSpacing: "0.2px",
        textOverFlow: "ellipsis",
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
