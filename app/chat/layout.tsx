"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import MobileChats from "@/components/mobile-chats/mobile-chats";

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

export default function Layout(props: any) {
  const [activeChatData, setActiveChatData] = useState(mockData[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  console.log(mobileOpen);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  // const width = window.screen.width;

  const selectChat = (id: number) => {
    setActiveChatData(mockData.filter((data) => data.id === id)[0]);
  };

  const toggleMobileChats = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileChats = () => {
    setMobileOpen(false);
  };

  // const width = window?.screen.width;
  return (
    <>
      <Navbar data={activeChatData} toggleMobileChat={toggleMobileChats} />
      {width && width < 768 && (
        <MobileChats
          data={mockData}
          selectedChat={selectChat}
          closeMobileChats={closeMobileChats}
          isOpen={mobileOpen}
        />
      )}

      <Sidebar data={mockData} selectedChat={selectChat} />
      {props.children}
    </>
  );
}
