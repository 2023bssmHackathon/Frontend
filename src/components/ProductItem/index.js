import styled from "styled-components";
import color from "../../styles/color";
import font from "../../styles/font";
import { useQuery } from "react-query";
import { getImgBySrc } from "../../api/product/api";

function ProductItem({id, img, title, price, uploadTime}) {
    const { data: imgFile } = useQuery({
        queryKey: ["imgFile"],
        queryFn: () => getImgBySrc(img),
      });

    function getTimeDifference(timestamp) {
        const currentTime = new Date(); // 현재 시간
        const targetTime = new Date(timestamp); // 대상 시간
      
        const timeDiff = Math.abs(currentTime.getTime() - targetTime.getTime()); // 시간 차이 (밀리초)
        const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)); // 시간 단위로 변환
      
        if (hoursDiff > 0) {
          return `${hoursDiff}시간 전`;
        } else {
          return "방금 전";
        }
      }

    const time = getTimeDifference(uploadTime);

    return (
        <ItemBox>
            <ItemImg src={`https://port-0-backend-1gksli2alphjrcb7.sel5.cloudtype.app/${img}`} />
            {/* <ItemImg src="images/235564634_1_1700877873_w180.jpg" /> */}
            <ItemInfoBox>
                <ItemTitle>{title}</ItemTitle>
                <RowBox>
                    {/* 가격에 천 단위로 컴마 찍기 */}
                    <ItemPrice>{price.toLocaleString('ko-KR')}원</ItemPrice>
                    <ItemUploadTime>{time}</ItemUploadTime>
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