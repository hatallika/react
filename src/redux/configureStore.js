import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReduser/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";


export const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
})

export const store = createStore(reducer);