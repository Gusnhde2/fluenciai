"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import Searchbar from "../searchbar/searchbar";
import MessageIcon from "@/public/message.svg";
import ChatCard from "./chat-card/chat-card";

export default function Sidebar({ data }: { data?: Array<Object> }) {
  const [activeChat, setActiveChat] = useState(0);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarHeader}>
          <Image src="/logo.svg" alt="FluenciAI Logo" width={50} height={50} />
          <h1 className={styles.sidebarTitle}>Chat buddies</h1>
        </div>
        <Searchbar />
        <div className={styles.subtitle}>
          <Image src={MessageIcon} alt="Message Icon" width={22} height={22} />
          All conversations
        </div>
        {data?.map((data: Object, index) => (
          <ChatCard
            key={index}
            data={data}
            isActive={index === activeChat}
            index={index}
            onClick={() => setActiveChat(index)}
          />
        ))}
      </div>
    </div>
  );
}
