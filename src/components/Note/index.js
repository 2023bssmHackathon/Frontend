import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../styles/color";
import font from "../../styles/font";
import MiniButton from "../MiniButton";

function Note({Writer, NoteContent, NoteProduct}) {
  return (
    <Box>
      <Col>
        <TextTitle><b>{Writer}</b> 님의 쪽지</TextTitle>
        <div>
          <Product>{NoteProduct}</Product>
        </div>
      </Col>
      <Contents>{NoteContent}</Contents>
      <Row> 
        <MiniButton text="수락" isSuccess={true} onClick={() => {}} />
        <MiniButton text="거절" isSuccess={false} onClick={() => {}} />
      </Row>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  width: auto;
  max-width: 430px;
  height: auto;
  min-height: 250px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;

  background: #fff8de;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const TextTitle = styled.span`
  font-size: 20px;
`;

const Product = styled.span`
  font-size: 14px;
  color: gray;
  white-space: normal;
  word-break: keep-all;
  word-wrap: break-word;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.span`
  text-align: center;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-self: flex-end;
`;

export default Note;