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
            rows.push(<Counter key={i}
                               value={this.props.counter}
                               onDecrement={this.props.onDecrement}
                               onIncrement={this.props.onIncrement}
            />);
            rows.push(<hr/>)
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
    onDecrement : () => {
        dispatch({
            type: "DECREMENT"
        })
    },
    onIncrement : () => {
        dispatch({
            type: "INCREMENT"
        })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerContainer)