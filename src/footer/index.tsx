import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseText } from "../components";
import { addPrefix } from "../utils/addPrefix";

const FooterContainer = styled.div`
  background-color: #272730;
  box-sizing: border-box;

  display: flex;
  width: 100%;
  padding: 30px 20px;

  & > div {
    display: flex;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    & > div {
      display: flex;
      flex-direction: column;
    }

    & > div:not(:last-child) {
      margin-right: 129px;

      @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 55px;
      }
    }
  }
`;

const FooterImage = styled.img`
  width: 104px;
  height: 30px;

  margin-bottom: 20px;
`;

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <FooterContainer>
      <div>
        <div>
          <FooterImage
            src={addPrefix("/images/footer-logo.png")}
            alt="sedi-logo"
          />
          <BaseText
            fontSize={14}
            lineHeight={1.71}
            textAlign="left"
            color="#b5b5b5"
            margin="0 0 12px 0"
          >
            {t("footer.seldiInformation")}
          </BaseText>
          <BaseText
            fontSize={14}
            lineHeight={1.71}
            textAlign="left"
            color="#b5b5b5"
            margin="0 0 20px 0"
          >
            {t("footer.seldiNumber")}
          </BaseText>
          <BaseText
            fontSize={14}
            lineHeight={2.07}
            textAlign="left"
            color="#888"
          >
            {"©Youyishou Co,LTD ALL Rights Reserved."}
          </BaseText>
        </div>
        <div>
          <BaseText
            fontSize={14}
            lineHeight={1.71}
            textAlign="left"
            color="#b5b5b5"
            margin="0 0 8px 0"
          >
            {t("footer.consultingTitle")}
          </BaseText>
          <BaseText
            fontSize={32}
            fontWeight="bold"
            lineHeight={0.75}
            textAlign="left"
            color="#b5b5b5"
            margin="0 0 16px 0"
          >
            02.6958.8556
          </BaseText>
          <BaseText
            fontSize={14}
            lineHeight={1.71}
            textAlign="left"
            color="#b5b5b5"
          >
            {t("footer.consultingTime")}
          </BaseText>
        </div>
      </div>
    </FooterContainer>
  );
}
