import React from "react";
import styled from "styled-components";

import { BaseText } from "../components";
import { useRequestModal } from "../request-modal";
import { addPrefix } from "../utils/addPrefix";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #00135f;
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

export default function Header() {
  const { open } = useRequestModal();
  return (
    <HeaderContainer>
      <div>
        <HeaderLogo
          src={addPrefix("/images/header-logo.png")}
          alt="seldi-logo"
        />
        <MoreButton>
          <MenuIcon src={addPrefix("/images/menu-icon.png")} alt="menu-icon" />
        </MoreButton>
        <div>
          <BaseText fontSize={16} lineHeight={1.61} color="#fff">
            셀디 소개
          </BaseText>
          <BaseText fontSize={16} lineHeight={1.61} color="#fff">
            매뉴얼
          </BaseText>
        </div>
        <div>
          <BaseText opacity={0.8} fontSize={16} lineHeight={1.61} color="#fff">
            로그인
          </BaseText>
          <BaseText
            onClick={open}
            opacity={0.8}
            fontSize={16}
            lineHeight={1.61}
            color="#fff"
          >
            문의하기
          </BaseText>
        </div>
      </div>
    </HeaderContainer>
  );
}
