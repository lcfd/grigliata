import React, { Component } from "react";

import { Row, Column } from "./reactComponentLib";

class App extends Component {
  render() {
    return (
      <div>
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
          <Column
            columnWidth={{
              mobile: 12,
              tabletPortrait: 12,
              tabletLandscape: 12,
              desktop: 6
            }}
          >
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                illo consequatur numquam, laudantium recusandae sed voluptas
                odio voluptate magni hic omnis vitae mollitia porro eius illum
                nesciunt ad blanditiis maxime!
              </p>
            </div>
          </Column>
          <Column
            columnWidth={{
              mobile: 12,
              tabletPortrait: 12,
              tabletLandscape: 12,
              desktop: 6
            }}
          >
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                illo consequatur numquam, laudantium recusandae sed voluptas
                odio voluptate magni hic omnis vitae mollitia porro eius illum
                nesciunt ad blanditiis maxime!
              </p>
            </div>
          </Column>
          <Column
            columnWidth={{
              mobile: 12,
              tabletPortrait: 12,
              tabletLandscape: 12,
              desktop: 6
            }}
          >
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
                illo consequatur numquam, laudantium recusandae sed voluptas
                odio voluptate magni hic omnis vitae mollitia porro eius illum
                nesciunt ad blanditiis maxime!
              </p>
            </div>
          </Column>
        </Row>
      </div>
    );
  }
}

export default App;
