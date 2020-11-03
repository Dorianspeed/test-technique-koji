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
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                const responseData = await response.json();
                
                if (response.status === 200) {
                    store.dispatch(getPostsSuccess(responseData));
                }
                else {
                    store.dispatch(getPostsError('Une erreur est survenue'));
                }
            })();
            break;
        case GET_POST:
            (async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`);

                const responseData = await response.json();

                if (response.status === 200) {
                    store.dispatch(getPostSuccess(responseData));
                }
                else {
                    store.dispatch(getPostError('Une erreur est survenue'));
                }
            })();
            break;
        default:
    }
};

// == Export
export default ajaxMiddleware;