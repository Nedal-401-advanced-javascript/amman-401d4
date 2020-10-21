import React from 'react';

import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';

import AuthContext from './components/auth/context.js';

const DeleteLink = props => {
    return (
        <Auth action="delete">
            <span>Fake Delete Link </span>
        </Auth>
    )
}

const ReadLink = props => {
    return (
        <Auth action="read">
            <span>Fake Read Link </span>
        </Auth>
    )
}

const EditLink = props => {
    return (
        <Auth action="edit">
            <span>Fake Edit Link </span>
        </Auth>
    )
}

class App extends React.Component {
    render() {
        return (
            <AuthContext>
                <Login />
                <hr />
                <DeleteLink />
                <ReadLink />
                <EditLink />
            </AuthContext>
        )
    }
}

export default App;