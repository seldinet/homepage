import React from "react";
import styled from "styled-components";
import { BaseText, BaseH2, BaseCheckbox } from "../components";
import { addPrefix } from "../utils/addPrefix";

const ChartContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 120px 0;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 769px) {
      max-width: 1200px;
      flex-direction: row;
      align-items: center;
    }

    & > div {
      margin-bottom: 55px;
      @media (min-width: 769px) {
        margin-right: 55px;
        margin-bottom: 0;
      }
    }
  }
`;

const ResponsiveH2 = styled(BaseH2)`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ResponsiveText = styled(BaseText)`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ChartImage = styled.img`
  width: 100%;
  object-fit: contain;

  @media (min-width: 769px) {
    width: 564px;
    height: 292px;
  }
`;

export default function ChartSection() {
  return (
    <ChartContainer>
      <div>
        <div>
          <ResponsiveH2
            textAlign="left"
            fontSize={32}
            fontWeight="bold"
            lineHeight={1.5}
            letterSpacing={-1.6}
            color="#333d4b"
            margin="0 0 20px 0"
          >
            {
              "왕홍 마케팅, 입점 판매… 중국 수출 시도는 많았지만, 아직 나만의 고객을 찾지 못하셨나요?"
            }
          </ResponsiveH2>
          <ResponsiveText
            textAlign="left"
            fontSize={16}
            lineHeight={1.7}
            color="#4e5968"
            margin="0 0 20px 0"
          >
            {
              "내 제품을 원하는 고객군을 찾고, 내 고객을 위한 마케팅에 집중하는 일. 셀디 마케팅의 시작입니다."
            }
          </ResponsiveText>
        </div>
        <ChartImage
          src={addPrefix("/images/chart.png")}
          alt="seldi-chart-exapmle"
        />
      </div>
    </ChartContainer>
  );
}
