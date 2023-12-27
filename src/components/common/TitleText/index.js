import styled from "styled-components";
import color from "../../../styles/color";
import font from "../../../styles/font";

function TitleText({title, subTitle, useLine}) {
    return (
        <TitleBox>
            <Title>{title}</Title>
            {subTitle && <SecondTitle>{subTitle}</SecondTitle>}
            {useLine && <HorizonLine></HorizonLine>}
        </TitleBox>
    )
};

export default TitleText;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled.span`
    ${font.Text700};
    font-size: 28px;
`;

const SecondTitle = styled.span`
    margin-top: 8px;
    ${font.Text300};
    font-size: 22px;
    color: ${color.Gray};
`;

const HorizonLine = styled.div`
    margin-top: 20px;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid black;
    line-height: 0.1em;
`;