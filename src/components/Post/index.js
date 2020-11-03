// == Import : npm
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Segment, Header, Container, Dimmer, Loader, Grid, Button } from 'semantic-ui-react';

// == Component
const Post = ({ post, loading, getPost }) => {
    const { id } = useParams();

    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    return (
        <Segment vertical style={{padding: '4em 0em'}}>
            <Grid centered>
                <Grid.Column width={8} textAlign="center">

            {loading && (
                <Dimmer style={{height: '100vh'}} active inverted>
                    <Loader size="massive">Chargement en cours</Loader>
                </Dimmer>
            )}
            {!loading && (
                <>
                    <Header>
                        {post.title}
                    </Header>
                    <Container>
                        {post.body}
                    </Container>
                    <Button as={Link} to="/" style={{marginTop: '2em'}}>Retour aux articles</Button>
                </>
            )}
                </Grid.Column>
            </Grid>
        </Segment>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getPost: PropTypes.func.isRequired,
};

// == Export
export default Post;