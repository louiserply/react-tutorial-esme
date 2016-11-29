import React from 'react';
import CounterContainer from 'components/Counter/counterContainer';
import { connect } from 'react-redux';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <CounterContainer nb="3">
                </CounterContainer>
             </div>
        )
    }
}