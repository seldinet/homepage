import styled from 'styled-components'

import { BaseH3 } from '../../components'

const InfomationContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    align-items: center;
    padding: 0 30px;
    margin-top: 80px;
    margin-bottom: 120px;
    box-sizing: border-box;

    & > div:first-child {
        width: 100%;
        max-width: 1200px;

        & > ul {
            & > ul {
                padding: 20px;
                border-radius: 12px;
                background-color: #f4f5f7;
                margin-bottom: 20px;

                & > li {
                    font-size: 20px;
                    line-height: 1.8;
                    color: "#4e5968";
              
                    @media (max-width: 768px) {
                        font-size: 14px;
                    }
                }
            }
            & > li {
                font-size:20px;
                line-height: 1.6;
                color: #4e5968;
                margin-bottom: 12px;

                  
                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }
`

const ResponsiveH3 = styled(BaseH3)`
    @media (max-width: 768px) {
        font-size: 26px;
    }
`

export default function Information() {
    return (
        <InfomationContainer>
            <div>
              <ResponsiveH3 margin="0 0 20px" fontSize={32} fontWeight="bold" lineHeight={1.5} textAlign="left" color="#333d4b">셀디 서비스 이용 안내</ResponsiveH3>
              <ul>
                  <li>• 서비스 제공 기간은 결제 당일 다음날부터 산정됩니다.</li>
                  <li>• 월 플랜의 최소 사용 기간은 4개월 입니다.</li>
                  <li>• 서비스 환불 안내</li>
                  <ul>
                    <li>- 서비스를 결제 시점으로부터 영업일 기준 1일 이내 환불할 경우, 90% 환불이 가능합니다.</li>
                    <li>- 영업일 기준 1일 이상 2주 이내 환불할 경우, 50% 환불이 가능합니다.</li>
                    <li>- 영업일 기준 2주 이상 한달 이내 환불할 경우, 30% 환불이 가능합니다. (한 달 이후 서비스 환불 불가)</li>
                  </ul>
                  <li>• 월 플랜의 최소 사용기간은 4개월 입니다</li>
              </ul>
            </div>

        </InfomationContainer>
    )
}