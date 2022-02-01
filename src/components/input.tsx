import styled from "styled-components";

export const BaseInput = styled.input`
  width: 100%;
  height: 54px;

  padding: 15px 12px;
  border: 1px solid #f4f5f7;
  outline: none;
  box-shadow: none;
  background-color: #f4f5f7;
  border-radius: 12px;

  font-size: 16px;
  line-height: 1.88;
  color: #4e5968;
  box-sizing: border-box;

  :focus {
    outline: none;
    border: 1px solid rgba(20, 97, 255, 0.5);
  }
`;
