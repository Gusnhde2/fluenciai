"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <Image src="/logo.svg" alt="FluenciAI Logo" width={100} height={100} />
        <h1 className={styles.title}>
          Welcome to <a href="https://fluenciai.com">FluenciAI</a>
        </h1>

        <div className={styles.messagesContainer}>
          <div className={styles.message}>
            With consistent practice and personalized guidance, achieve fluency
            in your chosen language.
          </div>
          <div className={styles.message}>
            FluenciAI is with you every step of the way.
          </div>
        </div>
        <Button
          text="Let's chat! →"
          onClick={() => {
            router.push("/chat");
          }}
        />
      </div>
    </>
  );
}
