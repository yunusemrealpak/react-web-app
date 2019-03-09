import React from 'react'
import PropTypes from 'prop-types';
import NewMovieForm from '../NewMovieForm';
import { connect } from 'react-redux';
import { onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit } from '../../actions/newMovie';

class NewMoviePage extends React.Component {

    componentDidMount() {
        const { match } = this.props;

        if (!this.props.movie && match.params.id) {
            this.props.fetchMovie(match.params.id)
        }
    }

    render() {
        return (
            <div>
                <NewMovieForm
                    movie={this.props.movie}
                    newMovie={this.props.newMovie}
                    onNewMovieSubmit={this.props.onNewMovieSubmit}
                    onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} />
            </div>

        )
    }
}

const mapStateToProps = ({ newMovie, movies }, props) => {
    return {
        newMovie,
        movie: movies.movies.find(item => item.id == props.match.params.id)
    }
}

const mapDispatchToProps = {
    onNewMovieSubmit,
    onUpdateMovieSubmit,
    fetchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);