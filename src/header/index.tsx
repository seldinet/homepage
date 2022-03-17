import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BaseText } from "../components";
import { useRequestModal } from "../request-modal";
import { addPrefix } from "../utils/addPrefix";

const HeaderContainer = styled.div<{ backgroundColor: string }>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
  padding: 0 20px;

  & > div {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 80px;

    @media (min-width: 769px) {
      max-width: 1200px;
    }

    & > div:not(:last-child) {
      display: flex;
      align-items: center;
      margin-left: 120px;

      @media (max-width: 768px) {
        display: none;
      }

      & > div:not(:last-child) {
        margin-right: 40px;
      }
    }

    & > div:last-child {
      display: flex;
      align-items: center;
      margin-left: auto;

      @media (max-width: 768px) {
        display: none;
      }

      & > div:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
`;

const HeaderLogo = styled.img`
  width: 105px;
  height: 30px;
`;

const MoreButton = styled.button`
  border: none;
  background-color: inherit;
  margin-left: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export default function Header({ primary = true } : { primary?: boolean }) {
  const { open } = useRequestModal();
  const { t } = useTranslation("header");
  return (
    <HeaderContainer backgroundColor={primary ? '#00135f' : '#fff' }>
      <div>
        <a href="/">
          <HeaderLogo
            src={primary ? addPrefix("/images/header-logo.png") : addPrefix("/images/header-logo-blue.png")}
            alt="seldi-logo"
          />
        </a>
        <MoreButton>
          <MenuIcon src={addPrefix("/images/menu-icon.png")} alt="menu-icon" />
        </MoreButton>
        <div>
          <BaseText fontSize={16} lineHeight={1.61} color={primary ? '#fff' : '#333d4b'}>
            {t("header.introduce")}
          </BaseText>
          <BaseText fontSize={16} lineHeight={1.61} color={primary ? '#fff' : '#333d4b'}>
                  {t("header.manual")}
          </BaseText>  
          <div>
            <a href="/price">
              <BaseText fontSize={16} lineHeight={1.61} color={primary ? '#fff' : '#333d4b'}>
                  {t("header.price")}
              </BaseText>  
            </a>
          </div>
          <div>
            <a href="https://seldikorea.recruitin.co.kr/jobs">
              <BaseText fontSize={16} lineHeight={1.61} color={primary ? '#fff' : '#333d4b'}>
                {t("header.recruit")}
              </BaseText>
            </a>
          </div>
        </div>
        <div>
          <BaseText opacity={0.8} fontSize={16} lineHeight={1.61} color={primary ? '#fff' : '#435968'}>
            {t("header.login")}
          </BaseText>
          <BaseText
            onClick={open}
            opacity={0.8}
            fontSize={16}
            lineHeight={1.61}
            color={primary ? '#fff' : '#435968'}
          >
            {t("header.question")}
          </BaseText>
        </div>
      </div>
    </HeaderContainer>
  );
}
