import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../counter';

function Counter({ count, increment, decrement }) {
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = {
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
