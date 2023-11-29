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
    if (target.id === "overlay") {
      switch (type) {
        case "error":
          dispatch && dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
          break;
        case "assistant":
          dispatch && dispatch({ type: "TOGGLE_ASSISTANT_MODAL" });
          break;
        case "profile":
          dispatch && dispatch({ type: "TOGGLE_PROFILE_MODAL" });
          break;
      }
    } else if (target.id === "closeButton") {
      switch (type) {
        case "error":
          dispatch && dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
          break;
        case "assistant":
          dispatch && dispatch({ type: "TOGGLE_ASSISTANT_MODAL" });
          break;
        case "profile":
          dispatch && dispatch({ type: "TOGGLE_PROFILE_MODAL" });
          break;
      }
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
          id="closeButton"
          onClick={() => dispatch && dispatch({ type: "TOGGLE_MODAL" })}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
