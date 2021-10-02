import React from "react";

export const DocContainer = () => {
  return (
    <div>
      <h4>Container</h4>
      <p>
        A div that can be full/limited width. <br />
        It has steps at:
      </p>
      <ul>
        <li>576px</li>
        <li>768px</li>
        <li>992px</li>
        <li>1200px</li>
      </ul>
      <p>
        <strong>Props</strong>
      </p>
      <ul>
        <li>fullWidth: boolean -> Expand the container to 100%</li>
      </ul>
      <p>
        <strong>Example</strong>
      </p>
      <pre>
        {`<Container fullWidth>
  ...
</Container>`}
      </pre>
    </div>
  );
};
