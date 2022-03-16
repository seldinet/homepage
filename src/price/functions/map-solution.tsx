import React from 'react';
import { FunctionType } from './type';

import { FunctionContainer } from './function-container'
import { FunctionItem } from './function-item'


const MAP_SOLUTION = [
    {
        title: '프로모션 기능',
        description: '쿠폰 발행, 친구 추천 등',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '커머스 연동 제한'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: ''
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '라이브 커머스 시스템 제공'
        },
    },
    {
        title: '커머스 기능',
        description: '',
        starter: {
            type: 'NOT_SUPPORTED' as FunctionType,
            description: ''
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: ''
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '라이브 커머스 시스템 제공'
        }
    },
]

export default function MapSolution() {
    return (
        <FunctionContainer text="미니맵(자사몰) 솔루션" extraInfo="* Starter 플랜은 ‘프로모션 기능’ 중 커머스 연동 기능은 제한됩니다.">
            {MAP_SOLUTION.map((item, index) => {
                return (
                    <FunctionItem  key={index} {...item} />
                )
            })}
        </FunctionContainer>
    )
   
}