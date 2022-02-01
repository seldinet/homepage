import React from "react";
import styled from "styled-components";

import { BaseH2 } from "../components";
import { addPrefix } from "../utils/addPrefix";

import { FUNCTIONS } from "./contants";
import FunctionItem from "./function-item";

const FunctionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding: 80px 20px 100px 20px;
    box-sizing: border-box;

    background-image: url(${addPrefix("/images/visual-image2.svg")});
    background-size: cover;
    background-repeat: no-repeat;

    & > div {
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      & > div:not(:last-child) {
        margin-right: 32px;

        @media (max-width: 768px) {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const ArrowImage = styled.img`
  width: 36px;
  height: 58px;
  margin: 32px 0 56px;
`;

export default function FunctionSection() {
  return (
    <FunctionContainer>
      <BaseH2 fontSize={32} fontWeight="bold" lineHeight={1.5} color="#333d4b">
        {"셀디는 '내 제품'에 최적화된 세일즈&마케팅 방법을 찾아드립니다."}
      </BaseH2>
      <ArrowImage
        src={addPrefix("/images/arrows-icon.png")}
        alt="arrows-icon"
      />
      <div>
        <BaseH2
          fontSize={32}
          fontWeight="bold"
          lineHeight={1.5}
          color="#fff"
          margin="0 0 56px 0"
        >
          {`세일즈&마케팅을 진행할수록
최적화되는 '나만의 수출 노하우'`}
        </BaseH2>
        <div>
          {FUNCTIONS.map(({ name, image }) => {
            return <FunctionItem key={name} name={name} image={image} />;
          })}
        </div>
      </div>
    </FunctionContainer>
  );
}
