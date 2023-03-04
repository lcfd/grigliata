import { css } from 'styled-components';
import { TColumnType } from '../../../typings/column';
import { breakPoints, oldWordyBreakPoints } from '../../../utils/const';
import { parsePropValue } from '../../../utils/parsePropValue';

export const createColumnResponsiveStyle = (props: TColumnType) => {
  const propsEntries = Object.entries(props);
  return propsEntries.map((entry) => {
    const [key, value] = entry;

    switch (key) {
      // Combined paddings
      case 'xp': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-left: ${parsedValue};
              padding-right: ${parsedValue};
            }
          `;
        });
      }

      case 'yp': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-top: ${parsedValue};
              padding-bottom: ${parsedValue};
            }
          `;
        });
      }

      // Combined margins
      case 'xm': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-left: ${parsedValue};
              margin-right: ${parsedValue};
            }
          `;
        });
      }

      case 'ym': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-top: ${parsedValue};
              margin-bottom: ${parsedValue};
            }
          `;
        });
      }

      // Margins: mt mb ml mr
      case 'mt': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-top: ${parsedValue};
            }
          `;
        });
      }
      case 'mb': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-bottom: ${parsedValue};
            }
          `;
        });
      }
      case 'ml': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-left: ${parsedValue};
            }
          `;
        });
      }
      case 'mr': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              margin-right: ${parsedValue};
            }
          `;
        });
      }

      // Paddings: pt pb pl pr
      case 'pt': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-top: ${parsedValue};
            }
          `;
        });
      }
      case 'pb': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-bottom: ${parsedValue};
            }
          `;
        });
      }
      case 'pl': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-left: ${parsedValue};
            }
          `;
        });
      }
      case 'pr': {
        return breakPoints.slice(0, value.length).map((breakPoint, i) => {
          const parsedValue = parsePropValue(value[i]);
          return css`
            @media (min-width: ${breakPoint}) {
              padding-right: ${parsedValue};
            }
          `;
        });
      }

      // Old wordy width
      case 'columnWidth': {
        return breakPoints.map((breakPoint, i) => {
          return css`
            @media (min-width: ${breakPoint}) {
              width: ${(value[oldWordyBreakPoints[i]] / 12) * 100}%;
              box-sizing: border-box;
            }
          `;
        });
      }
    }
  });
};
