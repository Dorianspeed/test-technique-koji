// == Import : npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Segment, Grid, Card, Dimmer, Loader, Header } from 'semantic-ui-react';

// == Component
const Posts = ({ posts, loading, getPosts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <>
            <Segment vertical style={{padding : '4em 0em'}}>
                <Grid container stackable verticalAlign="middle">
                    <Header as="h1">
                        Liste de tous les articles
                    </Header>
                    <Card.Group itemsPerRow={3} stackable>
                        {loading && (
                            <Dimmer style={{height: '100vh'}} active inverted>
                                <Loader size="massive">Chargement en cours</Loader>
                            </Dimmer>
                        )}
                        {!loading && posts.map((post) => (
                            <Card 
                                as={Link}
                                to={`/post/${post.id}`}
                                header={post.title}
                                meta={`Utilisateur numéro ${post.userId}`}
                                description={post.body}
                                key={post.id}
                                image='https://picsum.photos/200/100'
                            />
                        ))}
                    </Card.Group>
                </Grid>
            </Segment>
        </>
    );
};

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    getPosts: PropTypes.func.isRequired,
};

// == Export
export default Posts;