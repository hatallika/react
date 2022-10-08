import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReduser/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";
import {robotReducer} from "./reducers/robotReducer/robotReducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import {postsReducer} from "./reducers/postsReducer/postsReducer";
import thunk from "redux-thunk";
import {ROBOT_ANSWER} from "./actionTypes";

export const addRobotAnswer = (answer) => ({
    type: ROBOT_ANSWER,
    payload: answer
});

const config = {
    key: 'root',
    storage
}

const robotAnswer = store => next => action => {
    //let result = next(action);
    if (action.type === 'addmessage' /* && prevStoreMessages[prevStoreMessages.length-1].author !== store.getState().messages.author*/) {

        setTimeout(()=>{
            let currentMessages = store.getState().messages.messages;
            let answer = "Сообщение автора " + currentMessages[currentMessages.length-1].author + " отправлено";
            console.log(answer);

            return store.dispatch(addRobotAnswer(answer));
        }, 3000);
    }
    return next(action);
}

export const reducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    robot: robotReducer,
    posts: postsReducer
})

const persistedReducer = persistReducer(config, reducer);

//export const store = createStore(reducer, applyMiddleware(robotAnswer));
export const store = createStore(persistedReducer, applyMiddleware(robotAnswer, thunk));
export const persistor = persistStore(store);