"use client";

import MessageInput from "@/components/message-input/message-input";
import MobileChats from "@/components/mobile-chats/mobile-chats";
import Sidebar from "@/components/sidebar/sidebar";
import { useChatContext } from "@/context/ChatContext";

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
      <div
        style={{
          marginLeft: "30rem",
          marginTop: "13rem",
          height: "calc(100vh - 5rem)",
        }}
      >
        <h1>Chat</h1>
        <p>{state?.chatId}</p>
      </div>
    </>
  );
}
