import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseButton, BaseParagrpah, BaseH1 } from "../../components";
import { useRequestModal } from "../../request-modal";
import { addPrefix } from "../../utils/addPrefix";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 520px;

  background-color: #00135f;
  background-image: url(${addPrefix("/images/visual-img.png")});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  padding: 30px 0;

  & > div {
    margin-top: 30px;
    text-align: center;
  }
`;

export default function IntroSection() {
  const { open } = useRequestModal();
  const { t } = useTranslation("introduce");
  return (
    <IntroContainer>
      <BaseH1 fontSize={40} fontWeight="bold" color="#fff">
        {t("introduce.title")}
      </BaseH1>

      <div>
        <BaseH1
          textDecoration="line-through"
          fontSize={20}
          lineHeight={1.6}
          color="#1461ff"
        >
          {t("introduce.cancel")}
        </BaseH1>
        <BaseParagrpah fontSize={20} lineHeight={1.6} color="#fff">
          {t("introduce.subTitle")}
        </BaseParagrpah>
        <BaseButton
          borderRadius={8}
          fontSize={18}
          fontWeight="bold"
          lineHeight={1.61}
          letterSpacing={-0.35}
          margin="40px 0 0 0"
          onClick={open}
        >
          {t("introduce.button")}
        </BaseButton>
      </div>
    </IntroContainer>
  );
}
