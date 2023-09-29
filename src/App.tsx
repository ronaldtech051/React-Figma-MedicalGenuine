import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Header from "./components/Header";
import Layout2 from "./components/Layout2";
import "./App.css";
import Layout3 from "./components/Layout3";
import StatsLayout from "./components/StatsLayout";
import Layout4 from "./components/Layout4";
import Layout5 from "./components/Layout5";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <div></div>
    <Layout2 />
    <Layout3 />
    <StatsLayout />
    <Layout4 />
    <Layout5 />
  </ChakraProvider>
);
