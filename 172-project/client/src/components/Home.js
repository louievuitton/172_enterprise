import React, { Component } from 'react';

class Home extends Component {
    render() { 
        return ( 
            <div className="home">
                <h2>CMPE 172</h2> <br/>
                Want to see payroll data? <a href="/payroll">Click here</a>

                {!this.props.auth.isAuthenticated() &&
                <div>
                <hr/>
                    Please login first to access payroll data <br/> <br/>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
                }
            </div>
         );
    }
}
 
export default Home;