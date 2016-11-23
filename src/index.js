import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render(){
        return (
            <div>
                <h1> {this.props.title} </h1>
                <small> {this.props.children} </small>
            </div>
        )
    }

}

App.propTypes = {
  title: React.PropTypes.string
};

ReactDOM.render(<App title="React tutorial"> Debut </App>, document.querySelector('.app'));

