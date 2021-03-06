import styled from "styled-components";

interface TextProps {
  fontWeight?: 400 | 500 | 600 |"bold";
  fontSize?: number;
  opacity?: number;
  lineHeight?: number;
  letterSpacing?: number;
  color?: string;
  textDecoration?: "underline" | "overline" | "line-through";
  margin?: string;
  textAlign?: "left" | "right" | "center";
}

export const BaseText = styled.div<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};

  white-space: pre-line;
  word-break: keep-all;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const BaseH1 = styled.h1<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};

  white-space: pre-line;
  word-break: keep-all;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const BaseH2 = styled.h2<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};

  white-space: pre-line;
  word-break: keep-all;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const BaseH3 = styled.h2<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};

  white-space: pre-line;
  word-break: keep-all;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const BaseParagrpah = styled.p<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `14px`)};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};

  white-space: pre-line;
  word-break: keep-all;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing: ${letterSpacing}px`};
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`;
