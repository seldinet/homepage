import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseParagrpah, BaseH2 } from "../components";
import { addPrefix } from "../utils/addPrefix";

const DocumentContainer = styled.div`
  width: 100%;

  padding: 0 20px;
  box-sizing: border-box;

  & > div {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 120px 0;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: normal;
    }

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    & > div:first-child {
      display: flex;
      @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        order: 2;
      }

      & > img {
        margin-right: 40px;
        @media (max-width: 768px) {
          margin: 0;
        }
      }
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;
      margin-left: auto;

      @media (max-width: 768px) {
        order: 1;

        margin: 0 auto 30px;
      }
    }
  }
`;

const MainText = styled(BaseH2)`
  & > span {
    color: #1461ff;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
  }
`;

const ResponsiveText = styled(BaseParagrpah)`
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

const DocumentImage = styled.img`
  width: 264px;
  height: 402px;

  @media (max-width: 768px) {
    width: 48%;
    object-fit: contain;
  }
`;

export default function DocumentSection() {
  const { t } = useTranslation("document");
  return (
    <DocumentContainer>
      <div>
        <div>
          <DocumentImage
            src={addPrefix("/images/document-image1.png")}
            alt="sedi-document"
          />
          <DocumentImage
            src={addPrefix("/images/document-image2.png")}
            alt="sedi-document"
          />
        </div>
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
            {t("document.title")} <span>{t("document.emphasize")}</span>
          </MainText>
          <ResponsiveText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 28px 0"
          >
            {t("document.description")}
          </ResponsiveText>
          <ResponsiveText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            color="#4e5968"
            textAlign="left"
          >
            {t("document.subDescription")}
          </ResponsiveText>
        </div>
      </div>
    </DocumentContainer>
  );
}
