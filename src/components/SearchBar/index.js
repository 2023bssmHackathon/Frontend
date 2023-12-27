import styled from "styled-components";
import color from "../../styles/color";
import font from "../../styles/font";

function SearchBar () {
  return (
    <SearchBarBox>
      <SearchIconBox src="/images/icon/search.png" />
      <TextInput placeholder="상품명을 입력해주세요." />
      <SearchIconBox src="/images/icon/airplane.png" />
      <IconGroup>
            <IconBox src="/images/icon/Vector.png" />
            <RowTextInput placeholder="쪽지함" />
      </IconGroup>
      <IconGroup>
            <IconBox src="/images/icon/footpoint.png" />
            <RowTextInput placeholder="냥발 쓰기" />
      </IconGroup>
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  display: flex;
  width: 859px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const SearchIconBox = styled.img`
  width: 24px;
  height: 24px;
`;

const IconBox = styled.img`
    width: 45px;
`;

const TextInput = styled.input`

`;

const RowTextInput = styled.input`
`;

const IconGroup = styled.div`
    width: 78px;
    height: 78px;
`;

export default SearchBar;