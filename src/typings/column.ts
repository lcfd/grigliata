import { ALLOWED_RESPONSIVE_COLUMN_PROPS } from "../utils/const";

type ColumnWidthRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnWidthValuesType = {
  mobile: ColumnWidthRange;
  tabletPortrait: ColumnWidthRange;
  tabletLandscape: ColumnWidthRange;
  desktop: ColumnWidthRange;
};

export type ColumnResponsiveValuesType = {
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
};

export type ColumnSpacingType = {
  columnWidth?: ColumnWidthValuesType;
  marginTop?: ColumnResponsiveValuesType;
  marginBottom?: ColumnResponsiveValuesType;
  marginLeft?: ColumnResponsiveValuesType;
  marginRight?: ColumnResponsiveValuesType;
  paddingTop?: ColumnResponsiveValuesType;
  paddingBottom?: ColumnResponsiveValuesType;
  paddingLeft?: ColumnResponsiveValuesType;
  paddingRight?: ColumnResponsiveValuesType;
};

export type ColumnType = React.FunctionComponent<ColumnSpacingType>;

export type AllowedResponsiveProps = typeof ALLOWED_RESPONSIVE_COLUMN_PROPS[number];
