
export const PLAN = {
    STARTER: {
        title: 'Starter',
        description: `중국 수출,  중국인 고객 마케팅을 시작하는
        기업`,
        month: {
            basePrice: 30,
            price: 15,
        },
        year: {
            basePrice: 360,
            price: 180,
        },
        rate: 50,
        function: [
            '고객 세그먼트 관리 기능',
            '팔로우 캠페인 (입점용)',
            '셀링 캠페인',
            '입점형 웹라이브 기능',
            '위젯 CPM 광고 (입점형)',
            '매칭 서비스 (월 횟수 제한)',
        ]
    },
    EXPERT: {
        title: 'Expert',
        description: `중국 자사몰을 통한 직접 수출을
        목표로 하는 기업 (미니앱 무료 구축)`,
        month: {
            basePrice: 80,
            price: 40,
        },
        year: {
            basePrice: 960,
            price: 480,
        },
        rate: 50,
        function: [
            'Starter의 모든 기능',
            'CRM 자사율(미니맵) 연동',
            '맞춤 분석 서비스',
            '자사율 미니맵 구축',
            '중국 통관 물류 케어 월 1회 제공',
            '리뷰 매칭 월 1회 무상 제공',
            '매칭 서비스 (횟수 확장)',
        ]
    },
    LEADER: {
        title: 'Leader',
        description: `수익율 향상을 목표로 전문화된
        CRM 마케팅이 필요한 기업`,
        month: {
            basePrice: 120,
            price: 90,
        },
        year: {
            basePrice: 1440,
            price: 1000,
        },
        rate: 30,
        function: [
            'Expert의 모든 기능',
            '자사율 라이브 판매 기능 구축',
            '수출 물류 토탈케어 월 2회 제공',
            '전물 컨설턴트 상시 배치',
            '셀디 라이브 스튜디오 무상 제공',
            '리뷰 매칭 월 3회 무상 제공',
            '왕홍 매칭 시, 우선 선택권',
            '브랜드 입점 관리 기능',
            '마케팅 상품 등록-판매 관리 기능',
        ]
    },
    ENTERPRISE: {
        title: 'Enterprise',
        description: `기업 맞춤형 플랜
        기업 맞춤 커스터마이징 개발`,
        month: {
            basePrice: '커스터마이징',
            price: '월간플랜',
        },
        year: {
            basePrice: '커스터마이징',
            price: '연간플랜',
        },
        rate: 70,
        function: [
            '기업의 중국인 고객 관리 기능에 최적화된 솔루션 개발',
            '전물 컨설턴트 및 전문TF팀 배치 (TF팀 분기당 2기업 이내 배정)',
            '중화권 마케팅 컨설팅 병행',
        ]
    }
}