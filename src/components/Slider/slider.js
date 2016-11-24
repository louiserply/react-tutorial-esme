import React from 'react';

export default class Slider extends React.Component {
    render(){
        return (
            <div>
                <input ref="slider" type="range" max="255" min="0" onChange={this.props.update} />
            </div>
        )
    }
}
