import styled from "styled-components";
import Layout from  "../layout/Layout";
import ProductItem from "../components/ProductItem";

function Main() {
    return (
      <Layout>
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