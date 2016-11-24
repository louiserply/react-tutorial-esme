import React from 'react';
import ReactDOM from 'react-dom';
import Login from 'components/Login/login';

export default class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        const that = this;
        return (
            <div>
                <Login />
             </div>
        )
    }
}
