import styled from "styled-components";
import color from "../../styles/color";
import font from "../../styles/font";

function SearchBar () {
  return (
    <SearchBarBox>
      <RowCenter>
        <SearchIconBox src="/images/icon/search.png" />
        <TextInput placeholder="상품명을 입력해주세요." />
      </RowCenter>
      <SearchIconBox src="/images/icon/airplane.png" />
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  display: flex;
  width: 859px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 5px solid ${color.Cheese_1};
`;

const SearchIconBox = styled.img`
  width: 24px;
  height: 24px;
`;



const RowCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextInput = styled.input`
  ${font.Text500};
  border: none;
  outline: none;
  font-size: 24px;
  &::placeholder {
    color: ${color.Gray};
  }
  margin-top: 5px;
`;

export default SearchBar;