import React from "react";

export const DocColumn = () => {
  return (
    <div>
      <h4>Column</h4>
      <p>
        Inside a Row will be a
        <br />
        It has a default <strong>0.5rem</strong> padding.
        <br />
        <br />
        <strong>Props</strong>
        <ul>
          <li>columnWidth</li>
          <li>marginTop</li>
          <li>marginBottom</li>
          <li>marginLeft</li>
          <li>marginRight</li>
          <li>paddingTop</li>
          <li>paddingBottom</li>
          <li>paddingLeft</li>
          <li>paddingRight</li>
        </ul>
        <br />
        Each of them take the same object type as value: <br />
      </p>
      <pre>
        {`{
  mobile: number;
  tabletPortrait: number;
  tabletLandscape: number;
  desktop: number;
}`}
      </pre>
      <p>The columnWidth prop works in twelfths (6 = 50%).</p>
      <p>
        The padding* and margin* props are directly used as rem values. It
        accepts negative values.
      </p>
      <p>
        <strong>Example</strong>
      </p>
      <pre>
        {`<Column
  columnWidth={{
    mobile: 12,
    tabletPortrait: 12,
    tabletLandscape: 12,
    desktop: 12
  }}
>
  ...
</Column>`}
      </pre>
    </div>
  );
};
