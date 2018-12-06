import React, { Component } from 'react';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        fetch("/employees")
            .then(response => response.json())
            .then(data => this.setState({employees: data.employees}));
    }

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
                <div>
                    <h2>Employee Information</h2>
                   
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