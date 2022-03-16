
import { useState, useCallback } from 'react'
import styled from 'styled-components'

import { BaseH2, BaseText } from '../../components'
import PlanItem from './plan-item'

import { PLAN } from './contants'

const PlanContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
    
    padding: 80px 30px;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #e9eeff, #fff);

    & > div:first-child {
        width: 100%;
        max-width: 1200px;

        & > ul {
            display: flex;
            justify-content: start;
            margin: 0 auto;
            flex-wrap: wrap;

            @media (min-width: 1255px) {
                & > li:not(:last-child) {
                    margin-right: 24px;
                }
            }

            @media (min-width: 768px) and (max-width: 1254px) {
                & > li {
                    width: 48%;
                    margin-bottom: 24px;
                }
                & > li:not(:nth-child(2n)) {
                    margin-right: 24px;
                }
            }

            @media (min-width: 320px) and (max-width: 767px) {
                & > li {
                    width: 100%;
                    margin-bottom: 24px;
                }
            }

            
        }
    }
`

const ResponsiveH2 = styled(BaseH2)`
    @media (max-width: 768px) {
        font-size: 26px;
    }
`

const ResponsiveText = styled(BaseText)`
    @media (max-width: 768px) {
        font-size: 16px;
    }
`


export default function Plan() {
    const [plan,setPlan] = useState({
        key: 'month',
        title: '월 플랜'
    })

    const handlePlan = useCallback((plan: {key: string, title: string}) => {
        setPlan(plan)
    },[])


    const divdedValue = plan.key as 'month' | 'year'

    return (
        <PlanContainer>
            <div>
                <ResponsiveH2 margin="0 0 20px" textAlign="left" fontSize={32} fontWeight="bold" lineHeight={1.5} color="#333d5b">
                    기간 한정 특가 이벤트
                </ResponsiveH2>
                <ResponsiveText textAlign="left" fontSize={20} lineHeight={1.6} color="#4e5968" margin="0 0 60px">
                    {`지금 Starter플랜, EXPERT 플랜을 구매할 시, 연간 플랜 할인가로 셀디 서비스를 이용하실 수 있습니다.
지금 바로 50% 할인된 가격으로 서비스를 이용해보세요.(월 플랜 최소 사용 기간 4개월)`}
                </ResponsiveText>
                <ul>
                    <PlanItem plan={plan} onChangePlan={handlePlan} title={PLAN["STARTER"].title} description={PLAN["STARTER"].description} basePrice={PLAN["STARTER"][divdedValue].basePrice} price={PLAN["STARTER"][divdedValue].price} rate={PLAN["STARTER"].rate} functionList={PLAN["STARTER"].function}/>
                    <PlanItem plan={plan} onChangePlan={handlePlan} title={PLAN["EXPERT"].title} description={PLAN["EXPERT"].description} basePrice={PLAN["EXPERT"][divdedValue].basePrice} price={PLAN["EXPERT"][divdedValue].price} rate={PLAN["EXPERT"].rate} functionList={PLAN["EXPERT"].function}/>
                    <PlanItem plan={plan} onChangePlan={handlePlan} title={PLAN["LEADER"].title} description={PLAN["LEADER"].description} basePrice={PLAN["LEADER"][divdedValue].basePrice} price={PLAN["LEADER"][divdedValue].price} rate={PLAN["LEADER"].rate} functionList={PLAN["LEADER"].function}/>
                    <PlanItem plan={plan} onChangePlan={handlePlan} isEnterprise title={PLAN["ENTERPRISE"].title} description={PLAN["ENTERPRISE"].description} basePrice={PLAN["ENTERPRISE"][divdedValue].basePrice} price={PLAN["ENTERPRISE"][divdedValue].price} rate={PLAN["ENTERPRISE"].rate} functionList={PLAN["ENTERPRISE"].function}/>
                </ul>
            </div>
        </PlanContainer>
    )
}