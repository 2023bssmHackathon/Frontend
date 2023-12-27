import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
    return (
        <HeaderBox>
            <NavBar>
                <StyledNavLink>첫번째태그</StyledNavLink>
                <StyledNavLink>두번째태그</StyledNavLink>
                <StyledNavLink>세번째태그</StyledNavLink>
                <StyledNavLink>네번째태그</StyledNavLink>
            </NavBar>
        </HeaderBox>
    );
}
  
export default Header;

const HeaderBox = styled.div`

`;

const NavBar = styled.div`

`;

const StyledNavLink = styled(Link)`

`;
