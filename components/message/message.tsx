"use client";

import { formatDate } from "@/helpers/format-date";
import Image from "next/image";
import React from "react";
import styles from "./message.module.css";
import Logo from "@/public/logo.svg";

interface MessageProps {
  text: string;
  isUserMessage: boolean;
  id: number;
  profilePic: string;
  time: number;
  userName: string;
}

interface Props {
  messageData: MessageProps;
}

export default function Message({ messageData }: Props) {
  return (
    <div
      className={`${styles.messageWrapper} ${
        messageData.isUserMessage && styles.userWrapper
      }`}
    >
      <div
        className={`${styles.messageContainer} ${
          messageData.isUserMessage && styles.messageUser
        }`}
      >
        <div className={styles.image}>
          <Image src={Logo} alt="profile" />
        </div>
        <div
          className={`${styles.content} ${
            messageData.isUserMessage && styles.userContent
          }`}
        >
          <div
            className={`${styles.nameDate} ${
              messageData.isUserMessage && styles.messageUser
            } `}
          >
            <h3>{messageData.userName}</h3>
            <p>{formatDate(messageData.time)}</p>
          </div>
          <div
            className={`${styles.message} ${
              messageData.isUserMessage && styles.userRadius
            }`}
          >
            <p>{messageData.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
