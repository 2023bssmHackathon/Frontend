import styled from "styled-components";
import Layout from  "../layout/Layout";
import Button from "../components/common/Button";
import TitleText from "../components/common/TitleText";
import Input from "../components/common/Input";
import color from "../styles/color";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PostButtonBox from "../components/PostButtonBox";
import { useAddProductMutation } from "../api/product/mutation";

function Write() {
    const navigate = useNavigate();
    const mutation = useAddProductMutation();

    const [selectedImage, setSelectedImage] = useState(null);
    const [formValues, setFormValues] = useState({
        title: '',
        writer: '',
        price: '',
        info: '',
        type: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
          setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        
        if (fileField && fileField.files[0]) {
            formData.append("image", fileField.files[0]);
        }

      formData.append("title", "마루는 강쥐 마우스 패드");
      formData.append("writer", "2111원설아");
      formData.append("price", 13000);
      formData.append("info", "귀여운 마우스 패드");
      formData.append("deal", "미정");
      formData.append("type", "sell");

        mutation.mutate(formData);
        navigate("/");
    };

    return (
        <>
            <Layout>
                <TitleText title="냥발 등록하기" useLine={true} />

                <InputBox>
                    <ThingText>냥발 사진</ThingText>
                    <Col>
                        <ImageUploadBox
                            onClick={() => document.getElementById("fileInput")?.click()}
                        >
                        {selectedImage ? (
                        <img
                            src={selectedImage}
                            alt="Selected"
                            style={{ width: "100%", height: "100%" }}
                        />
                        ) : (
                        <img src="/images/icon/camera.png" alt="카메라" />
                        )}
                            <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                            />
                    </ImageUploadBox>
                    <ImgPlaceholder>소중한 냥발의 사진을 등록해 주세요.</ImgPlaceholder>
                </Col>
            </InputBox>
            <HorizonLine></HorizonLine>
                <Input
                    name="writer"
                    thingText="작성자명" 
                    placeholder="작성자의 이름을 작성해 주세요."
                    isShortInput={true}
                    onChange={handleInputChange}
                />
                <Input
                    name="title"
                    thingText="냥발 제목" 
                    placeholder="냥발의 제목을 정해주세요. ( Ex. 나의 소중한 에어팟, 고양이도 반한 고등어구이 )"
                    isTextInput={true}
                    onChange={handleInputChange}
                />
                <Input 
                    name="info"
                    thingText="냥발 설명" 
                    placeholder="냥발의 설명을 적어주세요.
                    ( Ex. 애지중지 하던 에어팟입니다.. 최근 오른쪽을 잃어버려 오른쪽만 가진 분과 결투를 바랍니다. 쪽지주세요. )"
                    isTextArea={true}
                    onChange={handleInputChange}
                />
                <Input 
                    name="price"
                    thingText="냥발 가격" 
                    placeholder="냥발의 가격을 입력해 주세요."
                    isShortInput={true}
                    onChange={handleInputChange}
                />
                <InputBox>
                    <ThingText>냥발 종류</ThingText>
                    <StyledRadioWrapper>
                        <>
                            <StyledRadio 
                                type="radio" 
                                name="type" 
                                value="sell" 
                                checked={formValues.type === 'sell'} 
                                onChange={handleInputChange} 
                            />
                            <RadioLabel>냥발 판매</RadioLabel>
                        </>
                        <>
                            <StyledRadio type="radio" name="type" value="rental" />
                            <RadioLabel>냥발 대여</RadioLabel>
                        </>
                    </StyledRadioWrapper>
                </InputBox>
                <PostButtonBox isProduct={true} onPost={handleSubmit} />
            </Layout>
        </>
    )
}

export default Write;

const InputBox = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: row;
    gap: 100px;
`;

const ThingText = styled.span`
    font-size: 24px;
`;

const ImageUploadBox = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 10px;
    border: 2px solid ${color.Cheese_1};
    background-color: ${color.Cheese_3};
    &:hover {
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgPlaceholder = styled(ThingText)`
    color: #9c9c9c;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`

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