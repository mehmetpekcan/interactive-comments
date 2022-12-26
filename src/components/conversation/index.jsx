import React from "react";

import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";

import styles from "./styles.module.scss";

function Conversation({ comments = [], currentUser }) {
  return (
    <div className={styles.conversationWrapper}>
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            {...comment}
            currentUser={currentUser}
            data={{ comment, currentUser }}
          />
        ))}
      <NewCommentEditor {...currentUser} />
    </div>
  );
}

export { Conversation };
