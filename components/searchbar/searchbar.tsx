"use client";
import Button from "../button/button";
import styles from "./searchbar.module.css";

export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search messages, buddies" />
      <Button type="add" onClick={() => {}} />
    </div>
  );
}
