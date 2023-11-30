"use client";
import {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useReducer,
} from "react";
import { chatReducer, initialChatState } from "./chatReducer";

interface ChatState {
  activeAssistantId: string;
  activeThreadId: string;
  mobileChatOpen: boolean;
  openAssistant: boolean;
  openProfile: boolean;
  errorMessage: string | null;
  newAssistantCreated: boolean;
  assistantsLoaded: boolean;
  assistantName: string;
  assistantLastname: string;
}

interface ChatContextType {
  state: ChatState;
  dispatch: React.Dispatch<any>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export function useChatContext() {
  return useContext(ChatContext);
}
