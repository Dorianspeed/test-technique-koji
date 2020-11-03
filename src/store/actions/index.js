export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => ({
    type: GET_POSTS,
});

export const getPostsSuccess = (payload) => ({
    type: GET_POSTS_SUCCESS,
    payload,
});

export const getPostsError = (payload) => ({
    type: GET_POSTS_ERROR,
    payload,
});

export const getPost = (payload)  => ({
    type: GET_POST,
    payload,
});

export const getPostSuccess = (payload) => ({
    type: GET_POST_SUCCESS,
    payload,
});

export const getPostError = (payload) => ({
    type: GET_POST_ERROR,
    payload,
});