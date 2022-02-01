import React from "react";
import styled from "styled-components";
import { BaseText } from "../components";

const SolutionContainer = styled.div`
  width: 100%;

  padding: 0 20px;
  box-sizing: border-box;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: normal;
    }

    margin: 0 auto;

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    width: 100%;

    padding: 120px 0;
    box-sizing: border-box;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const MainText = styled(BaseText)`
  & > span {
    color: #1461ff;
  }
`;

const SolutionImage = styled.img`
  width: 564px;
  height: 422px;

  @media (max-width: 768px) {
    width: 100%;
    height: 508px;

    margin-top: 55px;
  }
`;

export default function SolutionSection() {
  return (
    <SolutionContainer>
      <div>
        <div>
          <MainText
            fontSize={32}
            fontWeight="bold"
            textAlign="left"
            lineHeight={1.5}
            letterSpacing={-1.6}
            color="#333d4b"
            margin="0 0 20px 0"
          >
            셀디와 함께하면 <span>한번에 해결 !</span>
          </MainText>
          <BaseText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 16px 0"
          >
            {"‘상품 관리, 주문 관리, 물류 관리, 수출 신고’  > 자동화"}
          </BaseText>
          <BaseText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 16px 0"
          >
            {"무분별한 왕홍 마케팅  > 최적화"}
          </BaseText>
          <BaseText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 56px 0"
          >
            {"어려운 수출 데이터 분석  > 맞춤화"}
          </BaseText>
          <BaseText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            color="#4e5968"
            textAlign="left"
          >{`단순한 수출 행정업무부터, 복잡한 마케팅 설계까지,
그 동안 경험에만 의존했던 확률적인 마케팅을 셀디를 통한
‘5분 세팅’만으로도 최적화할 수 있습니다`}</BaseText>
        </div>
        <SolutionImage src="/images/solution-image.png" />
      </div>
    </SolutionContainer>
  );
}