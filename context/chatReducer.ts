interface ChatState {
  chatId: string | null;
  mobileChatOpen: boolean;
}

export const initialChatState = {
  chatId: null,
  mobileChatOpen: false,
};

export const chatReducer = (state: ChatState, action: any) => {
  switch (action.type) {
    case "SET_CHAT_ID":
      return {
        ...state,
        chatId: action.payload,
      };
    case "MOBILE_CHAT_TOGGLE":
      return {
        ...state,
        mobileChatOpen: !state.mobileChatOpen,
      };
    default:
      return state;
  }
};
