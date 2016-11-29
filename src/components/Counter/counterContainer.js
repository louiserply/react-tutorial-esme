import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Counter from 'components/Counter/counter';

class ContainerContainer extends React.Component {
    componentDidMount() {
        /* Exemple of AJAX request
        axios.get('/path/to/user-api').then(response => {
            store.dispatch({
                type: 'INCREMENT',
                id: response.id
            });
        });
        */
    }

    render() {
        let rows = [];
        for (let i=0; i < this.props.nb; i++) {
            console.log(i);
            rows.push(<Counter key={"counter-"+i} id={i}
                               value={this.props.counter[i]}
                               onDecrement={this.props.onDecrement}
                               onIncrement={this.props.onIncrement}
            />);
        }
        return (
            <div>{rows}</div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    onDecrement : (id) => {
        dispatch({
            type: "DECREMENT",
            id
        })
    },
    onIncrement : (id) => {
        dispatch({
            type: "INCREMENT",
            id
        })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerContainer)