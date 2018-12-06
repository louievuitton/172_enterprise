import React, { Component } from 'react';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
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
                name: this.state.name,
                salary: this.state.salary
            })
        });
    }

    render() { 
        return ( 
            <form>
                <label onSubmit={this.handleSubmit}>
                    Employee Name:
                   <input type="text" className="name" onChange={event => this.setState({name: event.target.value})} />
                </label>
                <label>
                    Employee salary:
                    <input type="text" className="salary" onChange={event => this.setState({salary: event.target.value})} />
                </label>
                <button type="submit">Add</button>
            </form>
         );
    }
}
 
export default Payment;