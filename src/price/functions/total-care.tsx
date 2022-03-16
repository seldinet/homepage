import React from 'react';
import { FunctionType } from './type';

import { FunctionContainer } from './function-container'
import { FunctionItem } from './function-item'


const TOTAL_CARE = [
    {
        title: '[물류] 한중 통관',
        description: '',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '셀디몰 입점 제품 한정'
        },
        expert: {
            type: 'UPGRADE' as FunctionType, 
            description: ''
        },
        leader: {
            type: 'UPGRADE' as FunctionType,
            description: ''
        },
    },
    {
        title: '[물류] 중국 현지 통관',
        description: '3일내 배송이 가능한 중국 현지 물류 통관 시스템',
        starter: {
            type: 'NOT_SUPPORTED' as FunctionType,
            description: ''
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '월 1회 제공'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '월 2회 제공'
        }
    },
    {
        title: '중국 행정 가능',
        description: '경내 책임회사, 상품B안 등록 등 중구 현지 업무 대행',
        starter: {
            type: 'NOT_SUPPORTED' as FunctionType,
            description: ''
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '맞춤 제공'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '맞춤 제공'
        }
    }
]

export default function TotalCare() {
    return (
        <FunctionContainer text="수출 토탈 케어" description="셀디코리아는 ‘콰징 전자상거래 플랫폼’ 및 ‘중국 세관 행정 승인’ 자격을 가지고 있으며, 자체 물류 운영 솔루션을 통해, 안전한 물류 시스템을 직접 제공합니다.">
            {TOTAL_CARE.map((item, index) => {
                return (
                    <FunctionItem  key={index} {...item} />
                )
            })}
        </FunctionContainer>
    )
   
}