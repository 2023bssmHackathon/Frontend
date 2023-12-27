import styled from "styled-components";
import font from "../../../styles/font";
import color from "../../../styles/color";

function Input({isEssential, thingText, placeholder, ...props}) {
    return (
        <>
            <InputBox>
                <ThingText>{isEssential && "* "}{thingText}</ThingText>
                {props.isTextInput && <StyledInput placeholder={placeholder} />}
                {props.isTextArea && <StyledTextArea placeholder={placeholder} />}
                {props.isPriceInput && <StyledPriceInput placeholder={placeholder} />}
                {props.isRadio && (
                    <StyledRadioWrapper>
                        <>
                            <StyledRadio type="radio" name="radioGroup" value="냥발 판매" />
                            <RadioLabel>냥발 판매</RadioLabel>
                        </>
                        <>
                            <StyledRadio type="radio" name="radioGroup" value="냥발 대여" />
                            <RadioLabel>냥발 대여</RadioLabel>
                        </>
                    </StyledRadioWrapper>
                )}
            </InputBox>
            <HorizonLine></HorizonLine>
        </>
    )
}

export default Input;

const InputBox = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: row;
    gap: 100px;
`;

const ThingText = styled.span`
    font-size: 24px;
`;

const StyledInput = styled.input`
    min-width: 75%;
    max-width: 80%;
    padding: 20px 28px;
    border: 2px solid #9C9C9C;
    border-radius: 10px;
    outline: none;
    font-size: 24px;
    &::placeholder {
        ${font.Text500};
        color: ${color.Gray};
    }
`;

const StyledTextArea = styled.textarea`
    min-width: 75%;
    max-width: 80%;
    padding: 20px 28px;
    border: 2px solid #9C9C9C;
    border-radius: 10px;
    outline: none;
    font-size: 24px;
    &::placeholder {
        ${font.Text500};
        color: ${color.Gray};
    }
`;

const StyledPriceInput = styled.input`
    width: 50%;
    padding: 20px 28px;
    border: 2px solid #9C9C9C;
    border-radius: 10px;
    outline: none;
    font-size: 24px;
    &::placeholder {
        ${font.Text500};
        color: ${color.Gray};
    }  
`;

const HorizonLine = styled.div`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    line-height: 0.1em;
`;

const StyledRadioWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StyledRadio = styled.input`
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid black;
    border-radius: 50%;
    outline: none;
    position: relative;
    cursor: pointer;

    &:checked {
        background-color: #000000;
        border: none;
    }

    &:checked::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #000000;
    }
`;

const RadioLabel = styled.label`
    font-size: 24px;
    margin-right: 100px;
`;