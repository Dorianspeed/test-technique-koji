// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Post from '../components/Post';
import { getPost } from '../store/actions';

const mapStateToProps = (state) => ({
    post: state.posts.post,
    loading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getPost: (payload) => {
        dispatch(getPost(payload));
    },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Post);