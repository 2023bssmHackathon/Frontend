import styled from "styled-components";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout"; 
import { useLocation } from "react-router";
import { useEffect } from "react";

import color from "../styles/color";
import font from "../styles/font";


function Detail({img, title, price, seller}) {
    const { pathname } = useLocation();
    const { id } = useParams();

    return (
        <Layout>
            <DetailBox>
                <ProductImg src={img} />
                <ProductInfoBox>
                    <TitleText>{title}</TitleText>
                    <BoldText>
                        {price}
                        <TitleText>원</TitleText>
                    </BoldText>
                    <GrayText>{seller}</GrayText>
                </ProductInfoBox>
            </DetailBox>
        </Layout>
    );
  }
  
export default Detail;

const DetailBox = styled.div`
    width: 100%;
    height: 497px;
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
    gap: 28px;
`;

const TitleText = styled.span`
    ${font.Text500};
    font-size: 36px;
`;

const BoldText = styled(TitleText)`
    ${font.Text700};
    
`;

const GrayText = styled.span`

`