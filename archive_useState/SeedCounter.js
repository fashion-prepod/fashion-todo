import React from "react";
import { useCounter } from './hooks/useCounter';

export const SeedCounter = () => {
    const {dec, counter, inc} = useCounter(1000);

    return <div style={ {color: '#2d2d2d', backgroundColor: 'yellow'} }>
        <h1>Seed Counter</h1>
        <div>seeds: {counter}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
};
