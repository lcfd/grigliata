import { stringOrNumber } from './general';

type TColumnWidthRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type TColumnWidthValuesType = {
  mobile: TColumnWidthRange;
  tabletPortrait: TColumnWidthRange;
  tabletLandscape: TColumnWidthRange;
  desktop: TColumnWidthRange;
};

export type ColumnResponsiveValuesType = {
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
};

export type TOldColumnSpacings = {
  columnWidth?: TColumnWidthValuesType;
  marginTop?: ColumnResponsiveValuesType;
  marginBottom?: ColumnResponsiveValuesType;
  marginLeft?: ColumnResponsiveValuesType;
  marginRight?: ColumnResponsiveValuesType;
  paddingTop?: ColumnResponsiveValuesType;
  paddingBottom?: ColumnResponsiveValuesType;
  paddingLeft?: ColumnResponsiveValuesType;
  paddingRight?: ColumnResponsiveValuesType;
};

/**
 * Array usage
 *  The order is mobile first so:
 *    0 -> '320px', 1 -> '768px', 2 -> '992px', 3 -> '1200px'
 */
export type TSpacings = {
  // Combined paddings
  xp?: stringOrNumber[];
  yp?: stringOrNumber[];
  // Combined margins
  xm?: stringOrNumber[];
  ym?: stringOrNumber[];
  // Margins
  mt?: stringOrNumber[];
  mb?: stringOrNumber[];
  ml?: stringOrNumber[];
  mr?: stringOrNumber[];
  // Paddings
  pt?: stringOrNumber[];
  pb?: stringOrNumber[];
  pl?: stringOrNumber[];
  pr?: stringOrNumber[];
};

export type TColumnType = React.FC<TOldColumnSpacings & TSpacings>;
