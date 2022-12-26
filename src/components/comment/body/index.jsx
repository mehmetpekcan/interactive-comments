import React, { Suspense, lazy } from "react";
import styles from "./styles.module.scss";

import { Edit } from "./edit";
import { Preview } from "./preview";

import { EDIT_MODE, PREVIEW_MODE } from "./constants";

const Modes = {
  [EDIT_MODE]: Edit,
  [PREVIEW_MODE]: Preview,
};

function Body({ mode, replyingTo, content }) {
  const CurrentMode = Modes[mode];

  return (
    <div className={styles.commentText}>
      <CurrentMode replyingTo={replyingTo} content={content} />
    </div>
  );
}

export { Body };
