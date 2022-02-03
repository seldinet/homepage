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
  id,
  required,
  label,
  value,
  onChange,
}: {
  id: string;
  required?: boolean;
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <CheckboxContainer>
      <BaseCheckbox
        name={id}
        checked={!!value}
        onChange={(e) => {
          onChange && onChange(e.target.checked);
        }}
      />
      <RequiredText
        required={required}
        fontSize={13}
        lineHeight={1.81}
        color="#333d4b"
      >
        <span>{required ? "(필수)" : "(선택)"}</span> {label}
      </RequiredText>
    </CheckboxContainer>
  );
}
