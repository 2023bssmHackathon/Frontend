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
                {props.isShortInput && <StyledShortInput placeholder={placeholder} />}
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
    ${font.Text500};
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
    ${font.Text500};
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

const StyledShortInput = styled.input`
    ${font.Text500};
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