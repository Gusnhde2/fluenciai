"use client";
import { useChatContext } from "@/context/ChatContext";
import React, { useContext } from "react";

export default function Chat(props: any) {
  const context = useChatContext();

  const { state } = context || {};

  return (
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
  );
}
