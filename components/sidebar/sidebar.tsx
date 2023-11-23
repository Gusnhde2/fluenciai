"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import MessageIcon from "@/public/message.svg";

import Searchbar from "../searchbar/searchbar";
import ChatCard from "./chat-card/chat-card";
import styles from "./sidebar.module.css";

export default function Sidebar({
  data,
  selectedChat,
}: {
  data?: Array<any>;
  selectedChat?: (index: number) => void;
}) {
  const [activeChat, setActiveChat] = useState(data?.[0]?.id);

  useEffect(() => {
    selectedChat && selectedChat(activeChat);
  }, [activeChat, selectedChat]);

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
        <div className={styles.conversations}>
          {data?.map((data: any, index) => (
            <ChatCard
              key={index}
              data={data}
              isActive={data.id === activeChat || activeChat === index}
              index={index}
              onClick={() => setActiveChat(data?.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}