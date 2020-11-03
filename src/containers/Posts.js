// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Posts from '../components/Posts';
import { getPosts } from '../store/actions';

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => {
        dispatch(getPosts());
    },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Posts);