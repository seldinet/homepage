import React from 'react';
import { FunctionType } from './type';

import { FunctionContainer } from './function-container'
import { FunctionItem } from './function-item'


const STORE_MANAGEMENT = [
    {
        title: '입점 브랜드 관리',
        description: '입점 가입 및 권한 관리 기능 제공',
        starter: {
            type: 'NOT_SUPPORTED' as FunctionType,
            description: ''
        },
        expert: {
            type: 'NOT_SUPPORTED' as FunctionType, 
            description: ''
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '입점 브랜드 계정 관리 기능'
        }
    },
]

export default function EnteringStoreManagement() {
    return (
        <FunctionContainer text="입점 관리 기능" description="타 브랜드의 상품을 입점 관리 할 수 있는 '멀티테넌시 관리 기능을'을 지원합니다.">
            {STORE_MANAGEMENT.map((item, index) => {
                return (
                    <FunctionItem  key={index} {...item} />
                )
            })}
        </FunctionContainer>
    )
   
}