interface ChatState {
  activeThreadId: string;
  mobileChatOpen: boolean;
  openModal: boolean;
  errorMessage: string | null;
}

export const initialChatState = {
  activeThreadId: "",
  mobileChatOpen: false,
  openModal: false,
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
    case "TOGGLE_MODAL":
      return {
        ...state,
        openModal: !state.openModal,
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
