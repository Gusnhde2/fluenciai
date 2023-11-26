"use client";
import { headers } from "next/headers";
import styles from "./layout.module.css";
import { useEffect } from "react";

import MobileChats from "@/components/mobile-chats/mobile-chats";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { ChatProvider, useChatContext } from "@/context/ChatContext";
import { useSelectedLayoutSegment } from "next/navigation";
import { initialChatState } from "@/context/chatReducer";

const mockData = [
  {
    id: 1123,
    name: "John Doe",
    lastMessageDate: Date.now() - 86400000, // 1 day ago
    lastMessage: "Hey, how's it going?",
    //   profilePicture: "john_doe.jpg",
  },
  {
    id: 212312,
    name: "Jane Smith",
    lastMessageDate: Date.now() - 3600000, // 1 hour ago
    lastMessage: "I have a question for you.",
    //   profilePicture: "jane_smith.jpg",
  },
  {
    id: 312312,
    name: "Alex Johnson",
    lastMessageDate: Date.now() - 172800000, // 2 days ago
    lastMessage: "Lorem ipsum dolor sit amet.",
    //   profilePicture: "alex_johnson.jpg",
  },
  {
    id: 41232,
    name: "Emily Brown",
    lastMessageDate: Date.now() - 259200000, // 3 days ago
    lastMessage: "Let's catch up soon!",
    //   profilePicture: "emily_brown.jpg",
  },
  {
    id: 5123123,
    name: "Michael Lee",
    lastMessageDate: Date.now() - 614800000, // 1 week ago
    lastMessage: "How about grabbing lunch tomorrow?",
    //   profilePicture: "michael_lee.jpg",
  },
];

export default function Layout(props: {
  params: any;
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const chatContext = useChatContext();
  const { state } = chatContext || {};

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Navbar data={mockData} />
      <MobileChats data={mockData} />
      <Sidebar data={mockData} />
      {state?.openModal && props.modal}
      {props.children}
    </>
  );
}
