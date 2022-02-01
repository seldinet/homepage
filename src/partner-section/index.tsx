import { url } from "inspector";
import React from "react";
import styled from "styled-components";

import { PARTNERS } from "./constants";

const PartnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  box-sizing: border-box;

  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  & > div {
    display: flex;
    align-items: center;
    margin: 0 auto;

    height: 80px;
    width: 100%;

    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    & > div:not(:last-child) {
      margin-right: 118px;
    }
  }
`;

const Partner = styled.div<{ image: string; size: number }>`
  flex-grow: 1;
  flex-shrink: 0;

  width: ${({ size }) => size}px;
  height: 80px;

  background-image: ${({ image }) => `url(${image})`};
  background-size: ${({ size }) => `${size}px 32px`};
  background-position: center;
  background-repeat: no-repeat;
`;

export default function PartnerSection() {
  return (
    <PartnerContainer>
      <div>
        {PARTNERS.map(({ name, image, size }) => {
          return <Partner key={name} image={image} size={size} />;
        })}
      </div>
    </PartnerContainer>
  );
}
