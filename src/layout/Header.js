import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import color from "../styles/color";
import font from "../styles/font";

function Header() {
    return (
        <HeaderBox>
            <NavBar>
                <LogoBox src="/images/Logo.png"/>
                <SearchBar />
                <IconGroup>
                    <IconBox src="/images/icon/Vector.png" />
                    <RowText>쪽지함</RowText>
                </IconGroup>
                <IconGroup>
                    <IconBox src="/images/icon/footpoint.png" />
                    <RowText>냥발 쓰기</RowText>
                </IconGroup>
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
    align-items: center;
`;

const StyledNavLink = styled(Link)`

`;

const LogoBox = styled.img`
  width: 100px;
  height: 72.171px;
  &:hover {
      cursor: pointer;
  }
`;

const IconBox = styled.img`
    width: 45px;
    height: 45px;
`;

const RowText = styled.span`
    color: ${color.Gray};
    ${font.Text300};
    font-size: 16px;
`;

const IconGroup = styled.div`
    width: 78px;
    height: 78px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:hover {
        cursor: pointer;
    }
`;
