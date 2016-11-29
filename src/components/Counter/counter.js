import React from 'react';

//Presentation component
export default class Counter extends React.Component {
    render(){
        return (
            <div>
                <h2> {this.props.value }</h2>
                <button onClick={() => this.props.onIncrement(this.props.id)}>+</button>
                <button onClick={() => this.props.onDecrement(this.props.id)}>-</button>
            </div>
        )
    }
}
