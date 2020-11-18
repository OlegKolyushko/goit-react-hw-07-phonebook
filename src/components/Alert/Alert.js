import React from "react";
import styles from './Alert.module.css';

function Alert() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.text}>Contact already exist!</h1>
      </div>
    </>
  );
}
export default Alert;
