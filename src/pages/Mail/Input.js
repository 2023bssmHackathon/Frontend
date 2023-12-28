import styled from "styled-components";
import Layout from "../../layout/Layout";
import TitleText from "../../components/common/TitleText";
import PostButtonBox from "../../components/PostButtonBox";
import color from "../../styles/color";
import font from "../../styles/font";
import { useState } from "react";
import { Link } from "react-router-dom";

function Input() {
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <Layout>
                <TitleText 
                    title="사용자의 이름을 입력해 주세요."
                    useLine={true}
                />
                <Box>
                    <Row>
                        <StyledInput onChange={handleInputChange} value={name}  />
                        <StyledLink to={`/mail/collect/${name}`}>
                            <StyledButton>등록</StyledButton>
                        </StyledLink>
                    </Row>
                </Box>
            </Layout>
        </>
    )
}

export default Input;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const StyledInput = styled.input`
    padding: 8px 8px;
    ${font.Text300};
    width: 240px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${color.Cheese_1};
`;

const StyledButton = styled.button`
    ${font.Text300};
    padding: 18px 36px;
    background-color: ${color.Cheese_1};
    color: white;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid ${color.Cheese_1};
`;

const Box = styled.div`
    margin-top: 60px;
    display: flex;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;