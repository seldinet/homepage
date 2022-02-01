import React from "react";
import styled, { css } from "styled-components";

import { BaseText, BaseCheckbox } from "../components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > input {
    margin-right: 12px;
  }
`;

const RequiredText = styled(BaseText)<{ required?: boolean }>`
  & > span {
    ${({ required }) =>
      required
        ? css`
            color: #1461ff;
          `
        : null}
  }
`;

export default function LabelCheckbox({
  required,
  label,
}: {
  required?: boolean;
  label: string;
}) {
  return (
    <CheckboxContainer>
      <BaseCheckbox />
      <RequiredText
        required={required}
        fontSize={16}
        lineHeight={1.81}
        color="#333d4b"
      >
        <span>{required ? "(필수)" : "(선택)"}</span> {label}
      </RequiredText>
    </CheckboxContainer>
  );
}
