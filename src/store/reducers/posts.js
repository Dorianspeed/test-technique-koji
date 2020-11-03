// == Import : local
import {
    GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR, GET_POST, GET_POST_SUCCESS, GET_POST_ERROR,
} from '../actions';

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: '',
};

// == Export
const posts = (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true,
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: [...action.payload],
                loading: false,
                error: '',
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_POST:
            return {
                ...state,
                loading: true,
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {...action.payload},
                loading: false,
                error: '',
            };
        case GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// == Export
export default posts;