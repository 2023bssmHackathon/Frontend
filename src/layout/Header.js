import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Header() {
    return (
        <HeaderBox>
            <NavBar>
                <LogoBox src="/images/Logo.png"/>
                <SearchBar/>
            </NavBar>
        </HeaderBox>
    );
}
  
export default Header;

const HeaderBox = styled.div`

`;

const NavBar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;

const StyledNavLink = styled(Link)`

`;

const LogoBox = styled.img`
  width: 100px;
  height: 72.171px;
`;

const IconBox = styled.img`
  width: 45px;
  height: 40px;
`;