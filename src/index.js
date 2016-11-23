import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    componentWillMount(){
       console.log("Component will be mount")
    }

    componentDidMount(){
        console.log("Component is mount")
    }

    render(){
        return (
            <h1> hello </h1>
        )
    }

    componentWillUnmount() {
        console.log("Component will be unmount")
    }

    componentDidUnmount() {
        console.log("Component is unmount")
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));

