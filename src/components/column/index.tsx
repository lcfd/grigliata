import React from "react";
import styled, { css } from "styled-components";
import { AllowedResponsiveProps, ColumnType } from "../../typings/column";
import { camelToKebabCase } from "../../utils/camel-to-kebab-case";
import { ALLOWED_RESPONSIVE_COLUMN_PROPS } from "../../utils/const";
import { customTheme } from "../../utils/theme";

const createProperty = (prop: string, value: number) => {
  return prop === "column-width"
    ? `width: ${(value / 12) * 100}%;`
    : `${prop}: ${value}rem;`;
};

const responsiveStyle = (props: ColumnType) => {
  let assembledStyle = css``;
  Object.entries(props)
    .filter(
      ([key]) =>
        ALLOWED_RESPONSIVE_COLUMN_PROPS.indexOf(
          key as AllowedResponsiveProps
        ) !== -1
    )
    .map(([key, values]) => {
      const prop = camelToKebabCase(key);
      assembledStyle = css`
        ${assembledStyle}${Object.entries(customTheme.breakPoints).map(
          ([k, breakPointValue]) => {
            return css`
              @media (min-width: ${breakPointValue}) {
                ${createProperty(prop, values[k])}
              }
            `;
          }
        )}
      `;
    });

  return assembledStyle;
};

const Wrapper = styled.div<ColumnType>`
  position: relative;
  padding: 0.5rem;
  ${(props) => {
    return responsiveStyle(props);
  }}
`;

export const Column: ColumnType = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
