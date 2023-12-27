import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Header />
            <body>{children}</body>
            <Footer />
        </>
    );
}
  
export default Layout;
