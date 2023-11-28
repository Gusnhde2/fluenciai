"use client";
import Button from "@/components/button/button";
import Modal from "@/components/modal/modal";
import { useChatContext } from "@/context/ChatContext";
import { useRouter } from "next/navigation";

export default function Error() {
  const context = useChatContext();
  const { state, dispatch } = context || {};
  const router = useRouter();
  return (
    <Modal type="error">
      <div style={{ textAlign: "center", padding: "3rem" }}>
        <h2>{state?.errorMessage}</h2>
      </div>
      <Button
        onClick={() => {
          dispatch && dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
          router.refresh();
        }}
        text="Try again"
      />
    </Modal>
  );
}
