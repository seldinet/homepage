import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseH2 } from "../components";
import { useRequestModal } from "../request-modal";
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

    & > ul {
      display: flex;
      justify-content: start;
      margin: 0 auto;
      flex-wrap: wrap;

      @media (min-width: 675px) {
        & > li {
          margin-right: 32px;
        }
      }

      @media (min-width: 400px) and (max-width: 674px) {
        width: 375px;
        & > li:not(:nth-child(2n)) {
          margin-right: 16px;
        }

        & > li {
          margin-bottom: 16px;
        }
      }

      @media (max-width: 399px) {
        flex-direction: column;

        & > li {
          margin-bottom: 16px;
        }
      }
    }
  }
`;

const ResponsiveH2 = styled(BaseH2)`
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const ArrowImage = styled.img`
  width: 36px;
  height: 58px;
  margin: 32px 0 56px;
`;

export default function FunctionSection() {
  const { open } = useRequestModal();
  const { t } = useTranslation("func");
  return (
    <FunctionContainer>
      <ResponsiveH2
        fontSize={32}
        fontWeight="bold"
        lineHeight={1.5}
        color="#333d4b"
      >
        {t("function.title")}
      </ResponsiveH2>
      <ArrowImage
        src={addPrefix("/images/arrows-icon.png")}
        alt="arrows-icon"
      />
      <div>
        <ResponsiveH2
          fontSize={32}
          fontWeight="bold"
          lineHeight={1.5}
          color="#fff"
          margin="0 0 56px 0"
        >
          {t("func.description")}
        </ResponsiveH2>
        <ul>
          {FUNCTIONS.map(({ key, image }) => {
            const name = t(`func.${key}`);

            return (
              <FunctionItem
                key={name}
                name={name}
                image={image}
                onClick={open}
              />
            );
          })}
        </ul>
      </div>
    </FunctionContainer>
  );
}
