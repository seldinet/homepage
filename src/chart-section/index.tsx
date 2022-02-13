import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseText, BaseH2 } from "../components";
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
    font-size: 22px;
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
  const { t } = useTranslation("chart");
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
            {t("chart.title")}
          </ResponsiveH2>
          <ResponsiveText
            textAlign="left"
            fontSize={16}
            lineHeight={1.7}
            color="#4e5968"
            margin="0 0 20px 0"
          >
            {t("chart.description")}
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
