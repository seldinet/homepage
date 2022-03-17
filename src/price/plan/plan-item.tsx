import React from 'react'
import styled from 'styled-components'

import { BaseText, BaseHR, BaseSwitch} from '../../components'
import { useRequestModal } from '../../request-modal'

const Container = styled.li`
    display: flex;
    flex-direction: column;

    padding: 30px 16px;
    width: 280px;

    border-radius: 12px;

    background-color: #fff;
    box-shadow:  0 3px 30px 0 rgba(0, 0, 0, 0.08);
    box-sizing: border-box;

    > div:first-child {
        display: flex;
        align-items: center;

        width: 100%;
        margin-bottom: 10px;
    }

    & > ul {
        & > li {

            font-size: 16px;
            line-height: 1.75;
            color: #4e5968;
            margin-bottom: 2px;

            @media(max-width: 479px) {
                font-size: 14px;
            }
        }
    }
`

const PriceText = styled(BaseText)`
    & > span {
        font-size: 16px;
        line-height: 1.5;
        color: #4e5968;
        font-weight: 400;
    }
`

const RateText = styled(BaseText)<{isEnterprise?: boolean}>`
    & > span {
        ${({ isEnterprise }) => isEnterprise ? null : 'text-decoration: line-through'};
    }
`

const ApplyButton = styled.button`
    display: block;
    width: 100%;
    height: 45px;
    
    padding: 12px 0px;
    border-radius: 8px;
    background-color: #4e5968;
    border: none;

    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    color:#fff;
    text-align: center;
    margin-bottom: 28px;
    cursor: pointer;
`

interface PriceItemProps {
    title: string, 
    description: string, 
    basePrice: string | number, 
    price:string | number, rate: string | number, 
    functionList: string[], 
    isEnterprise?: boolean,
    plan: {key: string, title: string}
    onChangePlan?: (plan: {key: string, title: string}) => void
}

export default function PlanItem({title, description, basePrice, price, rate, functionList, isEnterprise, plan, onChangePlan} : PriceItemProps) {
    const { open } = useRequestModal();

    return (
        <Container>
            <div>
                <BaseText margin="0 auto 0 0" fontWeight="bold" textAlign='left' lineHeight={1.21} color="#333d4b" fontSize={24}>
                    {title}
                </BaseText>
                {isEnterprise ? null : <BaseSwitch onChange={onChangePlan} selectedValue={plan} values={[{ key: 'month', title: '월 플랜' }, { key: 'year', title: '연 플랜' }]}/>}    
            </div>
            <BaseText textAlign="left" fontSize={14} lineHeight={1.43} color="#888">
                {description}
            </BaseText>
            <BaseHR margin="20px 0"/>
            <PriceText margin="0 0 8px" fontSize={36} fontWeight="bold" color="#333d4b">
                {price}{isEnterprise ? null : '만원'} {isEnterprise ? null : <span>{plan.key === 'month' ? '/월' : '/년'}</span>}
            </PriceText>
            <RateText isEnterprise={isEnterprise} margin="0 0 30px" fontSize={14} lineHeight={1.71} color="#e32604">
                (<span>{basePrice}{isEnterprise ? null : '만원'}</span> {isEnterprise ? '최대' : null} {rate}%할인)
            </RateText>
            <ApplyButton onClick={open}>신청하기</ApplyButton>
            <ul>
                {functionList.map((func, index) => {
                    return (
                        <li key={index}>• {func}</li>
                    )
                })}
            </ul>
        </Container>
    )
}