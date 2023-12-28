import styled from "styled-components";
import Note from "../../components/Note/index"
import Layout from "../../layout/Layout";
import TitleText from "../../components/common/TitleText";
import NoteItemData from "../../mocks/NoteItem";
import { useQuery } from "react-query";
import { getNoteByNumber } from "../../api/note/api";

function Collect() {
  const { data: note } = useQuery({
    queryKey: ["note"],
    queryFn: () => getNoteByNumber("2111원설아"),
  });

  return (
    <Layout>
      <TitleText 
        title="쪽지함"
        subTitle="거래할 날짜와 시간이 명확히 적히지 않은 쪽지는 조심하세요!"
        useLine={true}
      />
      <NoteGrid>
        {note ? 
          note.map((item, index) => (
          <Note
            Writer={item.writer}
            NoteProduct={item.boardTitle}
            NoteContent={item.info}
          />
        ))
        : 
        <><p>받은 쪽지가 없어요.</p></>
        }
      </NoteGrid>
    </Layout>
  );
}

export default Collect;

const NoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 32px 0px;
`