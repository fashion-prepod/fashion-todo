import React, { useState } from "react";

export const App = () => {
    const [todoText, setTodoText] = useState('');


    const onTodoTextChange = ({target: {value}}) => {
        setTodoText(value);
    };


    // function onKeyDownHandler (e) {
    //     if (e.key === 'Enter') {
    //         console.log(todoText);
    //     }
    // };

    // TODO remove eventlistener
    // window.addEventListener('keydown', onKeyDownHandler );

    console.log('RENDER');

    return (
        <div>
            <div>Person age: {person.age}</div>
            <h1>Todo list!</h1>
            <input id="user-input" onChange={onTodoTextChange} />
            <button onClick={clickHandler}>add</button>
            <ul></ul>
        </div>
    )
};


