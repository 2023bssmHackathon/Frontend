import styled from "styled-components";
import color from "../../styles/color";
import font from "../../styles/font";

function ProductItem({img, title, price, uploadTime}) {
    return (
        <ItemBox>
            <ItemImg src={img} />
            <ItemInfoBox>
                <ItemTitle>{title}</ItemTitle>
                <RowBox>
                    {/* 가격에 천 단위로 컴마 찍기 */}
                    <ItemPrice>{price.toLocaleString('ko-KR')}원</ItemPrice>
                    <ItemUploadTime>{uploadTime}시간 전</ItemUploadTime>
                </RowBox>
            </ItemInfoBox>
        </ItemBox>
    );
  }
  
export default ProductItem;

const ItemBox = styled.div`
    width: 225px;
    height: 313px;
    border-radius: 5px;
    background-color: ${color.White};
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover {
        cursor: pointer;
    }
`;

const ItemImg = styled.img`
    border-radius: 5px;
    width: 225px;
    height: 225px;
`;

const ItemInfoBox = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

    gap: 8px;
`;

const ItemTitle = styled.span`
    ${font.Text300}
    font-size: 16px;
`;

const ItemPrice = styled.span`
    ${font.Text700}
    font-size: 20px;
`;

const ItemUploadTime = styled.span`
    ${font.Text300}
    font-size: 12px;
    color: ${color.Gray};
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;