import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <LayoutBox>
                <GlobalStyle />
                <Header />
                <body>{children}</body>
            </LayoutBox>
            <Footer />
        </>
    );
}
  
export default Layout;

const LayoutBox = styled.div`
    padding: 48px 115px;
`;