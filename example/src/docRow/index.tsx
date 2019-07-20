import React from "react";

export const DocRow = () => {
  return (
    <div>
      <h4>Row</h4>
      <p>
        This is the container for the Column component.
        <br />
        <br />
        <strong>Props</strong>
        <ul>
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
      <p>
        <strong>Example</strong>
      </p>
      <pre>
        {`<Row paddingLeft={{
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
}}>
  ...
</Row>`}
      </pre>
    </div>
  );
};
