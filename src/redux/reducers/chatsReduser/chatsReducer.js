import {ADD_CHAT, DELETE_CHAT} from "../../actionTypes";

const initialState = {
    chats: [
        { id: 1, name: 'Chat1'},
        { id: 2, name: 'Chat2'},
        { id: 3, name: 'Chat3'},
    ]
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_CHAT:
        return {
            ...state,
            chats: state.chats.filter(chat => chat.id !== action.payload)
        }
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, {id: action.payload.id, name: action.payload.name}]
            }
        default: return state;
    }
}