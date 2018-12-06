import React, { Component } from 'react';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            // firstName: '',
            // lastName: '',
            // salary: '',
            // branch: '',
            // designation: '',
            search: ''
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        fetch("/employees")
            .then(response => response.json())
            .then(data => this.setState({employees: data.employees}));
    }

    // handleSubmit = event => {
    //     event.preventDefault();
        
    //     fetch('/employees', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             firstName: this.state.firstName,
    //             lastName: this.state.lastName,
    //             salary: this.state.salary,
    //             branch: this.state.branch,
    //             designation: this.state.designation
    //         })
    //     });
    // }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        let filteredEmployeees = this.state.employees.filter(employee => {
            return employee.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || employee.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        
        return (
            <React.Fragment>
                <label>Find by name:
                    <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder="Search by name.." />
                </label>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Employee First Name:
                        <input placeholder="first" type="text" className="name" onChange={event => this.setState({firstName: event.target.value})} />
                    </label>
                    <label>
                        Employee Last Name:
                        <input placeholder="last" type="text" className="name" onChange={event => this.setState({lastName: event.target.value})} />
                    </label>
                    <label>
                        Employee salary:
                        <input placeholder="$$$" type="text" className="salary" onChange={event => this.setState({salary: event.target.value})} />
                    </label>
                    <label>Branch:
                        <select type="text" onChange={event => this.setState({branch: event.target.value})}>
                            <option></option>
                            <option type="text">Engineering</option>
                            <option type="text">Business</option>
                            <option type="text">Human Resources</option>
                        </select>
                    </label>
                    <label>Designation:
                        <select type="text" onChange={event => this.setState({designation: event.target.value})}>
                            <option></option>
                            <option type="text">Software Engineer</option>
                            <option type="text">Engineer</option>
                            <option type="text">Accountant</option>
                            <option type="text">People Operations</option>
                        </select>
                    </label>
                    <button type="submit">Add</button>
                </form> */}
                <div>
                    <h2>Employee Information</h2>
                    {/* <ul>
                        {this.state.employees.map(employee => 
                            <li>
                                Name: {employee.name} || Salary: {employee.salary}
                            </li>)}
                    </ul> */}
                    {/* <ul>
                        {filteredEmployeees.map(employee => 
                            <li>
                                Name: {employee.name} || Salary: ${employee.salary}
                            </li>)}
                    </ul> */}
                 <hr/>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Salary</th>
                            <th>Branch</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployeees.map(employee => (
                            <tr key={employee._id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>${employee.salary}</td>
                                <td>{employee.branch}</td>
                                <td>{employee.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                Add employee info <a href="/add">Add</a> <br/>
                Back to home page <a href="/">Home</a> <br/>
                <button onClick={this.props.auth.logout}>Logout</button>

            </React.Fragment>
        );
    }
}
 
export default EmployeeList;