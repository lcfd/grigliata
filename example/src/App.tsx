import React, { Component } from "react";

import { Row, Column } from "./reactComponentLib";

class App extends Component {
  render() {
    return (
      <div>
        <Row
          marginBottom={{
            mobile: 1,
            tabletLandscape: 1,
            tabletPortrait: 1,
            desktop: 1
          }}
        >
          <Column
            colWidth={{
              mobile: 12,
              tabletLandscape: 12,
              tabletPortrait: 12,
              desktop: 12
            }}
          >
            asdfalskdjf
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;
