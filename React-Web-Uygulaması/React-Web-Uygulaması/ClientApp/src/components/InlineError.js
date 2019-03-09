import React from 'react';
import PropTypes from 'prop-types';
import '../css/NewMovieForm.css';

class InlineError extends React.Component {
    render() {
        return (
            <div className="inline-error">
                <p>{this.props.error}</p>
            </div>
        )
    }
}

export default InlineError;