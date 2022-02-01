import styled from "styled-components";

export const BaseCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 22px;
  height: 22px;
  border-radius: 5px;

  border-radius: 5px;
  border: 1px solid #999;

  :checked {
    border: none;
    background: #1461ff;
  }

  font-size: 9px;
`;
