import { css } from 'styled-components';
import { TColumnType } from '../../../typings/column';
import { breakPoints, oldWordyBreakPoints } from '../../../utils/const';
import { parsePropValue } from '../../../utils/parsePropValue';

export const createColumnResponsiveStyle = (props: TColumnType) => {
  const propsEntries = Object.entries(props);
  return propsEntries.map((entry) => {
    const [key, value] = entry;

    switch (key) {
      case 'xp':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-left: ${parsedValue};
              padding-right: ${parsedValue};
            }
          `;
        });

      case 'yp':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-top: ${parsedValue};
              padding-bottom: ${parsedValue};
            }
          `;
        });

      case 'xm':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-left: ${parsedValue};
              margin-right: ${parsedValue};
            }
          `;
        });

      case 'ym':
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
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
