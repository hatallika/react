const initialState = {
    robot: {
        answer: ""
    }
}

export const robotReducer = (state = initialState, action) => {
    switch (action.type){

        case 'robotanswer': return {
            ...state, robot: {
                answer: action.payload
            }
        }

        default: return state;
    }
}