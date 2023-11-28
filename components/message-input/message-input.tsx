"use client";
import Image from "next/image";
import { useState } from "react";

import VoiceIcon from "@/public/voice.svg";

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
      />
      <div>
        <Image src={VoiceIcon} alt="Voice Icon" width={30} height={30} />
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
