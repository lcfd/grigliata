import React from 'react';
import styled, { css } from 'styled-components';
import { ContainerCustomizationsType, ContainerType } from '../../typings/container';
import { MEDIA_STEPS } from './constants';

const mediaSteps = MEDIA_STEPS.map((o) => {
  return css`
    @media (min-width: ${o.step}px) {
      ${o.style}
    }
  `;
});

const Wrapper = styled.div<ContainerCustomizationsType>`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${(props) => {
    if (props.fullWidth) {
      return css`
        max-width: 100%;
      `;
    }
    return css`
      ${mediaSteps}
    `;
  }}
`;

export const Container: ContainerType = (props) => {
  return <Wrapper {...props}>refresh{props.children}</Wrapper>;
};
