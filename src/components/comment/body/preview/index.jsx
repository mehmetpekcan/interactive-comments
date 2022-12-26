import React from "react";
import styles from "./styles.module.scss";

function Preview({ replyingTo, content }) {
  return (
    <p>
      {!!replyingTo && (
        <span className={styles.commentReplyingTo}>@{replyingTo}&nbsp;</span>
      )}
      {content}
    </p>
  );
}

export { Preview };
