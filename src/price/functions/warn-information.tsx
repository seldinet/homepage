import styled from 'styled-components'

import { BaseText } from '../../components'
import { addPrefix } from '../../utils/addPrefix'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: 100%;
    padding: 20px 0;
    border-radius: 12px;
    background-color: #fff4f2;
    margin-top: 40px;

    @media(min-width: 769px) {
        display: none;
    }
`

const ResponsiveImage = styled.img`
    width: 36px;
    height: 32px;
    margin-right: 12px;

    @media(max-width: 599px) {
        width: 32px;
        height: 28px;
    }

    @media(max-width: 479px) {
        width: 24px;
        height: 20px;
    }
`

const ResponsiveText = styled(BaseText)`
    @media(max-width: 599px) {
        font-size: 24px;
    }

    @media(max-width: 479px) {
       font-size: 16px;
    }
`

export default function WarnInformation() {
    return (
        <Container>
            <ResponsiveImage src={addPrefix("/images/warn-image.png")}/>
            <ResponsiveText color="#333d4b" fontSize={32} textAlign="center">자세한 설명은 PC로 확인해주세요</ResponsiveText>
        </Container>
    )
}