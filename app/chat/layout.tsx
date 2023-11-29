"use client";
import { use, useEffect, useState } from "react";

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

  useEffect(() => {
    const data = getAssistants();
    data.then((data) => {
      setAssistants(data);
    });
  }, []);

  useEffect(() => {
    if (state?.newAssistantCreated) {
      const data = getAssistants();
      data.then((data) => {
        setAssistants(data);
        dispatch && dispatch({ type: "NEW_ASSISTANT_CREATED", payload: false });
      });
    }
  }, [state?.newAssistantCreated]);

  return (
    <>
      <Navbar data={assistants} />
      <MobileChats data={assistants} />
      <Sidebar data={assistants} />
      {state?.openProfile && props.profile}
      {state?.openAssistant && props.assistant}
      {state?.errorMessage && props.error}
      {props.children}
    </>
  );
}
