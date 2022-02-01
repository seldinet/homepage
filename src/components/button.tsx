import styled from "styled-components";

interface ButtonProps {
  borderRadius?: number;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  lineHeight?: number;
  letterSpacing?: number;
  fontWeight?: 400 | 500 | "bold";
  fontSize?: number;
}

export const BaseButton = styled.div<ButtonProps>`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border: 0;

  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "4px"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#1461ff"};
  padding: ${({ padding }) => (padding ? padding : "12px 20px")};

  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;
