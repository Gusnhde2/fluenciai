"use client";

import { formatDate } from "@/helpers/format-date";
import Image from "next/image";
import React from "react";
import styles from "./message.module.css";
import Logo from "@/public/logo.svg";

interface MessageProps {
  text?: string;
  role: "user" | "assistant";
  id?: number;
  profilePic?: string;
  created_at?: number;
  userName?: string;
  loading?: boolean;
}

interface Props {
  messageData: MessageProps;
}

export default function Message({
  text,
  role,
  id,
  created_at,
  userName,
  profilePic,
  loading,
}: MessageProps) {
  return (
    <div
      className={`${styles.messageWrapper} ${
        role === "user" && styles.userWrapper
      }`}
    >
      <div
        className={`${styles.messageContainer} ${
          role === "user" && styles.messageUser
        }`}
      >
        <div className={styles.image}>
          <Image src={Logo} alt="profile" />
        </div>
        <div
          className={`${styles.content} ${
            role === "user" && styles.userContent
          }`}
        >
          <div
            className={`${styles.nameDate} ${
              role === "user" && styles.messageUser
            } `}
          >
            <h3>{userName}</h3>
            <p>
              {created_at && formatDate(new Date(created_at * 1000).getTime())}
            </p>
          </div>
          <div
            className={`${styles.message} ${
              role === "user" && styles.userRadius
            }`}
          >
            {loading && (
              <div className={styles.typing}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {!loading && <p>{text}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
