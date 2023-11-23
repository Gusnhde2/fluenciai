"use client";

import Image from "next/image";
import styles from "./button.module.css";
import addIcon from "@/public/add.svg";

interface ButtonProps {
  text?: string;
  type?: "send" | "add";
  onClick: () => void;
}

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${type === "add" && styles.add}`}
      onClick={onClick}
    >
      {text}
      {type === "add" && (
        <Image src={addIcon} alt="Add" width={27} height={27} />
      )}
    </button>
  );
}
