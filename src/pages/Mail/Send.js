import styled from "styled-components";
import Layout from "../../layout/Layout";
import TitleText from "../../components/common/TitleText";
import Input from "../../components/common/Input";
import PostButtonBox from "../../components/PostButtonBox";

function Send() {
    return (
        <>
            <Layout>
                <TitleText 
                    title="2111 원설아님에게 쪽지 보내기"
                    subTitle="거래할 날짜와 시간이 명확히 적혔는지 확인하세요!"
                    useLine={true}
                />
                <Input
                    thingText="쪽지 내용"
                    placeholder="거래 날짜와 시간을 포함한 쪽지를 작성해주세요.
                    ( Ex. 3월 1일 기숙사 점호 후 사러 갈게요! )"
                    isTextArea={true}
                />
            </Layout>
            <PostButtonBox isProduct={false} />
        </>
    )
}

export default Send;