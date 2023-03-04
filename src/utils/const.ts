const commonAllowedProperties = [
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight'
];

export const ALLOWED_RESPONSIVE_ROW_PROPS = [...commonAllowedProperties, 'justifyContent'];

export const breakPoints = ['320px', '768px', '992px', '1200px'];

export const oldWordyBreakPoints = ['mobile', 'tabletPortrait', 'tabletLandscape', 'desktop'];
