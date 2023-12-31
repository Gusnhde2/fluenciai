"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import Button from "@/components/button/button";
import Modal from "@/components/modal/modal";
import { useChatContext } from "@/context/ChatContext";
import { useUser } from "@clerk/nextjs";

import { languages } from "./constatnts";
import styles from "./create-assistant.module.css";

export default function CreateAssistant() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const context = useChatContext();
  const { state, dispatch } = context || {};

  const user = useUser();

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef<HTMLSelectElement>(null);
  const sexRef = useRef<HTMLSelectElement>(null);

  async function createAssistant() {
    setLoading(true);
    const name = nameRef.current?.value;
    const lastname = lastnameRef.current?.value;
    const language = languageRef.current?.value;
    const sex = sexRef.current?.value;

    if (name?.trim().length !== 0 && lastname?.trim().length !== 0) {
      try {
        const response = await fetch("/api/assistants", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            language: language,
            sex: sex,
            user: user.user?.firstName,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          //toast success
          router.refresh();
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
        dispatch && dispatch({ type: "TOGGLE_ASSISTANT_MODAL" });
        dispatch && dispatch({ type: "NEW_ASSISTANT_CREATED", payload: true });
      }
    } else {
      setLoading(false);
      alert("Please enter a name and lastname");
    }
  }

  return (
    <Modal type="assistant">
      <form
        onSubmit={(event) => event?.preventDefault()}
        className={styles.container}
      >
        <h3>Create an assistant</h3>
        <p>
          You can create an assistant to help you with your daily tasks. You can
          create as many assistants as you want.
        </p>
        <div>
          <p>Give your assistant a name</p>
          <input type="text" placeholder="Enter a name" ref={nameRef} />
        </div>
        <div>
          <p>Give your assistant a lastname</p>
          <input type="text" placeholder="Enter a lastname" ref={lastnameRef} />
        </div>
        <div>
          <p>Select language</p>
          <select ref={languageRef}>
            {languages.map((language: any, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Select sex</p>
          <select ref={sexRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Button
          text="Create assistant"
          onClick={createAssistant}
          loading={loading}
        />
      </form>
    </Modal>
  );
}
