# Column

A grid system needs a Column component. Here we go.

It has a default <strong>0.5rem</strong> padding.

### Props

- columnWidth
- marginTop
- marginBottom
- marginLeft
- marginRight
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight


Each of them take the same object type as value: <br />

```jsx
const PROP_VALUES = {
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
}
```

The columnWidth prop works in twelfths (6 = 50%).

The padding* and margin* props are directly used as rem values. 
It accepts negative values.

### Example

```jsx
<Column
  columnWidth={{
    mobile: 12,
    tabletPortrait: 12,
    tabletLandscape: 12,
    desktop: 12
  }}
>
  ...
</Column>
```