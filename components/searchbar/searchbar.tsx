"use client";
import Button from "../button/button";
import styles from "./searchbar.module.css";

export default function Searchbar({ onclick }: { onclick: () => void }) {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search messages, buddies" />
      <Button type="add" onClick={onclick} />
    </div>
  );
}
