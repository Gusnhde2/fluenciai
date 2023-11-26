"use client";

import { useState, useEffect } from "react";
import MessageInput from "@/components/message-input/message-input";
import Message from "@/components/message/message";
import MobileChats from "@/components/mobile-chats/mobile-chats";
import Sidebar from "@/components/sidebar/sidebar";
import { useChatContext } from "@/context/ChatContext";
import styles from "./chat.module.css";

const messages = [
  {
    id: 1,
    text: "Hello, how are you? I'm Neki Mali, your personal assistant. How can I help you today?",
    isUserMessage: true,
    profilePic: "",
    userName: "Neki Mali",
    time: Date.now(),
  },
];

export default function Chat(props: any) {
  const mockData = props.params.data;
  const context = useChatContext();

  const { state } = context || {};

  return (
    <>
      <MessageInput />

      <div className={styles.container}>
        {messages.map((message, index) => (
          <Message key={index} messageData={message} />
        ))}
      </div>
    </>
  );
}
