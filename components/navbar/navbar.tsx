"use client";
import Image from "next/image";
import { useState } from "react";

import MenuIcon from "@/public/menu.svg";
import ChatIcon from "@/public/message.svg";

import styles from "./navbar.module.css";

export default function Navbar({
  data,
  toggleMobileChat,
}: {
  data?: any;
  toggleMobileChat?: () => void;
}) {
  const [openMenu, setOpenMenu] = useState(false);

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
          <h4>{data?.name}</h4>
          <span>Online</span>
        </div>
      </div>
      <div className={styles.menu}>
        <button onClick={toggleMobileChat}>
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
            <button>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
