import styled from "styled-components";
import Layout from  "../layout/Layout";
import ProductItem from "../components/ProductItem";
import IntroduceText from "../components/IntroduceText";

function Main() {
    return (
      <Layout>
        <IntroduceText
          Text1="친구들이 올려놓은 냥발을 겟!"
          Text2="오늘의 까리한 냥발 추천 😼"
        />
        <ProductItem
          img="https://i.namu.wiki/i/qLHBqQCkDCnivN_6TyTD4nGdLzRRA8cqsybsrH9foke0w56twTmnACNBhoab8dsGn5DPn03NR0TZw2HN1WRQuw.webp"
          title="마루는 강쥐 마우스 패드"
          price={13000}
          uploadTime={3}
        />
        <IntroduceText
          Text1="냥발도 한 번 쓰려면 없다더니..."
          Text2="빌려줘 친구들아! 😿"
        />
        <ProductItem
          img="https://i.namu.wiki/i/qLHBqQCkDCnivN_6TyTD4nGdLzRRA8cqsybsrH9foke0w56twTmnACNBhoab8dsGn5DPn03NR0TZw2HN1WRQuw.webp"
          title="마루는 강쥐 마우스 패드"
          price={13000}
          uploadTime={3}
        />
      </Layout>
    );
  }
  
export default Main;