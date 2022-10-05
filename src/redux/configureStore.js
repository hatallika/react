import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReduser/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";
import {robotReducer} from "./reducers/robotReducer/robotReducer";


export const addRobotAnswer = (answer) => ({
    type: 'robotanswer',
    payload: answer
});

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
    robot: robotReducer

})

export const store = createStore(reducer, applyMiddleware(robotAnswer));