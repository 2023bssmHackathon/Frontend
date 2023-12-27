import styled from "styled-components";
import fonts from "../../styles/font";

function MiniButton({ text, isSuccess, onClick }) {
  return (
    <>
        {isSuccess ? (
            <SuccessButtonBox onClick={onClick}>
                <Text>{text}</Text>
            </SuccessButtonBox>
        ) : (
            <NotSuccessButtonBox onClick={onClick}>
                <Text>{text}</Text>
            </NotSuccessButtonBox>
        )}
    </>
  );
}

export default MiniButton;

const SuccessButtonBox = styled.button`
    padding: 10px 24px;
    background-color: #cf9;
    border-radius: 16px;
    text-align: center;
    border: none;
    &:hover {
    cursor: pointer;
        transition: 0.15s ease;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }
    &:not(:hover) {
        transition: 0.15s ease;
    }
`;

const NotSuccessButtonBox = styled.button`
    padding: 10px 24px;
    background-color: #f99;
    border-radius: 16px;
    text-align: center;
    border: none;
    &:hover {
    cursor: pointer;
        transition: 0.15s ease;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }
    &:not(:hover) {
    transition: 0.15s ease;
    }
`;

const Text = styled.span`
  ${fonts.Text300};
  color: black;
  font-size: 16px
`;