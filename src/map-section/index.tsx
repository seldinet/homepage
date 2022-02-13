import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseText } from "../components";
import { addPrefix } from "../utils/addPrefix";

const MapContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #edf1f6;
  padding: 0 20px;

  & > div {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    margin: 0 auto;

    padding: 80px 0 100px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    & > div:first-child {
      @media (max-width: 768px) {
        margin-bottom: 55px;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;

  border-radius: 12px;

  @media (min-width: 769px) {
    height: 400px;
  }
`;

export default function MapSection() {
  const { t } = useTranslation("map");
  return (
    <MapContainer>
      <div>
        <div>
          <BaseText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            textAlign="left"
            color="#4e5968"
            margin="0 0 2px 0"
          >
            {t("map.adressTitle")}
          </BaseText>
          <BaseText
            fontSize={16}
            lineHeight={2}
            textAlign="left"
            color="#4e5968"
            margin="0 0 30px 0"
          >
            {t("map.adress")}
          </BaseText>
          <Image
            src={addPrefix("/images/map.png")}
            alt="seldi-company-position"
          />
        </div>
        <div>
          <BaseText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            textAlign="left"
            color="#4e5968"
            margin="0 0 2px 0"
          >
            {t("map.studioTitle")}
          </BaseText>
          <BaseText
            fontSize={16}
            lineHeight={2}
            textAlign="left"
            color="#4e5968"
            margin="0 0 30px 0"
          >
            {t("map.studioAdress")}
          </BaseText>
          <Image
            src={addPrefix("/images/studio-image.png")}
            alt="sedi-studio-image"
          />
        </div>
      </div>
    </MapContainer>
  );
}
