import React from "react";
import styled from "styled-components";
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

    & > div:last-child {
      & > img:last-child {
        @media (max-width: 768px) {
          margin-top: -35px;
        }
      }
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
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
            오시는 길
          </BaseText>
          <BaseText
            fontSize={16}
            lineHeight={2}
            textAlign="left"
            color="#4e5968"
            margin="0 0 30px 0"
          >
            서울시 강남대로364 미왕빌딩 1709
          </BaseText>
          <Image src={addPrefix("/images/map.png")} />
        </div>
        <div>
          <BaseText
            fontSize={20}
            fontWeight="bold"
            lineHeight={1.6}
            textAlign="left"
            color="#4e5968"
            margin="0 0 66px 0"
          >
            셀디 스튜디오
          </BaseText>
          <Image src={addPrefix("/images/studio-image.png")} />
        </div>
      </div>
    </MapContainer>
  );
}
