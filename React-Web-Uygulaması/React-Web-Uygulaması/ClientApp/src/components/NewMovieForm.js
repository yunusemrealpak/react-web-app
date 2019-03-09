import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Image } from 'semantic-ui-react';
import InlineError from './InlineError';
import RejectedFormMessage from './RejectedFormMessage';

class NewMovieForm extends React.Component {
    state = {
        id: this.props.movie ? this.props.movie.id : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        errors: {},
        redirect: false
    };

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired,
        movie: PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
        const { movie } = nextProps.newMovie;

        if (movie.title && movie.title != this.state.title) {
            this.setState({
                title: movie.title,
                cover: movie.cover
            })
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors,
            redirect: true
        });

        const id = this.state.id || this.props.newMovie.movie.id;

        if (Object.keys(errors).length === 0) {
            if (!id) {
                console.log("Yeni")
                this.props.onNewMovieSubmit(this.state)
            }
            else {
                console.log("Update")
                this.props.onUpdateMovieSubmit({ ...this.state, id })
            }
            
        }
    }

    validate = () => {
        const errors = this.state.errors;
        if (!this.state.title)
            errors.title = "Can't be blank";
        if (!this.state.cover)
            errors.cover = "Can't be blank";

        return errors;
    }

    render() {

        const errors = this.state.errors;

        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
                {this.props.newMovie.error.response && <RejectedFormMessage />}
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Form.Field error={!!errors.title} >
                            <label>Title</label>
                            <input id="title" name="title" placeholder='Title' value={this.state.title} onChange={this.handleChange} />
                            {errors.title && <InlineError error={errors.title} />}
                        </Form.Field>
                        <Form.Field error={!!errors.cover}>
                            <label>Cover Url</label>
                            <input id="cover" name="cover" placeholder='Cover Url' value={this.state.cover} onChange={this.handleChange} />
                            {errors.cover && <InlineError error={errors.cover} />}
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={this.state.cover} size='medium' rounded />
                    </Grid.Column>
                </Grid>
                <Button type='submit'>Add</Button>

            </Form>
        );

        return (

            <div>
                {
                    this.props.newMovie.done && this.state.redirect
                        ? <Redirect to="/movies" /> : form
                }
            </div>

        )
    }
}

export default NewMovieForm;