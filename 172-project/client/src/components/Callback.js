import React, { Component } from 'react';
import Auth from '../Auth';

class Callback extends Component {
    componentDidMount() {
        //const auth = new Auth();
        this.props.auth.handleAuthentication();
        //this.props.auth.handleGithubAuthentication();
    }

    render() { 
        return ( 
            <h2 classname="notfound">Loading..</h2>
         );
    }
}
 
export default Callback;