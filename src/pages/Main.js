import styled from "styled-components";
import Layout from  "../layout/Layout";
import ProductItem from "../components/ProductItem";
import IntroduceText from "../components/IntroduceText";
import { SaleItemData, BorrowItemData } from "../mocks/ProductItem";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getSellProduct, getRentalProduct, getImgBySrc } from "../api/product/api";

function Main() {
  const sellProductsQuery = useQuery("sellProducts", getSellProduct);
  const sellProducts = sellProductsQuery.data;

  const rentalProductsQuery = useQuery("rentalProducts", getRentalProduct);
  const rentalProducts = rentalProductsQuery.data;

    return (
      <Layout>
        <BannerBox>
          <BannerImg src="images/Banner1.png" />
        </BannerBox>
        <IntroduceText
          Text1="친구들이 올려놓은 냥발을 겟!"
          Text2="오늘의 까리한 냥발 추천 😼"
        />
        <ProductGrid>
        {sellProducts && sellProducts.map((item, index) => (
          <StyledLink to={`/detail/${item.boardId}`} key={item.boardId}>
            <ProductItem
              id={item.boardId}
              key={index}
              img={item.thumbnail}
              title={item.title}
              price={item.price}
              uploadTime={item.createdAt}
            />
          </StyledLink>
        ))}
        </ProductGrid>


        <IntroduceText
          Text1="냥발도 한 번 쓰려면 없다더니..."
          Text2="빌려줘 친구들아! 😿"
        />
        <ProductGrid>
          {rentalProducts && rentalProducts.map((item, index) => (
            <StyledLink to={`/detail/${item.boardId}`} key={item.boardId}>
              <ProductItem
                id={item.boardId}
                key={index}
                img={item.thumbnail}
                title={item.title}
                price={item.price}
                uploadTime={item.createdAt}
              />
            </StyledLink>
          ))}
        </ProductGrid>
      </Layout>
    );
  }
  
export default Main;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
  margin: 24px 0px;
`

const BannerBox = styled.div`
  width: 100%;
  height: 320px;
  margin: 66px 0 41px 0;
`;

const BannerImg = styled.img`
  width: 100%; /* 부모의 너비에 맞춥니다 */
  height: 100%; /* 부모의 높이에 맞춥니다 */
  object-fit: cover; /* 이미지가 박스를 꽉 채우도록 합니다 */
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;