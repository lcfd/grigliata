import React from "react";

import styled, { css } from "styled-components";
import { ContainerType } from "../typings/container";

const Wrapper = styled.div<ContainerType>`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    padding-right: 15px;
    padding-left: 15px;
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  ${props => {
    console.log(props);
    if (props.fullWidth) {
      return css`
        width: 100%;
      `;
    }
  }}
`;

export const Container: ContainerType = props => {
  console.log(props);

  return <Wrapper {...props}>{props.children}</Wrapper>;
};
