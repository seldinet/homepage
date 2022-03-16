import React from 'react';
import { FunctionType } from './type';

import { FunctionContainer } from './function-container'
import { FunctionItem } from './function-item'


const MATCHING_SERVICE = [
    {
        title: '상품 리뷰 매칭',
        description: '리뷰 상품은 무상/할인 제공',
        starter: {
            type: 'STARTER' as FunctionType,
            description: ''
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '월 1회 제공'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '월 3회 제공'
        },
    },
    {
        title: '왕홍 콘텐츠 매칭',
        description: '리뷰 상품은 무상/할인 제공',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '월 횟수 1회 이내',
            warning: true
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '월 횟수 5회 이내'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '월 횟수 무제한'
        },
    },
    {
        title: '라이브 판매 매칭',
        description: '리뷰 상품은 무상/할인 제공',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '월 횟수 1회 이내',
            warning: true
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '월 횟수 5회 이내'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '월 횟수 무제한'
        },
    },
    {
        title: '유통몰 매칭',
        description: '리뷰 상품은 무상/할인 제공',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '월 횟수 1회 이내',
            warning: true
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '월 횟수 5회 이내'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '월 횟수 무제한'
        },
    },
    {
        title: '매칭 상품 등록 가능',
        description: '매칭 상품 등록-판매 관리 기능',
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
            description: '마케팅 상품 판매 정산 관리 기능'
        },
    },
]

export default function MapSolution() {
    return (
        <FunctionContainer text="매칭 서비스" extraInfo="* 매칭을 통한 마케팅 비용은 별도 과금됩니다.">
            {MATCHING_SERVICE.map((item, index) => {
                return (
                    <FunctionItem  key={index} {...item} />
                )
            })}
        </FunctionContainer>
    )
   
}