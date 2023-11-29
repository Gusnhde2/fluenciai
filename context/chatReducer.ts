interface ChatState {
  activeThreadId: string;
  mobileChatOpen: boolean;
  openAssistant: boolean;
  openProfile: boolean;
  errorMessage: string | null;
}

export const initialChatState = {
  activeThreadId: "",
  mobileChatOpen: false,
  openAssistant: false,
  openProfile: false,
  errorMessage: null,
};

export const chatReducer = (state: ChatState, action: any) => {
  switch (action.type) {
    case "SET_CHAT_ID":
      return {
        ...state,
        activeThreadId: action.payload,
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
    default:
      return state;
  }
};
