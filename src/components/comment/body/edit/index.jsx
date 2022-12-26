import React from "react";
import styles from "./styles.module.scss";

import { TextArea } from "../../../textarea";
import { Button } from "../../../button";

function Edit({ replyingTo, content }) {
  return (
    <div className={styles.editWrapper}>
      <TextArea defaultValue={`@${replyingTo} ${content}`} />
      <Button className={styles.updateButton} variant="primary">
        Update
      </Button>
    </div>
  );
}

export { Edit };
