import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card } from 'semantic-ui-react';

const ActorList = props => {
    return (

        <div>
            <Grid stackable columns={3}>
                {
                    props.actors.map((actor, key) =>
                        <Grid.Column key={key}>
                            <Card
                                image={actor.url}
                                header={actor.name}
                                extra={actor.description}
                            />
                        </Grid.Column>
                    )
                }
            </Grid>
        </div>
    )

}

ActorList.PropType = {
    actors: PropTypes.array.isRequired
}

export default ActorList;