import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "It's not rocket science",
    // Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: <>🚀</>,
  },
  {
    title: "It works",
    // Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: <>🎉</>,
  },
  {
    title: "Responsiveness",
    // Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        It will force you to manage the responsiveness of your
        website/application. So no more random padding on your layout when used
        on tablet.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
