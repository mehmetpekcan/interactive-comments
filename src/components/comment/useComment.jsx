import React from "react";

function useComment(data) {
  const [isReplying, setReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);

  return {
    ...data,
    isReplying,
    setReplying,
    isEditting,
    setEditting,
  };
}

export { useComment };
