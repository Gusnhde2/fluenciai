"use client";

import Image from "next/image";

import { formatDate } from "@/helpers/format-date";

import styles from "./chat-card.module.css";

interface ChatCardData {
  name?: string;
  lastname?: string;
  lastSeen?: number;
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
            <h4>
              {isActive ? (
                <b>
                  {data?.name} {data?.lastname}
                </b>
              ) : (
                `${data?.name} ${data?.lastname}`
              )}
            </h4>
            <span>{data?.lastMessage}</span>
          </div>
          {<p>{formatDate(data?.lastSeen || 0)}</p>}
        </div>
      </div>
    </button>
  );
}
