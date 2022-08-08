import React, {useState} from "react";

// two way binding

export const UserName = () => {
    const [userName, setUserName] = useState(0); 
    const onChangeHandler = ({target: {value}}) => {
        setUserName(+value);
    };

    function addMister () {
        setUserName((prevUserName) => prevUserName + 10)
    }

    console.log(userName);

    return <div>
        <div>Enter your name</div>
        {/* Valerchik */}
        <button onClick={addMister}>add mister</button>
        <input 
            value={userName}
            type='range'
            placeholder='here'
            onChange={onChangeHandler}
        />
    </div>
};


