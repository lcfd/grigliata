![logo](./assets/logo-colored.svg)

A styled-components grid system.

## Why you should use it?

* It's not rocket science
* It works
* It will force you to manage the responsiveness of your website/application. So no more random padding on your layout when used on tablet.

[Documentation](https://lcfd.github.io/grigliata/) that is also a demo.

## A full example

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


## Development

To test the package we suggest to use the [yalc](https://www.npmjs.com/package/yalc) package.

Here's a useful command to build and update your local build:

```
yarn build && yalc push
```

## Used by

- [pycon.it](https://pycon.it)
