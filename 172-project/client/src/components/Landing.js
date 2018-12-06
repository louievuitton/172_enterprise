import React, { Component } from 'react';
import Home from './Home';
import EmployeeList from './EmployeeList';
import Callback from './Callback';
import NotFound from './NotFound';
import AddEmployeeInfo from './AddEmployee.Info';

class Landing extends Component {
    render() {
        let landingComponent= "";
        switch(this.props.location) {
            case "":
                landingComponent = <Home {...this.props}/>;
                break;
            case "callback":
                landingComponent = <Callback {...this.props}/>;
                break;
            case "payroll":
                landingComponent = this.props.auth.isAuthenticated() ? <EmployeeList {...this.props}/> : <NotFound/>;
                break;
            case "add":
                landingComponent = this.props.auth.isAuthenticated() ? <AddEmployeeInfo/> : <NotFound/>;
                break;
            default:
                landingComponent = <NotFound/>;
        }
        
        return ( 
            <React.Fragment>
                <div className="landing">
                    <h1>Welcome {this.props.name}</h1> <br/>
                </div>
                {landingComponent}
            </React.Fragment>
         );
    }
}
 
export default Landing;