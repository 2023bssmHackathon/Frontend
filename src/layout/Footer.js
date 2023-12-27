import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import color from "../styles/color";
import font from "../styles/font";

function Footer() {
  return (
    <FooterBox>
      <FooterBar>
        <LogoBox src="/images/Logo.png" />
        <TextBox>2023 BSSM 겨울 AI해커톤 꼬마캣</TextBox>
      </FooterBar>
    </FooterBox>
  );
}

export default Footer;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  padding: 20.5px;
  bottom: 0;
`;

const LogoBox = styled.img`
  width: 53px;
  height: 39px;
  &:hover {
    cursor: pointer;
  }
`;

const TextBox = styled.span`
  color: black;
  ${font.Text300};
  font-size: 16px;
`;

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;