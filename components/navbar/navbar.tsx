"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useChatContext } from "@/context/ChatContext";
import { initialChatState } from "@/context/chatReducer";
import MenuIcon from "@/public/menu.svg";
import ChatIcon from "@/public/message.svg";
import { useAuth } from "@clerk/nextjs";

import styles from "./navbar.module.css";

export default function Navbar({ data }: { data?: any }) {
  const chatContext = useChatContext();
  const { state = initialChatState, dispatch = () => {} } = chatContext || {};
  const [openMenu, setOpenMenu] = useState(false);

  const auth = useAuth();
  const router = useRouter();

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.conversationDetails}>
        {state.assistantsLoaded && (
          <>
            <div className={styles.image}>
              <Image
                src="/logo.svg"
                alt="FluenciAI Logo"
                width={60}
                height={60}
              />
            </div>
            <div className={styles.username}>
              <h4>
                {state?.assistantName} {state?.assistantLastname}
              </h4>
              <span>Online</span>
            </div>
          </>
        )}
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
            <button onClick={() => dispatch({ type: "TOGGLE_PROFILE_MODAL" })}>
              Profile
            </button>
            <button>Settings</button>
            <button
              onClick={() => {
                auth.signOut();
                router.push("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
