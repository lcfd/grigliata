import React from "react";

import styled, { css } from "styled-components";
import {
  ContainerType,
  ContainerCustomizationsType
} from "../typings/container";

const MEDIA_STEPS = [
  {
    step: 576,
    style: css`
      padding-right: 15px;
      padding-left: 15px;
      max-width: 540px;
    `
  },
  {
    step: 768,
    style: css`
      max-width: 720px;
    `
  },
  {
    step: 992,
    style: css`
      max-width: 960px;
    `
  },
  {
    step: 1200,
    style: css`
      max-width: 1140px;
    `
  }
];

const Wrapper = styled.div<ContainerCustomizationsType>`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${props => {
    if (props.fullWidth) {
      return css`
        max-width: 100%;
      `;
    }
    return css`
      ${MEDIA_STEPS.map(o => {
        return css`
          @media (min-width: ${o.step}px) {
            ${o.style}
          }
        `;
      })}
    `;
  }}
`;

export const Container: ContainerType = props => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
