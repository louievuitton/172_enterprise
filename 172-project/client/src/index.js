import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/Landing';
import Auth from './Auth';
import registerServiceWorker from './registerServiceWorker';

const auth = new Auth();

let state = {};
window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<Landing {...state}/>, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0*/
let username = auth.getProfile().name || "";

let initialState = {
    name: username,
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
};

window.setState(initialState);

registerServiceWorker();
