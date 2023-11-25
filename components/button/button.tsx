"use client";

import Image from "next/image";
import styles from "./button.module.css";
import addIcon from "@/public/add.svg";
import sendIcon from "@/public/send.svg";

interface ButtonProps {
  disabled?: boolean;
  text?: string;
  type?: "send" | "add";
  onClick: () => void;
}

export default function Button({ disabled, text, type, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${type === "add" && styles.add}`}
      onClick={onClick}
      disabled={disabled || false}
    >
      {text}
      {type === "add" && (
        <Image src={addIcon} alt="Add" width={27} height={27} />
      )}
      {type === "send" && (
        <Image src={sendIcon} alt="Add" width={27} height={27} />
      )}
    </button>
  );
}
