"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import MessageIcon from "@/public/message.svg";

import Searchbar from "../searchbar/searchbar";
import ChatCard from "./chat-card/chat-card";
import styles from "./sidebar.module.css";
import { useChatContext } from "@/context/ChatContext";
import Modal from "../modal/modal";
import { initialChatState } from "@/context/chatReducer";

export default function Sidebar({ data }: { data?: Array<any> }) {
  const chatContext = useChatContext();

  const { state = initialChatState, dispatch = () => {} } = chatContext || {};

  useEffect(() => {
    dispatch({ type: "SET_CHAT_ID", payload: data?.[0].id });
  }, []);

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarHeader}>
            <Image
              src="/logo.svg"
              alt="FluenciAI Logo"
              width={50}
              height={50}
            />
            <h1 className={styles.sidebarTitle}>Chat buddies</h1>
          </div>
          <Searchbar
            onclick={() => {
              dispatch({ type: "TOGGLE_MODAL" });
            }}
          />
          <div className={styles.subtitle}>
            <Image
              src={MessageIcon}
              alt="Message Icon"
              width={22}
              height={22}
            />
            All conversations
          </div>
          <div className={styles.conversations}>
            {data?.map((data: any, index) => (
              <ChatCard
                key={index}
                data={data}
                isActive={data.id === state?.chatId}
                index={index}
                onClick={() =>
                  dispatch({ type: "SET_CHAT_ID", payload: data?.id })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
