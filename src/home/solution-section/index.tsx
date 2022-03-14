import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseH2, BaseParagrpah } from "../../components";
import { addPrefix } from "../../utils/addPrefix";

const SolutionContainer = styled.div`
  width: 100%;

  padding: 0 20px;
  box-sizing: border-box;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 120px 0;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: normal;
      padding: 120px 0 0;
    }

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-right: 30px;

      @media (max-width: 768px) {
        margin: 0 auto;
      }
    }
  }
`;

const ResponsiveH2 = styled(BaseH2)`
  & > span {
    color: #1461ff;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const ResponsiveText = styled(BaseParagrpah)`
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const SolutionImage = styled.img`
  width: 564px;
  height: 422px;

  @media (max-width: 768px) {
    width: 100%;
    object-fit: contain;

    margin-top: 30px;
  }
`;

export default function SolutionSection() {
  const { t } = useTranslation("solution");
  return (
    <SolutionContainer>
      <div>
        <div>
          <ResponsiveH2
            fontSize={32}
            fontWeight="bold"
            textAlign="left"
            lineHeight={1.5}
            letterSpacing={-1.6}
            color="#333d4b"
            margin="0 0 20px 0"
          >
            {t("solution.title")} <span>{t("solution.emphasize")}</span>
          </ResponsiveH2>
          <ResponsiveText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 16px 0"
          >
            {t("solution.one")}
          </ResponsiveText>
          <ResponsiveText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 16px 0"
          >
            {t("solution.two")}
          </ResponsiveText>
          <ResponsiveText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 56px 0"
          >
            {t("solution.three")}
          </ResponsiveText>
          <ResponsiveText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            color="#4e5968"
            textAlign="left"
          >
            {t("solution.description")}
          </ResponsiveText>
        </div>
        <SolutionImage
          src={addPrefix("/images/solution-image.png")}
          alt="seldi-solution"
        />
      </div>
    </SolutionContainer>
  );
}
