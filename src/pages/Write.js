import styled from "styled-components";
import Layout from  "../layout/Layout";
import Button from "../components/common/Button";
import TitleText from "../components/common/TitleText";
import Input from "../components/common/Input";
import color from "../styles/color";
import { useState } from "react";
import PostButtonBox from "../components/PostButtonBox";

function Write() {
    const [selectedImage, setSelectedImage] = useState();

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
          setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <Layout>
                <TitleText title="냥발 등록하기" useLine={true} />

                <ImgInputBox>
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
            </ImgInputBox>
            <HorizonLine></HorizonLine>

                <Input
                    thingText="냥발 제목" 
                    placeholder="냥발의 제목을 정해주세요. ( Ex. 나의 소중한 에어팟, 고양이도 반한 고등어구이 )"
                    isTextInput={true}
                />
                <Input 
                    thingText="냥발 설명" 
                    placeholder="냥발의 설명을 적어주세요.
                    ( Ex. 애지중지 하던 에어팟입니다.. 최근 오른쪽을 잃어버려 오른쪽만 가진 분과 결투를 바랍니다. 쪽지주세요. )"
                    isTextArea={true}
                />
                <Input 
                    thingText="냥발 가격" 
                    placeholder="냥발의 가격을 입력해 주세요."
                    isPriceInput={true}
                />
                <Input
                    thingText="냥발 종류"
                    isRadio={true}
                />

            </Layout>
            <PostButtonBox isProduct={true} />
        </>
    )
}

export default Write;

const ImgInputBox = styled.div`
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