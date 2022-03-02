import React, { Component } from "react";
import styles from "./SupperButton.module.css";

export default class SupperButton extends Component {
  render() {
    return (
      <div className={styles.heading}>
        <button>Sendar</button>
      </div>
    );
  }
}
