"use client";
import React, { useContext } from "react";
import { ChatContext } from "./layout";

export default function Chat(props: any) {
  const data = useContext(ChatContext);
  return (
    <div
      style={{
        marginLeft: "3rem",
        marginTop: "13rem",
        height: "calc(100vh - 5rem)",
      }}
    >
      <h1>Chat</h1>
      <p>{data.name}</p>
    </div>
  );
}
