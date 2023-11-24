"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import Searchbar from "@/components/searchbar/searchbar";
import ChatCard from "@/components/sidebar/chat-card/chat-card";
import MessageIcon from "@/public/message.svg";

import styles from "./mobile-chats.module.css";

export default function MobileChats({
  data,
  selectedChat,
  closeMobileChats,
  isOpen,
}: {
  data?: Array<any>;
  selectedChat?: (index: number) => void;
  closeMobileChats?: () => void;
  isOpen?: boolean;
}) {
  const [activeChat, setActiveChat] = useState(data?.[0]?.id);

  let initalRender = true;

  useEffect(() => {
    if (initalRender) {
      initalRender = false;
      return;
    }
  }, []);

  useEffect(() => {
    selectedChat && selectedChat(activeChat);
  }, [activeChat, selectedChat]);

  return (
    <div
      className={`${styles.mobileSidebar} ${isOpen && styles.open} ${
        !initalRender && !isOpen && styles.closed
      }`}
    >
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
              id={data.id}
              key={index}
              data={data}
              isActive={data.id === activeChat || activeChat === index}
              index={index}
              onClick={() => {
                setActiveChat(data?.id);
                closeMobileChats && closeMobileChats();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
