import React, { useState } from "react";

import { Reactions } from "./reactions";
import { Body } from "./body";
import { Header } from "./header";
import { Replies } from "./replies";
import { NewCommentEditor } from "../new-comment-editor";
import styles from "./styles.module.scss";

import { EDIT_MODE, PREVIEW_MODE } from "./body/constants";

function Comment({
  content,
  createdAt,
  score,
  user,
  replies = [],
  currentUser,
  replyingTo,
  data,
}) {
  const [isReplying, setReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);

  const handleReply = () => {
    setReplying(!isReplying);
  };

  const handleDelete = () => {
    // Create a modal component and trigger it here
  };

  const handleEdit = () => {
    setEditting(!isEditting);
  };

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions score={score} />
        <div className={styles.commentContent}>
          <Header
            user={user}
            ownByCurrentUser={currentUser.username === user.username}
            createdAt={createdAt}
            onReply={handleReply}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <Body
            mode={isEditting ? EDIT_MODE : PREVIEW_MODE}
            replyingTo={replyingTo}
            content={content}
          />
        </div>
      </div>
      {isReplying && <NewCommentEditor {...currentUser} isReply={true} />}
      {replies.length > 0 && (
        <Replies replies={replies} currentUser={currentUser} />
      )}
    </>
  );
}

export { Comment };
