import styled from "styled-components";
import color from "../../styles/color";
import font from "../../styles/font";
import Button from "../common/Button";

function PostButtonBox(isProduct) {
    return (
        <NoticeBox>
            <NoticeText>
                {isProduct ? 
                    "작성하던 냥발은 저장되지 않습니다. 창을 닫지 않게 조심해주세요." 
                    : 
                    "작성하던 쪽지는 저장되지 않습니다. 창을 닫지 않게 조심해주세요."
                }
            </NoticeText>
            <ButtonsBox>
                {isProduct ? 
                    <Button text="냥발 등록하기" buttonColor="Cheese_1" /> 
                    :
                    <Button text="쪽지 보내기" buttonColor="Cheese_1" />
                }
                <Button text="처음으로 돌아가기" buttonColor="Orange_1" />
            </ButtonsBox>
        </NoticeBox>
    )
}

export default PostButtonBox;

const NoticeBox = styled.div`
    background-color: ${color.Cheese_3};
    padding: 48px 415px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    bottom: 80px;
`;

const NoticeText = styled.span`
    font-size: 20px;
`;

const ButtonsBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`;