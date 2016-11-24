import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'components/Slider/slider';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            a: 0,
            b: 0,
            c: 0
        };
    }

    update(e){
        this.setState(
            {
                a: ReactDOM.findDOMNode(this.refs.a).value,
                b: ReactDOM.findDOMNode(this.refs.b).value,
                c: ReactDOM.findDOMNode(this.refs.c).value
            }
        )
    }

    render(){
        return (
            <div>
                {this.state.a}
                <Slider update={this.update.bind(this)} ref="a" />
                {this.state.b}
                <Slider update={this.update.bind(this)} ref="b" />
                {this.state.c}
                <Slider update={this.update.bind(this)} ref="c" />
             </div>
        )
    }
}
