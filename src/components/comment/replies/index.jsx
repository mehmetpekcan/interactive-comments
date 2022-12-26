import React from "react";
import styles from "./styles.module.scss";

import { Comment } from "../index";

function Replies({ replies, currentUser }) {
  return (
    <div className={styles.replies}>
      {replies.map((reply) => (
        <Comment key={reply.id} {...reply} currentUser={currentUser} />
      ))}
    </div>
  );
}

export { Replies };
