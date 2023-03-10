import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}>Increment</button> &nbsp;
            <button onClick={() => dispatch(decrement())}>Decrement</button> &nbsp;
            <button onClick={() => dispatch(reset())}>Reset</button> &nbsp;
            <button onClick={() => dispatch(increaseByAmount(5))}>Increase by Value</button>
        </div>
    )
}

export default CounterView