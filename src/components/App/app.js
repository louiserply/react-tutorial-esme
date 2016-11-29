import React from 'react';
import CounterContainer from 'components/Counter/counterContainer';
import { connect } from 'react-redux';

export default class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <CounterContainer nb="3">
                </CounterContainer>
             </div>
        )
    }
}