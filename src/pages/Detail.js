import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Layout from "../layout/Layout"; 
import { useLocation } from "react-router";
import Button from "../components/common/Button";
import TitleText from "../components/common/TitleText";
import ProductItem from "../components/ProductItem";
import { SaleItemData } from "../mocks/ProductItem";
import { useQuery } from "react-query";
import { getProductById } from "../api/product/api";

import color from "../styles/color";
import font from "../styles/font";


function Detail() {
    const { pathname } = useLocation();
    const { id } = useParams();

    const { data: product } = useQuery({
        queryKey: ["product"],
        queryFn: () => getProductById(id),
    });

    return (
        <Layout>
            <TitleText title="냥발 구매하기" useLine={true}/>
            {product &&
            <>
                <>
                    <DetailBox>
                        <ProductImg src="https://i.namu.wiki/i/qLHBqQCkDCnivN_6TyTD4nGdLzRRA8cqsybsrH9foke0w56twTmnACNBhoab8dsGn5DPn03NR0TZw2HN1WRQuw.webp" />
                        <ProductDetailBox>
                            <ProductInfoBox>
                                <TitleBoldText>{product.title}</TitleBoldText>
                                <BoldText>
                                    {product.price}
                                    <TitleBoldText> 원</TitleBoldText>
                                </BoldText>
                                <GrayText>{product.write}</GrayText>
                            </ProductInfoBox>
                            <StyledLink to={`/mail/send/${id}`}>
                                <Button text="쪽지 보내기" width="478px" buttonColor="Cheese_1" />
                            </StyledLink>
                        </ProductDetailBox>
                    </DetailBox>
                    <HorizonLine></HorizonLine>
                </>
                <InfoBox>
                    <TitleText title="냥발 정보" useLine={false} />
                    <InfoContentBox>
                        {product.info}
                    </InfoContentBox>
                    <HorizonLine></HorizonLine>
                </InfoBox>
                <SimilarItem>
                    <TitleText title={`'${product.title}'와 비슷한 상품 보기`} useLine={false} />
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
            </>
            }
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
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;