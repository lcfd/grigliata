import { css } from 'styled-components';

export const MEDIA_STEPS = [
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
