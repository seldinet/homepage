import React from 'react';

import { FunctionContainer } from './function-container'
import { FunctionItem } from './function-item'
import { FunctionType } from './type';

const CRM_MARKETING = [
    {
        title: '고객 세그먼트 관리',
        description: '고객 유형별 관리를 통한 마케팅 전환 효과 상승',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '커머스 연동 제한'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '맞춤 추천'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '맞춤 추천'
        }
    },
    {
        title: '팔로우 캠페인',
        description: `공중계정 팔로우 증대를 위한 쿠폰 발행 기능 메시지 알림 기능 
        제공`,
        starter: {
            type: 'STARTER' as FunctionType,
            description: '입점몰 연동'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '자사몰 연동'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '자사몰 연동'
        }
    },
    {
        title: '셀링 캠페인',
        description: '초기 판매 및 재구매 전환에 특화된 맞춤 프로모션 기능 제공',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '입점몰 연동'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '자사몰 연동'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '자사몰 연동'
        }
    },
    {
        title: '입점형 웹라이브 기능',
        description: `고객에게 실시간 라이브 기능 제공 가능
        (예약제 운영,  클라우드 서버 비용 별도 과금)`,
        starter: {
            type: 'STARTER' as FunctionType,
            description: '입점몰 연동'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '자사몰 연동'
        },
        leader: {
            type: 'UPGRADE' as FunctionType,
            description: ''
        }
    },
    {
        title: '라이브 커머스 시스템',
        description: `맞춤 알림기능 지원, 상시 라이브 가능
        클라우드 서버 비용 무료`,
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
            description: '자체 라이브 커머스 시스템 구현'
        }
    },
    {
        title: '위쳇 CPM 광고',
        description: '13억 중국인 고객 대상의 CPM 광고기능',
        starter: {
            type: 'STARTER' as FunctionType,
            description: '입점형 광고 지원'
        },
        expert: {
            type: 'EXPERT' as FunctionType, 
            description: '위쳇 광고주 계정 등록'
        },
        leader: {
            type: 'LEADER' as FunctionType,
            description: '위쳇 광고주 계정 등록'
        }
    },
]

export default function CrmMarketing() {
    return (
        <FunctionContainer text="CRM 마케팅 기능">
            {CRM_MARKETING.map((item, index) => {
                return (
                    <FunctionItem  key={index} {...item} />
                )
            })}
        </FunctionContainer>
    )
   
}