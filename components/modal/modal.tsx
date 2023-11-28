"use client";

import { useChatContext } from "@/context/ChatContext";
import styles from "./modal.module.css";

export default function Modal({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  const chatContext = useChatContext();

  const { state, dispatch } = chatContext || {};

  const closeModalOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (type === "error") {
      dispatch && dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
    } else if (target.id === "overlay") {
      dispatch && dispatch({ type: "TOGGLE_MODAL" });
    }
  };
  return (
    <div
      className={styles.modalOverlay}
      id="overlay"
      onClick={closeModalOverlay}
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={() => dispatch && dispatch({ type: "TOGGLE_MODAL" })}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
