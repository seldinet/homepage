import styled from 'styled-components'

import { BaseH2, BaseText } from '../../components'

const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
    height: 920px;
    
    padding: 80px 0;
    background: linear-gradient(to bottom, #e9eeff, #fff);

    > div:first-child {
        width: 100%;
        max-width: 1200px;
    }
`


export default function Plan() {
    return (
        <PlanContainer>
            <div>
                <BaseH2 margin="0 0 20px" textAlign="left" fontSize={32} fontWeight="bold" lineHeight={1.5} color="#333d5b">
                    기간 한정 특가 이벤트
                </BaseH2>
                <BaseText textAlign="left" fontSize={20} lineHeight={1.6} color="#4e5968">
                    {`지금 Starter플랜, EXPERT 플랜을 구매할 시, 연간 플랜 할인가로 셀디 서비스를 이용하실 수 있습니다.
지금 바로 50% 할인된 가격으로 서비스를 이용해보세요.(월 플랜 최소 사용 기간 4개월)`}
                </BaseText>
            </div>
        </PlanContainer>
    )
}