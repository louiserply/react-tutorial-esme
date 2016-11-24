import React from 'react';
import Slider from 'components/Slider';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            val: 0
        };
    }

    update(e){
        this.setState(
            {val: e.target.value}
        )
    }

    render(){
        return (
            <div>
                {this.state.val}
                <Slider update={this.update.bind(this)} />
                <Slider update={this.update.bind(this)}  />
                <Slider update={this.update.bind(this)} />
             </div>
        )
    }
}
