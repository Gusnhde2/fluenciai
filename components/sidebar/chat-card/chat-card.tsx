"use client";

import Image from "next/image";
import styles from "./chat-card.module.css";
import { useState } from "react";
import { on } from "events";
import { formatDate } from "@/helpers/format-date";

interface ChatCardData {
  name?: string;
  lastMessageDate?: number;
  lastMessage?: string;
  profilePicture?: string;
}

interface ChatCardProps {
  onClick?: () => void;
  isActive?: boolean;
  data?: ChatCardData;
  index?: number;
  id?: number;
}

export default function ChatCard({
  onClick,
  isActive,
  data,
  index,
  id,
}: ChatCardProps) {
  return (
    <button
      className={`${styles.card} ${isActive && styles.active}`}
      onClick={onClick}
    >
      <div className={styles.contentWraper}>
        <div className={styles.image}>
          <Image
            src={data?.profilePicture ?? "/logo.svg"}
            alt="FluenciAI Logo"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.cardContent}>
          <div>
            <h4>{isActive ? <b>{data?.name}</b> : data?.name}</h4>
            <span>{data?.lastMessage}</span>
          </div>
          {<p>{formatDate(data?.lastMessageDate ?? 0)}</p>}
        </div>
      </div>
    </button>
  );
}
