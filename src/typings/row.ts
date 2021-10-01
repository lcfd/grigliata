import { ALLOWED_RESPONSIVE_ROW_PROPS } from "../utils/const";

export type RowResponsiveValuesType = {
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
};

export type RowResponsiveValuesWidthType = {
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
};

export type AllowedResponsiveProps = typeof ALLOWED_RESPONSIVE_ROW_PROPS[number];

export type RowSpacingType = {
  marginTop?: RowResponsiveValuesWidthType;
  marginBottom?: RowResponsiveValuesType;
  marginLeft?: RowResponsiveValuesType;
  marginRight?: RowResponsiveValuesType;
  paddingTop?: RowResponsiveValuesType;
  paddingBottom?: RowResponsiveValuesType;
  paddingLeft?: RowResponsiveValuesType;
  paddingRight?: RowResponsiveValuesType;
};

export type RowType = React.FunctionComponent<RowSpacingType>;
