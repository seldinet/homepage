import React, { useEffect } from "react";
import styled from "styled-components";
import { init, send } from "@emailjs/browser";

import { BaseButton, BaseText, Modal } from "../components";
import { addPrefix } from "../utils/addPrefix";

import LabelInput from "./label-input";
import LabelCheckbox from "./label-checkbox";
import { useRequestModal } from "./context";

const ModalContainer = styled.div`
  width: 400px;

  overflow: scroll;

  @media (max-width: 768px) {
    height: 600px;
  }
  @media (min-width: 769px) {
    width: 760px;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;

    padding: 30px 20px 20px;
    border-bottom: 1px solid #f3f3f3;
  }

  & > div:last-child {
    display: flex;
    padding: 45px 20px;
    box-sizing: border-box;

    & > div:last-child {
      display: flex;
      flex-direction: column;

      width: 100%;

      & > div:first-child {
        margin-bottom: 20px;
        & > div:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      & > div:nth-child(2) {
        margin-bottom: 30px;
        & > div:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }
`;

const CloseButton = styled.button`
  border: none;
  background-color: inherit;
  margin-left: auto;
`;

const ModalImage = styled.img`
  width: 320px;
  height: 240px;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function RequestModal() {
  const { isOpen, close, value, isActive, setValue } = useRequestModal();

  useEffect(() => {
    init("user_m7RPRxdQSybriMmBoaGWd");
  }, []);

  return (
    <Modal open={isOpen} onClose={close}>
      <ModalContainer>
        <div>
          <BaseText
            fontSize={24}
            fontWeight="bold"
            lineHeight={1.21}
            letterSpacing={-0.46}
            color="#222"
          >
            셀디 서비스 신청 문의
          </BaseText>
          <CloseButton>
            <img
              width={35}
              height={35}
              src={addPrefix("/images/close-icon.png")}
              onClick={close}
            />
          </CloseButton>
        </div>
        <div>
          <ModalImage src={addPrefix("/images/request-imgage.png")} />
          <div>
            <div>
              <LabelInput
                id="company"
                label="회사명"
                placeholder="회사명을 입력해주세요"
                value={value.company}
                onChange={(company) =>
                  setValue({
                    ...value,
                    company: company,
                  })
                }
              />
              <LabelInput
                id="name"
                label="이름"
                placeholder="이름을 입력해주세요"
                value={value.name}
                onChange={(name) =>
                  setValue({
                    ...value,
                    name: name,
                  })
                }
              />
              <LabelInput
                id="phoneNumber"
                label="연락처"
                placeholder="01012345678"
                value={value.phoneNumber}
                onChange={(phoneNumber) =>
                  setValue({
                    ...value,
                    phoneNumber: phoneNumber,
                  })
                }
              />
              <LabelInput
                id="email"
                label="이메일 주소"
                placeholder="help@sedi.net"
                value={value.email}
                onChange={(email) =>
                  setValue({
                    ...value,
                    email: email,
                  })
                }
              />
              <LabelInput
                id="site"
                label="웹 사이트"
                placeholder="http://"
                value={value.site}
                onChange={(site) =>
                  setValue({
                    ...value,
                    site: site,
                  })
                }
              />
            </div>
            <div>
              <BaseText
                textAlign="left"
                fontSize={14}
                lineHeight={2.07}
                color="#333d4b"
                margin="0 0 12px !important"
              >
                정보수신동의
              </BaseText>
              <LabelCheckbox
                id="required"
                required
                label="개인정보 수집 및 이용동의"
                value={value.requiredAgree}
                onChange={(requiredAgree) =>
                  setValue({
                    ...value,
                    requiredAgree: requiredAgree,
                  })
                }
              />
              <LabelCheckbox
                id="notRequired"
                label="소개서, 뉴스레터 등 셀디 정보 수신에 동의"
                value={value.notRequiredAgree}
                onChange={(notRequiredAgree) =>
                  setValue({
                    ...value,
                    notRequiredAgree: notRequiredAgree,
                  })
                }
              />
            </div>
            <BaseButton
              disabled={!isActive}
              borderRadius={12}
              backgroundColor="#0054ff"
              fontSize={16}
              lineHeight={1.81}
              letterSpacing={-0.26}
              onClick={async () => {
                if (!isActive) {
                  return;
                }

                await send("service_va9x7m8", "template_f0nfrbi", { ...value });
                close();
              }}
            >
              셀디 신청하기
            </BaseButton>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  );
}

export { RequestModalProvider, useRequestModal } from "./context";
