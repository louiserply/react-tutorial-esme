import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(){
        super();
        this.state = { title: "App title"};
    }

    update(e){
        this.setState({title: e.target.value})
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/>
                <h2> {this.state.title} </h2>
            </div>
        )
    }

}

App.propTypes = {
  title: React.PropTypes.string
};

ReactDOM.render(<App> </App>, document.querySelector('.app'));

