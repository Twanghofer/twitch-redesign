import React from "react";

function Message({ user, text, color }) {
  return (
    <p>
      <span className={`font-bold ${color}`}>{user}</span>: {text}
    </p>
  );
}

export default Message;
