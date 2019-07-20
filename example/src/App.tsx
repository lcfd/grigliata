import React, { Component } from "react";
import styled from "styled-components";
import { DocRow } from "./docRow";
import { Column, Row } from "./reactComponentLib";
import { DocColumn } from "./docColumn";
import { DocRoadmap } from "./docRoadmap";

const Title = styled.h1`
  text-align: center;
`;
const Subtitle = styled.h2`
  text-align: center;
`;
export const SectionTitle = styled.h3`
  border: 1px solid #444;
  padding: 1rem;
  margin-top: 2rem;
`;

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    padding-right: 15px;
    padding-left: 15px;
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

class App extends Component {
  render() {
    const ROW_PADDING = {
      mobile: 0.5,
      tabletPortrait: 0.5,
      tabletLandscape: 0.5,
      desktop: 0.5
    };
    return (
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
            <Title>GRIGLIATA 🥩</Title>
          </Column>
        </Row>
        <Row paddingLeft={ROW_PADDING} paddingRight={ROW_PADDING}>
          <Column
            columnWidth={{
              mobile: 12,
              tabletPortrait: 12,
              tabletLandscape: 12,
              desktop: 12
            }}
          >
            <Subtitle>A pragmatic grid system</Subtitle>
          </Column>
        </Row>
        <Row
          marginTop={{
            mobile: 3,
            tabletPortrait: 3,
            tabletLandscape: 3,
            desktop: 3
          }}
          paddingLeft={ROW_PADDING}
          paddingRight={ROW_PADDING}
        >
          <Column
            columnWidth={{
              mobile: 12,
              tabletPortrait: 12,
              tabletLandscape: 12,
              desktop: 12
            }}
          >
            <SectionTitle>Wait, read this before start swagging</SectionTitle>
            <h4>Opinionated</h4>
            <p>
              This framework will force you to manage every responsive case.
            </p>
            <h4>Responsive steps</h4>
            <pre>
              {`breakPoints: {
  mobile: '320px',
  tabletPortrait: '768px',
  tabletLandscape: '992px',
  desktop: '1200px'
}`}
            </pre>
            <p>
              <h4>Required</h4>
              <p>
                This CSS snippet is required in order to obtain working columns.
              </p>
              <pre>
                {`*,
*::before,
*::after {
  box-sizing: border-box;
}`}
              </pre>
            </p>
            <SectionTitle>Components</SectionTitle>
            <DocRow />
            <DocColumn />
            <DocRoadmap />
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
