import styled from "styled-components";

interface TextProps {
  fontWeight?: 400 | 500 | "bold";
  fontSize?: number;
  opacity?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  textDecoration?: "underline" | "overline" | "line-through";
}

export const BaseText = styled.div<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};

  white-space: pre-line;
  text-align: center;

  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration}`};
`;
