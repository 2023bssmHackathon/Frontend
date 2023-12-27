import styled from "styled-components";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout"; 
import { useLocation } from "react-router";
import Button from "../components/common/Button";
import TitleText from "../components/common/TitleText";
import ProductItem from "../components/ProductItem";
import { SaleItemData } from "../mocks/ProductItem";

import color from "../styles/color";
import font from "../styles/font";


function Detail({img, title, price, seller}) {
    const { pathname } = useLocation();
    const { id } = useParams();

    return (
        <Layout>
            <TitleText title="냥발 구매하기" useLine={true}/>
            <>
                <DetailBox>
                    <ProductImg src="https://i.namu.wiki/i/qLHBqQCkDCnivN_6TyTD4nGdLzRRA8cqsybsrH9foke0w56twTmnACNBhoab8dsGn5DPn03NR0TZw2HN1WRQuw.webp" />
                    <ProductDetailBox>
                        <ProductInfoBox>
                            <TitleBoldText>{title}마루는 강쥐 마우스 패드</TitleBoldText>
                            <BoldText>
                                {price}13000
                                <TitleBoldText> 원</TitleBoldText>
                            </BoldText>
                            <GrayText>{seller}판매자 : 2111 원설아</GrayText>
                        </ProductInfoBox>
                        <Button text="쪽지 보내기" width="478px" buttonColor="Cheese_1" />
                    </ProductDetailBox>
                </DetailBox>
                <HorizonLine></HorizonLine>
            </>
            <InfoBox>
                <TitleText title="냥발 정보" useLine={false} />
                <InfoContentBox>
                    미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 
                    지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다.. 시노는 말이많아진거같다 좋은선생이고..그리고 보루토왜욕하냐 귀여운데 나루토를보는것같다 성격도 닮았어 그리고버루토에 나루토사스케 둘이싸워도 이기는 신같은존재 나온다는게 사실임?? 그리고인터닛에 쳐봣는디 이거 ㄹㅇㄹㅇ 진짜팩트냐?? 저적이 보루토에 나오는 신급괴물임?ㅡ 나루토사스케 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라 ;; 진짜 저건 개오지는데.. 저게 ㄹㅇ이면 진짜 꼭봐야돼 진짜 세계도 파괴시키는거아니야 .. 와 진짜 나루토사스케가 저렇게 되다니 진짜 눈물나려고했다.. 버루토그라서 계속보는중인데 저거 ㄹㅇ이냐..? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..
                </InfoContentBox>
                <HorizonLine></HorizonLine>
            </InfoBox>
            <SimilarItem>
                <TitleText title="'마루는 강쥐 마우스패드'와 비슷한 상품 보기" useLine={false} />
                <ItemGrid>
                {SaleItemData.map((item, index) => (
                    <ProductItem
                        key={index}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        uploadTime={item.uploadTime}
                    />
                ))}
                </ItemGrid>
            </SimilarItem>
        </Layout>
    );
  }
  
export default Detail;

const DetailBox = styled.div`
    margin: 50px auto;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 44px;

    color: ${color.Gray};
`;

const ProductImg = styled.img`
    width: 673px;
    height: 404px;
    border-radius: 5px;
`;

const ProductInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TitleBoldText = styled.span`
    ${font.Text500};
    font-size: 36px;
    color: black;
`;

const BoldText = styled(TitleBoldText)`
    ${font.Text700};
    color: black;
    font-size: 56px;
`;

const GrayText = styled.span`
    font-size: 24px;
`;

const ProductDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HorizonLine = styled.div`
    margin-top: 20px;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid black;
    line-height: 0.1em;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin: 36px auto;
`;

const InfoContentBox = styled.div`
    width: 100%;
    font-size: 20px;
`;

const SimilarItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
`