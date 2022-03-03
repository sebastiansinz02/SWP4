import React, { Component } from "react";

import styles from "./Card.module.css";

export default class List extends Component {
  render() {
    return (
      <div className={styles.card}>
        <img src="./img_avatar.png"></img>
        <div className={styles.text}>
          <h2>John Doe</h2>
          <p1>Architect & Engineer</p1>{" "}
        </div>
      </div>
    );
  }
}
