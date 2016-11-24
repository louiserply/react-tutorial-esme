import React from 'react';
import AuthService from '../../services/authentification';

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
         if(AuthService.login(this.state.user, this.state.password)){
             alert('Success !');
             //redirect to protected route (Cf step 4)
             //and store the login token (here without store)
         } else {
             alert('Fail !');
         }
    }

    render() {
        const inputStyle = {
            display: "block",
            margin: 0,
            width: "100%",
            fontFamily: "sans-serif",
            fontSize: "18px",
            appearance: "none",
            boxShadow: "none",
            borderRadius: "none",
            backgroundColor: "blue"
        }

        return (
            <form role="form">
                <div className="form-group">
                    <input style={inputStyle} type="text" name="user" value={this.state.user}
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