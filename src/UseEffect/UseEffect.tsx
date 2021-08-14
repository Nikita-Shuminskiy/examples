import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(10)
    useEffect(() => {
        console.log('First render every FAKE ')
    }, [fake])
    useEffect(() => {
        console.log('render first and stop')
    }, [])
    useEffect(() => {
        console.log('addiction Counter render ')
    }, [counter])
    return (
        <div>
            HI{counter}
            <button onClick={() => setCounter(counter + 1)}>x</button>
            <button onClick={() => setFake(fake + 1)}>fake</button>
        </div>
    );
};



export default UseEffect;