import React from 'react';
import AuthService from '../../services/authentification';
import { Button, Input, Form } from 'semantic-ui-react'

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
        if (AuthService.login(this.state.user, this.state.password)) {
            alert('Success !');
            //redirect to protected route (Cf step 4)
            //and store the login token (here without store)
        } else {
            alert('Fail !');
        }
    }

    render() {
        const loginStyle = {
            container : {
                marginTop : "10px",
            }
        }

        return (
            <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>
                <Form>
                    <Form.Field>
                        <Input type="text" name="user" value={this.state.user}
                               placeholder="Username"
                               onChange={this.handleChange.bind(this)}/>
                    </Form.Field>
                    <Form.Field>
                        <Input type="password" name="password" value={this.state.password}
                               placeholder="Password"
                               onChange={this.handleChange.bind(this)}/>
                    </Form.Field>
                    <Button type="submit" onClick={this.login.bind(this)}>Submit</Button>
                </Form>
            </div>
        );
    }
}