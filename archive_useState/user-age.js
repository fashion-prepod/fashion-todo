import React from "react";
import {useCounter} from './hooks/useCounter';


export const UserAge = () => {
    const {counter, inc, dec} = useCounter(1);

    return <div style={ {color: 'white', backgroundColor: 'salmon'} }>
        <h1>User Age</h1>
        <div>age: {counter}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
};



// const inc = () => {
//     // setTimeout(() => {
//     //     setCounter((counter) => counter + 1);
//     // }, 2000);
//     setCounter((counter) => counter + 1);
// };