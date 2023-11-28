"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import Searchbar from "@/components/searchbar/searchbar";
import ChatCard from "@/components/sidebar/chat-card/chat-card";
import { useChatContext } from "@/context/ChatContext";
import { initialChatState } from "@/context/chatReducer";
import MessageIcon from "@/public/message.svg";

import styles from "./mobile-chats.module.css";

export default function MobileChats({ data }: { data?: Array<any> }) {
  const context = useChatContext();
  const { state = initialChatState, dispatch = () => {} } = context || {};

  let initalRender = true;

  // useEffect(() => {
  //   if (initalRender) {
  //     dispatch({ type: "SET_CHAT_ID", payload: data?.[0].id });
  //     initalRender = false;
  //     return;
  //   }
  // }, []);

  return (
    <div
      className={`${styles.mobileSidebar} ${
        state?.mobileChatOpen && styles.open
      } ${!initalRender && !state?.mobileChatOpen && styles.closed}`}
    >
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarHeader}>
          <Image src="/logo.svg" alt="FluenciAI Logo" width={50} height={50} />
          <h1 className={styles.sidebarTitle}>Chat buddies</h1>
        </div>
        <Searchbar
          onclick={() => {
            dispatch({ type: "TOGGLE_MODAL" });
          }}
        />
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
              // isActive={data.id === state?.chatId}
              index={index}
              onClick={() => {
                dispatch({ type: "SET_CHAT_ID", payload: data?.id });
                dispatch({ type: "MOBILE_CHAT_TOGGLE", payload: false });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
