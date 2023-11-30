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

export const initialChatState = {
  activeAssistantId: "",
  activeThreadId: "",
  mobileChatOpen: false,
  openAssistant: false,
  openProfile: false,
  errorMessage: null,
  newAssistantCreated: false,
  assistantsLoaded: false,
  assistantName: "",
  assistantLastname: "",
};

export const chatReducer = (state: ChatState, action: any) => {
  switch (action.type) {
    case "SET_CHAT_ID":
      return {
        ...state,
        activeThreadId: action.payload.threadId,
        activeAssistantId: action.payload.assistantId,
      };
    case "MOBILE_CHAT_TOGGLE":
      return {
        ...state,
        mobileChatOpen: !state.mobileChatOpen,
      };
    case "TOGGLE_ASSISTANT_MODAL":
      return {
        ...state,
        openAssistant: !state.openAssistant,
      };
    case "TOGGLE_PROFILE_MODAL":
      return {
        ...state,
        openProfile: !state.openProfile,
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "NEW_ASSISTANT_CREATED":
      return {
        ...state,
        newAssistantCreated: action.payload,
      };
    case "ASSISTANTS_LOADED":
      return {
        ...state,
        assistantsLoaded: action.payload,
      };
    case "SET_ASSISTANT_NAME":
      return {
        ...state,
        assistantName: action.payload.name,
        assistantLastname: action.payload.lastname,
      };

    default:
      return state;
  }
};
