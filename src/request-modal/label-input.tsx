import React from "react";
import styled from "styled-components";
import { BaseText, BaseInput } from "../components";

const InputContainer = styled.div`
  width: 100%;
`;

export default function LabelInput({
  id,
  label,
  value,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <InputContainer>
      <BaseText
        fontSize={14}
        lineHeight={2.14}
        textAlign="left"
        margin="0 0 8px"
      >
        {label}
      </BaseText>
      <BaseInput
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </InputContainer>
  );
}
