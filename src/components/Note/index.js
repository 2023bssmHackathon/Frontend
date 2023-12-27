import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../styles/color";
import font from "../../styles/font";

function Note({Writer, NoteContent, NoteProduct}) {
  return (
    <Box>
      <TextTitle>{Writer}님의 쪽지</TextTitle>
      <Product>{NoteProduct}</Product>
      <Contents>{NoteContent}</Contents>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  width: 387px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  background: #fff8de;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TextTitle = styled.span`
  color: #000;

  font-family: Gmarket Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Product = styled.span`
  color: #000;

  font-family: Gmarket Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Contents = styled.span`
  color: #000;

  text-align: center;
  font-family: Gmarket Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export default Note;