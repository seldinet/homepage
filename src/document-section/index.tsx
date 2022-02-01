import React from "react";
import styled from "styled-components";
import { BaseText } from "../components";

const DocumentContainer = styled.div`
  width: 100%;

  padding: 0 20px;
  box-sizing: border-box;

  & > div {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: normal;
    }

    margin: 0 auto;

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    width: 100%;

    padding: 120px 0;
    box-sizing: border-box;

    & > div:first-child {
      display: flex;
      @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        order: 2;
      }

      & > img:not(:last-child) {
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
        margin-left: 0;
        margin-bottom: 55px;
      }
    }
  }
`;

const MainText = styled(BaseText)`
  & > span {
    color: #1461ff;
  }
`;

const DocumentImage = styled.img`
  width: 264px;
  height: 402px;

  @media (max-width: 768px) {
    width: 48%;
  }
`;

export default function DocumentSection() {
  return (
    <DocumentContainer>
      <div>
        <div>
          <DocumentImage src="/images/document-image1.png" />
          <DocumentImage src="/images/document-image2.png" />
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
            안전한 수출 운영 관리 <span>노하우</span>
          </MainText>
          <BaseText
            fontSize={16}
            lineHeight={1.75}
            textAlign="left"
            color="#4e5968"
            margin="0 0 28px 0"
          >
            {`셀디코리아는 콰징 수출을 위한 EDI 경영허가, 콰징전자상거래 플랫폼을
직접 운영합니다`}
          </BaseText>
          <BaseText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            color="#4e5968"
            textAlign="left"
          >{`서비스의 신뢰도만큼 중요한, 중국 행정의 제도적 안정성.
          믿을 수 있는 행정 운영으로 고객사의 성공적인 중국 진출을
          지원합니다.`}</BaseText>
        </div>
      </div>
    </DocumentContainer>
  );
}
