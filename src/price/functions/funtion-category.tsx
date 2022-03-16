import styled from 'styled-components'

import { BaseText } from '../../components'

const Container = styled.li`
    display: flex;
    box-sizing: border-box;

    padding: 0px 16px 40px 16px;

    & > div:first-child {
        display: flex;
        flex-direction: column;

        width: 380px;
        flex-shrink: 0;

        @media(max-width: 768px) {
            width: 120px;
        }

        @media(max-width: 768px) {
            & > div:last-child {
                display: none;
             }
        }
    }

    & > div:not(:first-child) {
        max-width: 275px;
        width: 100%;
        flex-grow: 0;
        flex-shrink: 1;
    }
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    @media(max-width: 768px) {
        & > div:nth-child(2) {
            display: none;
        }
    }
`

const ResponsiveText = styled(BaseText)`
    @media(min-width:480px) and (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 479px) {
        font-size: 10px;
    }
`


export function FunctionCategory() {
    return (
        <Container>
            <div />
                <ItemContainer>
                    <ResponsiveText fontSize={24} fontWeight="bold" color="#e37920" textAlign='right'>STARTER</ResponsiveText>
                    <BaseText fontSize={14} color="#4e5968" textAlign='center' margin="8px 0 0">{`중국 수출,  중국인 고객 마케팅을
시작하는 기업`}</BaseText>
                </ItemContainer>
                <ItemContainer>
                    <ResponsiveText fontSize={24} fontWeight="bold" color="#16ac3e" textAlign='right'>EXPERT</ResponsiveText>
                    <BaseText fontSize={14} color="#4e5968" textAlign='center' margin="8px 0 0">{`중국 자사몰을 통한 직접 수출을
목표로 하는 기업 (미니앱 무료 구축)`}</BaseText>
                </ItemContainer>
                <ItemContainer>
                    <ResponsiveText fontSize={24} fontWeight="bold" color="#0940b1" textAlign='right'>LEADER</ResponsiveText>
                    <BaseText fontSize={14} color="#4e5968" textAlign='center' margin="8px 0 0">{`수익율 향상을 목표로 전문화된
CRM 마케팅이 필요한 기업`}</BaseText>
                </ItemContainer>
        </Container>
    )
}