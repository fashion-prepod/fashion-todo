import {useState} from 'react';

export const useCounter = (val) => {
    const [counter, setCounter] = useState(0);

    const inc = () => {
        setCounter((counter) => counter + val);
    };
    
    const dec = () => {
        setCounter((counter) => {
            if (counter > 0) {
                return counter - val;
            } else {
                return counter;
            }
        });
    };

    return {
        counter,
        dec,
        inc
    };
};







