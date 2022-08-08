import React from "react";
import {useCounter} from './hooks/useCounter';

export const EggCounter = () => {
    const {counter, inc, dec} = useCounter(10);

    return <div style={ {color: 'white', backgroundColor: 'lightgreen'} }>
        <h1>Egg Counter</h1>
        <div>eggs: {counter}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
};
