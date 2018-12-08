/* eslint no-restricted-globals: 0*/
import React, { Component } from 'react';

class AddEmployeeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            salary: '',
            branch: '',
            designation: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        
        fetch('/employees', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                salary: this.state.salary,
                branch: this.state.branch,
                designation: this.state.designation
            })
        })
        .then(location.pathname = "/payroll");
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                    <label>
                        Employee First Name:
                        <input placeholder="first" type="text" className="name" onChange={event => this.setState({firstName: event.target.value})} />
                    </label> <br/>
                    <label>
                        Employee Last Name:
                        <input placeholder="last" type="text" className="name" onChange={event => this.setState({lastName: event.target.value})} />
                    </label> <br/>
                    <label>
                        Employee salary:
                        <input placeholder="$$$" type="text" className="salary" onChange={event => this.setState({salary: event.target.value})} />
                    </label> <br/>
                    <label>Branch:
                        <select type="text" onChange={event => this.setState({branch: event.target.value})}>
                            <option></option>
                            <option type="text">Engineering</option>
                            <option type="text">Business</option>
                            <option type="text">Human Resources</option>
                        </select>
                    </label> <br/>
                    <label>Designation:
                        <select type="text" onChange={event => this.setState({designation: event.target.value})}>
                            <option></option>
                            <option type="text">Software Engineer</option>
                            <option type="text">Computer Engineer</option>
                            <option type="text">Engineer</option>
                            <option type="text">Accountant</option>
                            <option type="text">People Operations</option>
                        </select>
                    </label> <br/>
                    <button type="submit">Add</button>
            </form>
         );
    }
}
 
export default AddEmployeeInfo;