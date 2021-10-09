import { stringOrNumber } from '../typings/general';

export const parsePropValue = (value: stringOrNumber) => {
  return typeof value === 'string' ? value : `${value}rem`;
};
