import React from "react";
import styled from "styled-components";
import { BaseText } from "../components";

const MapContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #edf1f6;

  padding: 0 20px;

  & > div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;

    padding: 80px 0 100px;

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Image = styled.img`
  width: 576px;
  height: 400px;

  border-radius: 12px;
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
          <Image src="images/map.png" />
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
          <Image src="images/studio-image.png" />
        </div>
      </div>
    </MapContainer>
  );
}
