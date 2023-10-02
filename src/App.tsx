import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Layout2 from "./components/Layout2";
import "./App.css";
import Layout3 from "./components/Layout3";
import StatsLayout from "./components/StatsLayout";
import Layout4 from "./components/Layout4";
import Layout5 from "./components/Layout5";
import Testimonials from "./components/Testimonials";
import JoinUsLayout from "./components/JoinUsLayout";
import Footer from "./components/Footer";
import theme from "./CustomTheme";
import NavBar from "./components/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Header />
    <div></div>
    <Layout2 />
    <Layout3 />
    <StatsLayout />
    <Layout4 />
    <Layout5 />
    <Testimonials />
    <JoinUsLayout />
    <Footer />
  </ChakraProvider>
);
