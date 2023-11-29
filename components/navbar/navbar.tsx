"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";

import { useChatContext } from "@/context/ChatContext";
import { initialChatState } from "@/context/chatReducer";
import MenuIcon from "@/public/menu.svg";
import ChatIcon from "@/public/message.svg";

import styles from "./navbar.module.css";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Navbar({ data }: { data?: any }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeChat, setActiveChat] = useState(data?.[0]);
  const chatContext = useChatContext();
  const { state = initialChatState, dispatch = () => {} } = chatContext || {};

  const auth = useAuth();
  console.log(auth);

  // useEffect(() => {
  //   const chat = data.filter((data: any) => data.id === state?.chatId).slice(0);
  //   setActiveChat(chat?.[0]);
  // }, [state]);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.conversationDetails}>
        <div className={styles.image}>
          <Image src="/logo.svg" alt="FluenciAI Logo" width={60} height={60} />
        </div>
        <div className={styles.username}>
          <h4>{activeChat?.name}</h4>
          <span>Online</span>
        </div>
      </div>
      <div className={styles.menu}>
        <button
          onClick={() =>
            dispatch({ type: "MOBILE_CHAT_TOGGLE", payload: true })
          }
        >
          <Image src={ChatIcon} alt="your chats" width={30} height={30} />
        </button>
        <button onClick={openMenuHandler}>
          <Image src={MenuIcon} alt="menu" width={30} height={30} />
        </button>
        {openMenu && (
          <div
            className={`${styles.menuContent} ${openMenu && styles.open} ${
              !openMenu && styles.close
            }`}
          >
            <button>Profile</button>
            <button>Settings</button>
            <button onClick={() => auth.signOut()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
