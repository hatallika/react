import {GET_POSTS, GET_POSTS_ERROR, GET_POSTS_LOADING} from "../../actionTypes";

const initialState = {
    posts: [],
    loadingPosts: false,
    errorPosts: null,
}

export const getPosts = () => {
    return async (dispatch) => {

        dispatch({type: GET_POSTS_LOADING});
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if(!response.ok){
                throw new Error(`Request failed with status ${response.status}`)
            }
            const data = await response.json();
            setTimeout(()=>{ // проверить задержку загрузки
                dispatch({
                    type: GET_POSTS,
                    payload: data
                })
            }, 3000);


        } catch (error){
            dispatch({
                type: GET_POSTS_ERROR,
                payload: error.message
            })
        } finally {
            console.log('finally')
        }

    }
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POSTS_ERROR: return {
            ...state,
            loadingPosts: false,
            errorPosts: action.payload
        }
        case GET_POSTS_LOADING: return {
            ...state, loadingPosts: true
        }
        case GET_POSTS: return {
            ...state,
            posts: action.payload,
            loadingPosts: false,
            errorPosts: null // обнулить ошибку
        }

        default: return state
    }
}
