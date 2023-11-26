"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/button/button";
import Modal from "@/components/modal/modal";
import { useChatContext } from "@/context/ChatContext";

export default function CreateAssistant() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const context = useChatContext();
  const { state, dispatch } = context || {};

  async function createAssistant() {
    setLoading(true);
    try {
      const response = await fetch("/api/assistants", {
        method: "POST",
        // body: JSON.stringify({
        //   name: "John Doe",
        // }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
      dispatch && dispatch({ type: "TOGGLE_MODAL" });
    }
  }

  return (
    <Modal>
      <h3>Create an assistant</h3>
      <p>
        You can create an assistant to help you with your daily tasks. You can
        create as many assistants as you want.
      </p>
      <div>
        <p>Give your assistant a name</p>
        <input type="text" placeholder="Enter a name" />
      </div>
      <div>
        <p>Select language</p>
        <select>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div>
        <p>Select sex</p>
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <Button
        text="Create assistant"
        onClick={createAssistant}
        loading={loading}
      />
    </Modal>
  );
}
