"use client";

import MessageInput from "@/components/message-input/message-input";
import Message from "@/components/message/message";
import MobileChats from "@/components/mobile-chats/mobile-chats";
import Sidebar from "@/components/sidebar/sidebar";
import { useChatContext } from "@/context/ChatContext";

const messages = [
  {
    id: 1,
    text: "Hello, how are you? I'm Neki Mali, your personal assistant. How can I help you today?",
    isUserMessage: true,
    profilePic: "",
    userName: "Neki Mali",
    time: Date.now(),
  },
  {
    id: 2,
    text: "Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?",
    isUserMessage: false,
    profilePic: "",
    userName: "John Doe",
    time: Date.now(),
  },
  {
    id: 2,
    text: "Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?",
    isUserMessage: false,
    profilePic: "",
    userName: "John Doe",
    time: Date.now(),
  },
  {
    id: 2,
    text: "Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?",
    isUserMessage: false,
    profilePic: "",
    userName: "John Doe",
    time: Date.now(),
  },
  {
    id: 2,
    text: "Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?",
    isUserMessage: true,
    profilePic: "",
    userName: "John Doe",
    time: Date.now(),
  },
  {
    id: 2,
    text: "Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?",
    isUserMessage: false,
    profilePic: "",
    userName: "John Doe",
    time: Date.now(),
  },
  {
    id: 2,
    text: "Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?Hi, how are you? I'm John Doe, your personal assistant. How can I help you today?",
    isUserMessage: true,
    profilePic: "",
    userName: "John Doe",
    time: Date.now(),
  },
];

export default function Chat(props: any) {
  const mockData = props.params.data;
  const context = useChatContext();

  const { state } = context || {};

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <MessageInput />
      {isMobile && <MobileChats data={mockData} />}
      {!isMobile && <Sidebar data={mockData} />}
      <div style={{ zIndex: "-2" }}>
        {messages.map((message) => (
          <Message messageData={message} />
        ))}
      </div>
    </>
  );
}
