import {ROBOT_ANSWER} from "../../actionTypes";

const initialState = {
    robot: {
        answer: ""
    }
}

export const robotReducer = (state = initialState, action) => {
    switch (action.type){

        case ROBOT_ANSWER: return {
            ...state, robot: {
                answer: action.payload
            }
        }

        default: return state;
    }
}