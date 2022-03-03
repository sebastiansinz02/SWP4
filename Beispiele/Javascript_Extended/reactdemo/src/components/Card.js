import React, { Component } from "react";

import styles from "./Card.module.css";

export default class List extends Component {
  render() {
    return (
      <div className={styles.card}>
        <image></image>
        <h2>John Doe</h2>
        <p>Architect & Engineer</p>
      </div>
    );
  }
}
