import React from 'react';
import Counter from 'components/Counter/counter';
import { connect } from 'react-redux';

class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <Counter value={this.props.counter}
                         onIncrement={this.props.onIncrement}
                         onDecrement={this.props.onDecrement} >

                </Counter>
                <hr/>
             </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    onDecrement : () => {
        dispatch({
            type: "DECREMENT"
        })
    },
    onIncrement : () => {
        dispatch({
            type: "INCREMENT"
        })
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)