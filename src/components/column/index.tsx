import React from 'react';
import styled, { css } from 'styled-components';
import { TColumnType } from '../../typings/column';
import { stringOrNumber } from '../../typings/general';

const breakPoints = ['320px', '768px', '992px', '1200px'];
const oldWordyBreakPoints = ['mobile', 'tabletPortrait', 'tabletLandscape', 'desktop'];

const parseValue = (value: stringOrNumber) => {
  return typeof value === 'string' ? value : `${value}rem`;
};

const createResponsiveStyle = (props: TColumnType) => {
  const propsEntries = Object.entries(props);
  return propsEntries.map((entry) => {
    const [key, value] = entry;

    switch (key) {
      case 'xp':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parseValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-left: ${parsedValue};
              padding-right: ${parsedValue};
            }
          `;
        });

      case 'yp':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parseValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-top: ${parsedValue};
              padding-bottom: ${parsedValue};
            }
          `;
        });

      case 'xm':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parseValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-left: ${parsedValue};
              margin-right: ${parsedValue};
            }
          `;
        });

      case 'ym':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parseValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-top: ${parsedValue};
              margin-bottom: ${parsedValue};
            }
          `;
        });

      case 'columnWidth':
        return breakPoints.map((breakPoint, i) => {
          return css`
            @media (min-width: ${breakPoint}) {
              width: ${(value[oldWordyBreakPoints[i]] / 12) * 100}%;
              box-sizing: border-box;
            }
          `;
        });
    }
  });
};

const StyledWrapper = styled.div<TColumnType>`
  /* Default styles */
  position: relative;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  /* Styles based on props */
  ${(props) => createResponsiveStyle(props)}
`;

export const Column: TColumnType = (props) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};
