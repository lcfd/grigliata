import React from 'react';
import styled from 'styled-components';
import { TColumnType } from '../../typings/column';
import { createColumnResponsiveStyle } from './utils/createColumnResponsiveStyle';

const StyledWrapper = styled.div<TColumnType>`
  /* Default styles */
  position: relative;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  /* Styles based on props */
  ${(props) => createColumnResponsiveStyle(props)}
`;

export const Column: TColumnType = (props) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};
