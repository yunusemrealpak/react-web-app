import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const button = (movie, deleteMovie) => {
    return (
        <div className="ui two buttons">
            <Button animated='vertical' as={Link} to={`/movie/${movie.id}`}>
                <Button.Content hidden>Edit</Button.Content>
                <Button.Content visible>
                    <Icon name='edit' />
                </Button.Content>
            </Button>
            <Button animated='vertical' onClick={() => deleteMovie(movie.id)} >
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                    <Icon name='trash' />
                </Button.Content>
            </Button>
        </div>
    )
};

const MovieCard = ({ movie, deleteMovie }) => (
    <Grid.Column>
        <Card
            image={movie.cover}
            header={movie.title}
            extra={button(movie, deleteMovie)}
        />
    </Grid.Column>
)

export default MovieCard;