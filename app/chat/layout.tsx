"use client";
import { use, useEffect, useRef, useState } from "react";

import MobileChats from "@/components/mobile-chats/mobile-chats";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { useChatContext } from "@/context/ChatContext";

const getAssistants = async () => {
  try {
    const response = await fetch("api/assistants", {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getActiveChat = (data: any, thread_id: string) => {
  const chat = data.filter((data: any) => data.threadId === thread_id).slice(0);
  return chat;
};

export default function Layout(props: {
  params: any;
  children: React.ReactNode;
  assistant: React.ReactNode;
  error: React.ReactNode;
  profile: React.ReactNode;
}) {
  const chatContext = useChatContext();
  const { state, dispatch } = chatContext || {};
  const [assistants, setAssistants] = useState<Array<object>>([]);
  const [activeAssistant, setActiveAssistant] = useState<any>({});

  useEffect(() => {
    dispatch && dispatch({ type: "ASSISTANTS_LOADED", payload: true });
  }, [assistants]);

  useEffect(() => {
    const assistantId = window.localStorage.getItem("activeAssistant");
    const threadId = localStorage.getItem("activeThread");
    dispatch &&
      dispatch({
        type: "SET_CHAT_ID",
        payload: { threadId: threadId, assistantId: assistantId },
      });

    const data = getAssistants();

    if (data) {
      data.then((data) => {
        setAssistants(data);
        const assistant = getActiveChat(data, threadId || "");
        setActiveAssistant(getActiveChat(data, assistant[0]));
        dispatch &&
          dispatch({
            type: "SET_ASSISTANT_NAME",
            payload: {
              name: assistant[0].name,
              lastname: assistant[0].lastname,
            },
          });
      });
    }
  }, []);

  const initalRender = useRef(true);

  useEffect(() => {
    if (!initalRender.current) {
      window.localStorage.setItem("activeThread", state?.activeThreadId || "");
      window.localStorage.setItem(
        "activeAssistant",
        state?.activeAssistantId || ""
      );
    }

    // const assistant = getActiveChat(assistants, state?.activeThreadId || "");

    // console.log(assistant);
    // setActiveAssistant(assistant[0]);
    // dispatch &&
    //   dispatch({ type: "SET_ASSISTANT_NAME", payload: assistant[0].name });

    initalRender.current = false;
  }, [state?.activeThreadId]);

  useEffect(() => {
    if (state?.newAssistantCreated) {
      const data = getAssistants();
      data.then((data) => {
        setAssistants(data);
        dispatch && dispatch({ type: "NEW_ASSISTANT_CREATED", payload: false });
        dispatch && dispatch({ type: "ASSISTANTS_LOADED", payload: true });
      });
    }
  }, [state?.newAssistantCreated]);

  return (
    <>
      <Navbar data={activeAssistant} />
      <MobileChats data={assistants} />
      <Sidebar data={assistants} />
      {state?.openProfile && props.profile}
      {state?.openAssistant && props.assistant}
      {state?.errorMessage && props.error}
      {props.children}
    </>
  );
}
