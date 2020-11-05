// == Import : local
import {
    GET_POSTS, getPostsSuccess, getPostsError, GET_POST, getPostSuccess, getPostError,
} from '../actions';

// == Middleware
const ajaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch(action.type) {
        case GET_POSTS:
            (async () => {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
                    if (response.status !== 200) {
                        const error = await response.json();
                        throw error;
                    }
                    else {
                        const responseData = await response.json();
                        store.dispatch(getPostsSuccess(responseData));
                    }
                }
                
                catch (error) {
                    console.trace(error);
                    store.dispatch(getPostsError('Une erreur est survenue'));
                }
            })();
            break;
        case GET_POST:
            (async () => {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`);
    
                    if (response.status !== 200) {
                        const error = await response.json();
                        throw error;
                    }
                    else {
                        const responseData = await response.json();
                        store.dispatch(getPostSuccess(responseData));
                    }
                }
                
                catch (error) {
                    console.trace(error);
                    store.dispatch(getPostError('Une erreur est survenue'));
                }
            })();
            break;
        default:
    }
};

// == Export
export default ajaxMiddleware;