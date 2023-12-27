import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../styles/color"
import font from "../../styles/font"

function IntroduceText({Text1, Text2}) {
    return (
        <TextBox>
            <TextBox1>{Text1}</TextBox1>
            <TextBox2>{Text2}</TextBox2>
        </TextBox>
    );
}

const TextBox = styled.div`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TextBox1 = styled.span`
    ${font.Text300};
    font-size: 24px;
`;

const TextBox2 = styled.span`
    ${font.Text500};
    font-size: 32px;
`;

const Box = styled.div`
    gap: 24px;
`;

export default IntroduceText;