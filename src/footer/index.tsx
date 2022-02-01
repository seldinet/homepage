import React from "react";
import styled from "styled-components";
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

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    width: 100%;

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
  return (
    <FooterContainer>
      <div>
        <div>
          <FooterImage src={addPrefix("/images/footer-logo.png")} />
          <BaseText
            fontSize={14}
            lineHeight={1.71}
            textAlign="left"
            color="#b5b5b5"
            margin="0 0 12px 0"
          >
            {
              "(주)셀디코리아 | 서울시 강남대로364 미왕빌딩 1709 | 대표 : 이창헌 | 사업자등록번호 : 568-88-02012"
            }
          </BaseText>
          <BaseText
            fontSize={14}
            lineHeight={1.71}
            textAlign="left"
            color="#b5b5b5"
            margin="0 0 20px 0"
          >
            {"전화 : 02-6958-8556 | 팩스 : 0504-051-2750"}
          </BaseText>
          <BaseText
            fontSize={14}
            lineHeight={2.07}
            textAlign="left"
            color="#888"
          >
            {"©SELDIKOREA ALL Rights Reserved."}
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
            상담문의
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
            {`평일  09:00-18:00(점심 11:30-12:30)
토/일/공휴일 휴무`}
          </BaseText>
        </div>
      </div>
    </FooterContainer>
  );
}
