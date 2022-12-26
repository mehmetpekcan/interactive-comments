import React from "react";

import { Button } from "../../button";
import styles from "./styles.module.scss";

function Reactions({ score }) {
  return (
    <div className={styles.reactions}>
      <Button
        className={styles.reactionButton}
        aria-labelledby="Positive reaction button"
      >
        <img src="./images/icon-plus.svg" aria-hidden="true" />
      </Button>
      <p className={styles.score}>{score}</p>
      <Button
        className={styles.reactionButton}
        aria-labelledby="Positive reaction button"
      >
        <img src="./images/icon-minus.svg" aria-hidden="true" />
      </Button>
    </div>
  );
}

export { Reactions };
