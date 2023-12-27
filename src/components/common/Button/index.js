import styled from "styled-components";
import color from "../../../styles/color";
import fonts from "../../../styles/font";

function Button({ text, width, buttonColor, onClick }) {
    const buttonColorValue = color[buttonColor];

  return (
    <ButtonBox width={width} buttonColor={buttonColorValue} onClick={onClick}>
      <Text>{text}</Text>
    </ButtonBox>
  );
}

const ButtonBox = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.buttonColor};
  padding: 20px 48px;
  border-radius: 16px;
  text-align: center;
  border: none;
  &:hover {
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: #FFC700;
  }
  &:not(:hover) {
    transition: 0.2s ease;
  }
`;

const Text = styled.span`
  ${fonts.Text300};
  color: ${color.White};
  font-size: 28px;
`;

export default Button;