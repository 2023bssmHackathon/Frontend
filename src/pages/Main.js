import styled from "styled-components";
import Layout from  "../layout/Layout";
import ProductItem from "../components/ProductItem";
import IntroduceText from "../components/IntroduceText";
import { SaleItemData, BorrowItemData } from "../mocks/ProductItem";
import { Link } from "react-router-dom";

function Main() {
    return (
      <Layout>
        <BannerBox>
          배너부분
        </BannerBox>
        <IntroduceText
          Text1="친구들이 올려놓은 냥발을 겟!"
          Text2="오늘의 까리한 냥발 추천 😼"
        />
        <ProductGrid>
        {/* 모의 데이터 사용해 ProductItem 사용하기 */}
        {SaleItemData.map((item, index) => (
          <StyledLink to={`/detail/${index}`} key={index}>
            <ProductItem
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              uploadTime={item.uploadTime}
            />
          </StyledLink>
        ))}
        </ProductGrid>


        <IntroduceText
          Text1="냥발도 한 번 쓰려면 없다더니..."
          Text2="빌려줘 친구들아! 😿"
        />
        <ProductGrid>
          {BorrowItemData.map((item, index) => (
            <ProductItem
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              uploadTime={item.uploadTime}
            />
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
  background-color: #FFECA7;
  margin: 66px 0 41px 0;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;