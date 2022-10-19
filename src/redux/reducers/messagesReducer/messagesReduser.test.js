import {messagesReducer} from "./messagesReducer";
import {ADD_MESSAGE} from "../../actionTypes";
const initialState = {
    messages: [
        {id: 1, author:"author1",message: "Hello!", chatId: 1},
        {id: 2, author:"author2",message: "Hello! My friends!", chatId: 1},
        {id: 3, author:"author3",message: "Hi! I am here!", chatId: 2},
        {id: 4, author:"author3",message: "Hi!", chatId: 3},
    ]
};

export const addMessages = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        id: 1,
        author: 'author',
        message: message,
        chatId: 1,
    }

});
describe('messageReducer', () => {
    //проверка изменения стейта после работы редюсера.
    test('messageReducerState', () => {
        const messageStore = messagesReducer(initialState, addMessages('message'));
        expect(messageStore).toEqual({
            messages: [
                {id: 1, author:"author1",message: "Hello!", chatId: 1},
                {id: 2, author:"author2",message: "Hello! My friends!", chatId: 1},
                {id: 3, author:"author3",message: "Hi! I am here!", chatId: 2},
                {id: 4, author:"author3",message: "Hi!", chatId: 3},
                {id: 1, author:"author",message: 'message', chatId: 1},
            ]})
        //expect(messageStore).toMatchSnapshot();
    })
    //делаем снимок состояния, он выдаст ошибку при изменении редюсера
    //обновить снэпшот можно с помощью флага -u при запуске тестов в терминале
    test('snapshot', () => {
        const messageStore = messagesReducer(initialState, addMessages('message'));
        expect(messageStore).toMatchSnapshot();
    })
} )
