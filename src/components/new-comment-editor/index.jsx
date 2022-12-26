import React from "react";
import styles from "./styles.module.scss";

import { TextArea } from "../textarea";
import { Button } from "../button";

function NewCommentEditor({ username, image, isReply = false }) {
  return (
    <div className={styles.editorWrapper}>
      <img className={styles.userImage} src={image.webp} alt={username} />
      <TextArea placeholder="Add a comment..." />
      <Button variant="primary">{isReply ? "Reply" : "Send"}</Button>
    </div>
  );
}

export { NewCommentEditor };
