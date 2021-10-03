# Row

This is the container for the Column component.

### Props

- marginTop
- marginBottom
- marginLeft
- marginRight
- paddingTop
- paddingBottom
- paddingLeft
- paddingRight


Each of them take the same object type as value:

```jsx
const PROP_VALUES = {
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
}
```
 
### Example

```jsx
<Row 
  paddingLeft={{
    mobile: 0.5,
    tabletPortrait: 0.5,
    tabletLandscape: 0.5,
    desktop: 0.5
  }} 
  paddingRight={{
    mobile: 0.5,
    tabletPortrait: 0.5,
    tabletLandscape: 0.5,
    desktop: 0.5
  }}
>
  ...
</Row>
```
