"use client";

import Button from "../button/button";
import styles from "./message-input.module.css";

export default function MessageInput({
  inputHandler,
  inputValue,
  sendMessage,
}: {
  inputHandler: (e: any) => void;
  inputValue: string;
  sendMessage: () => void;
}) {
  return (
    <div className={styles.messageInput}>
      <input
        type="text"
        placeholder={"Type message..."}
        onChange={inputHandler}
        value={inputValue}
      />
      <div>
        <Button
          disabled={inputValue === ""}
          type="send"
          text="Send"
          onClick={sendMessage}
        />
      </div>
    </div>
  );
}
