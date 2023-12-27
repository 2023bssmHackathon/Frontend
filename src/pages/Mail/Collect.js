import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect } from "react";
import Note from "../../components/Note/index"

function Collect() {
  return (
    <Note
      Writer="2111 원설아"
      NoteProduct="마루는강쥐 마우스패드"
      NoteContent="와 진짜 귀여워요!
1월 9일 종업식 끝나고 사러 가도 될까요?"
    />
  );
}

export default Collect;
