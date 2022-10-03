const initialState = {
    messages: [
        {id: 1, author:"author1",message: "Hello!", chatId: 1},
        {id: 2, author:"author2",message: "Hello! My friends!", chatId: 1},
        {id: 3, author:"author3",message: "Hi! I am here!", chatId: 2},
        {id: 4, author:"author3",message: "Hi!", chatId: 3},
    ]
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case('addmessage'): return {
            ...state,
            messages: [...state.messages, {
                id: action.payload.id,
                author: action.payload.author,
                message: action.payload.message,
                chatId: action.payload.chatId
            }]
        }
        case ('delmessage'): return {
            ...state,
            messages: state.messages.filter((message)=> message.id !== action.payload)
        }

        default: return state;
    }
}

