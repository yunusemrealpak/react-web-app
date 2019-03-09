import React from 'react'
import { Message } from 'semantic-ui-react'

const RejectedFormMessage = () => (
    <Message negative>
        <Message.Header>We're sorry we can't apply that form</Message.Header>
        <p>Try again!</p>
    </Message>
)

export default RejectedFormMessage;