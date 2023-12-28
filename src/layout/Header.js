import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import color from "../styles/color";
import font from "../styles/font";

function Header() {
    return (
        <HeaderBox>
            <NavBar>
                <StyledNavLink to="/">
                    <LogoBox src="/images/Logo.png"/>
                </StyledNavLink>
                <SearchBar />
                <Row>
                    <StyledNavLink to="/mail/input">
                        <IconGroup>
                            <IconBox src="/images/icon/Vector.png" />
                            <RowText>쪽지함</RowText>
                        </IconGroup>
                    </StyledNavLink>
                    <StyledNavLink to="/write">
                        <IconGroup>
                            <IconBox src="/images/icon/footpoint.png" />
                            <RowText>냥발 쓰기</RowText>
                        </IconGroup>
                    </StyledNavLink>
                </Row>
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
    margin-bottom: 66px;
`;

const StyledNavLink = styled(Link)`
    text-decoration: none;
`;

const LogoBox = styled.img`
  width: 100px;
  height: 72.171px;
  &:hover {
      cursor: p;
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

const Row = styled.div`
    display: flex;
    flex-direction: row;

`;