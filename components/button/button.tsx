"use client";

import Image from "next/image";
import styles from "./button.module.css";
import addIcon from "@/public/add.svg";
import sendIcon from "@/public/send.svg";
import LoadingSpinner from "../loading-spinner/loading-spinner";

interface ButtonProps {
  disabled?: boolean;
  text?: string;
  type?: "send" | "add";
  onClick: () => void;
  loading?: boolean;
}

export default function Button({
  disabled,
  text,
  type,
  onClick,
  loading,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${type === "add" && styles.add}`}
      onClick={onClick}
      disabled={disabled || false}
    >
      {!loading && text}
      {!loading && type === "add" && (
        <Image src={addIcon} alt="Add" width={27} height={27} />
      )}
      {!loading && type === "send" && (
        <Image src={sendIcon} alt="Add" width={27} height={27} />
      )}
      {loading && <LoadingSpinner />}
    </button>
  );
}
