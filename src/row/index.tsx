import React from "react";

import styled, { css } from "styled-components";
import { AllowedResponsiveProps, RowType } from "../typings/row";
import { camelToKebabCase } from "../utils/camel-to-kebab-case";
import { ALLOWED_RESPONSIVE_ROW_PROPS } from "../utils/const";
import { customTheme } from "../utils/theme";

const createProperty = (prop: string, value: number) => {
  return prop === "justify-content"
    ? `${prop}: ${value};`
    : `${prop}: ${value}rem;`;
};

const responsiveStyle = (props: RowType) => {
  let assembledStyle = css``;
  Object.entries(props)
    .filter(
      ([key]) =>
        ALLOWED_RESPONSIVE_ROW_PROPS.indexOf(key as AllowedResponsiveProps) !==
        -1
    )
    .map(([key, values]) => {
      const prop = camelToKebabCase(key);
      assembledStyle = css`
        ${assembledStyle}
        ${Object.entries(customTheme.breakPoints).map(([k, value]) => {
          return `@media (min-width: ${value}) {
          ${prop}: ${values[k]}rem;
        }`;
        })}
      `;
    });

  return assembledStyle;
};

const Wrapper = styled.div<RowType>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  ${props => {
    return responsiveStyle(props);
  }}
`;

export const Row: RowType = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
