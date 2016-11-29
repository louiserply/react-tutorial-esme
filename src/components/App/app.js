import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'components/Slider/slider';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            sliders : [
                {name : 'a'},
                {name : 'b'},
                {name : 'c'}
            ],
            a: 0,
            b: 0,
            c: 0
        };
    }

    update(e){
        this.setState(
            {
            }
        )
    }

    render(){
        const that = this;
        return (
            <div>
                {this.state.sliders.map((slider) => {
                    return <div>
                        <Slider ref={slider.name} update={that.update.bind(that)}/>
                        {that.state[slider.name]}
                        </div>
                })}
                <hr/>
             </div>
        )
    }
}
