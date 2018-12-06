import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount() {
        this.props.auth.handleAuthentication();
    }

    render() { 
        return ( 
            <h2 classname="notfound">Loading..</h2>
         );
    }
}
 
export default Callback;