# Column

A grid system needs a Column component. Here we go.

It has a default <strong>0.5rem</strong> padding.

### Props

#### Extended props

- columnWidth
- marginTop
- marginBottom
- marginLeft
- marginRight
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight

#### Abbreviated props [new in 0.0.19]

Those are the abbreviated version of the margins and paddings props. 
They work differently, instead of an object they take an array.
The array can contain both strings or numbers. If the element is a string is directly used in CSS, instead, if it is a number the value is used with rem.
The array is used in a mobile-first way so the first value is used in the first media query, the second in the second media query, and so on.

> Remember, those are the break points ['320px', '768px', '992px', '1200px']

x = horizontal
y = vertical

m = margin
p = padding

**Combined paddings**

- xp
- yp

**Combined margins**

- xm
- ym

**Margins**

- mt
- mb
- ml
- mr

**Paddings**

- pt
- pb
- pl
- pr


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