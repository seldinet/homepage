import React from "react";
import styled from "styled-components";

import { BaseButton, BaseText } from "../components";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 520px;

  background-color: #00135f;
  background-image: url("/images/visual-img.png");
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
  return (
    <IntroContainer>
      <BaseText fontSize={40} fontWeight="bold" color="#fff">{`중국 수출 전문
      CRM 마케팅 솔루션, 셀디`}</BaseText>

      <div>
        <BaseText
          textDecoration="line-through"
          fontSize={20}
          lineHeight={1.6}
          color="#1461ff"
        >
          '남들이 다 하기 때문에'
        </BaseText>
        <BaseText
          fontSize={20}
          lineHeight={1.6}
          color="#fff"
        >{`이제, '내 제품'에 최적화된
        세일즈&마케팅에 집중하세요`}</BaseText>
        <BaseButton
          borderRadius={8}
          fontSize={18}
          fontWeight="bold"
          lineHeight={1.61}
          letterSpacing={-0.35}
          margin="40px 0 0 0"
        >
          상담 신청
        </BaseButton>
      </div>
    </IntroContainer>
  );
}