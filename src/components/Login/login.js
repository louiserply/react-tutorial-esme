import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            user: "",
            password: ""
        };
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

     login(e) {
         e.preventDefault();
         //Do something to log the user

    }

    render() {
        return (
            <form role="form">
                <div className="form-group">
                    <input type="text" name="user" value={this.state.user}
                           placeholder="Username"
                           onChange={this.handleChange.bind(this)} />
                    <input type="password" name="password" value={this.state.password}
                           placeholder="Password"
                           onChange={this.handleChange.bind(this)} />
                </div>
                <button type="submit" onClick={this.login.bind(this)}>Submit</button>
            </form>
        );
    }
}