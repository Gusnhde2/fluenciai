"use client";

import { useEffect, useState } from "react";

import MessageInput from "@/components/message-input/message-input";
import Message from "@/components/message/message";
import { useChatContext } from "@/context/ChatContext";

import styles from "./chat.module.css";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";

export default function Chat(props: any) {
  const [userIsSending, setUserIsSending] = useState(false);
  const [asssitantIsSending, setAssistantIsSending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<object>>([]);
  const [inputValue, setInputValue] = useState("");

  const context = useChatContext();

  const { state, dispatch } = context || {};

  const inputHandler = (e: any) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    setUserIsSending(true);
    try {
      const message = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          message: inputValue,
          user: "Ahmed Elaguab",
        }),
      });
      if (message.ok) {
        const data = await message.json();
        setMessages((prev) => [data.message, ...prev]);
        setUserIsSending(false);
        try {
          setAssistantIsSending(true);
          const response = await fetch("/api/threads", {
            method: "POST",
            body: JSON.stringify({
              thread_id: data.thread_id,
              run_id: data.run_id,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const data = await response.json();
            setMessages((prev) => [data, ...prev]);
            setAssistantIsSending(false);
          }
        } catch (error: any) {
          dispatch &&
            dispatch({
              type: "SET_ERROR_MESSAGE",
              payload: error.message,
            });
          setAssistantIsSending(false);
        }
      }
    } catch (error: any) {
      dispatch &&
        dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
      setUserIsSending(false);
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/all-messages", {
          method: "POST",
          body: JSON.stringify({
            thread_id: "thread_wDYrbxdN0lwzTDZYadVB1GmF",
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setMessages(data.messages);
          setLoading(false);
        }
      } catch (error: any) {
        setLoading(false);
        dispatch &&
          dispatch({
            type: "SET_ERROR_MESSAGE",
            payload: error.message,
          });
      }
    };
    getMessages();
  }, []);

  return (
    <>
      <MessageInput
        inputHandler={inputHandler}
        sendMessage={sendMessage}
        inputValue={inputValue}
      />
      <div className={styles.container}>
        {loading && (
          <div className={styles.loading}>
            <LoadingSpinner size={50} />
          </div>
        )}
        <div className={styles.typing}>
          {asssitantIsSending && <Message role="assistant" loading={true} />}
          {userIsSending && <Message role="user" loading={true} />}
        </div>
        {messages.map((message: any, index) => (
          <Message
            key={index}
            text={message?.content[0].text.value}
            role={message?.role}
            id={message?.id}
            created_at={message?.created_at}
          />
        ))}
      </div>
    </>
  );
}
