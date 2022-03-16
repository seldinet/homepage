import React from 'react';
import { FunctionType } from './type';

import { FunctionContainer } from './function-container'
import { FunctionItem } from './function-item'


const CUSTOM_ANALYTICS = [
    {
        title: '맞춤 분석 대시 보드',
        description: '',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '가격 및 마케팅 상품 분석 한정'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '실시간 종합 분석 기능'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '실시간 종합 분석 기능'
        }
    },
]

export default function CustomAnalytics() {
    return (
        <FunctionContainer text="맞춤 분석" description="기업 맞춤 분석을 통해, 데이터 기반으로 가격, 채널,  마케팅 상품  맞춤 분석 서비스를 제공합니다. => 맞춤 추천 기능 제공">
            {CUSTOM_ANALYTICS.map((item, index) => {
                return (
                    <FunctionItem  key={index} {...item} />
                )
            })}
        </FunctionContainer>
    )
   
}