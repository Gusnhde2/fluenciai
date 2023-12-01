"use client";
import Image from "next/image";

import { useChatContext } from "@/context/ChatContext";
import { initialChatState } from "@/context/chatReducer";
import MessageIcon from "@/public/message.svg";

import Searchbar from "../searchbar/searchbar";
import ChatCard from "./chat-card/chat-card";
import styles from "./sidebar.module.css";

export default function Sidebar({ data }: { data?: Array<any> }) {
  const chatContext = useChatContext();

  const { state = initialChatState, dispatch = () => {} } = chatContext || {};

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
              dispatch({ type: "TOGGLE_ASSISTANT_MODAL" });
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
                isActive={data.threadId === state?.activeThreadId}
                index={index}
                onClick={() => {
                  dispatch({
                    type: "SET_CHAT_ID",
                    payload: {
                      threadId: data?.threadId,
                      assistantId: data?.assistantId,
                    },
                  });
                  dispatch({
                    type: "SET_ASSISTANT_NAME",
                    payload: {
                      name: data.name,
                      lastname: data.lastname,
                    },
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
