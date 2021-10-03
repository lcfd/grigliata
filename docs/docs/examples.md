# Examples

```jsx
export const App = () => {
  const ROW_PADDING = {
    mobile: 0.5,
    tabletPortrait: 0.5,
    tabletLandscape: 0.5,
    desktop: 0.5
  };

  return (
    <div>
      <Container>
          <Row paddingLeft={ROW_PADDING} paddingRight={ROW_PADDING}>
            <Column
              columnWidth={{
                mobile: 12,
                tabletPortrait: 12,
                tabletLandscape: 12,
                desktop: 12
              }}
            >
            <p>Content</p>
          </Column>
          </Row>
      </Container>
    </div>
  )
}
```
