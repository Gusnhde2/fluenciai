"use client";
import Modal from "@/components/modal/modal";
import { useChatContext } from "@/context/ChatContext";
import { UserProfile } from "@clerk/nextjs";
import { useState } from "react";
import { dark } from "@clerk/themes";

export default function ProfilePage() {
  const context = useChatContext();
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setDarkMode(e.matches);
    });
  return (
    <Modal type="profile">
      <UserProfile
        appearance={{
          baseTheme: darkMode ? dark : undefined,
        }}
      />
    </Modal>
  );
}
