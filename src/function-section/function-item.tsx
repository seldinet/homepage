import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseButton, BaseText } from "../components";

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 28px 13px 12px;
  border-radius: 12px;

  background-color: #272730;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.16);
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 24px;
`;

export default function FunctionItem({
  name,
  image,
  onClick,
}: {
  name: string;
  image: string;
  onClick?: () => void;
}) {
  const { t } = useTranslation("function");
  return (
    <ItemContainer>
      <BaseText fontSize={16} lineHeight={3} color="#fff" margin="0 0 16px 0">
        {name}
      </BaseText>
      <ItemImage src={image} alt={`${name}-function`} />
      <BaseButton
        padding="10px 55px"
        borderRadius={8}
        backgroundColor="#18181c"
        fontSize={12}
        onClick={onClick}
      >
        {t("function.button")}
      </BaseButton>
    </ItemContainer>
  );
}
