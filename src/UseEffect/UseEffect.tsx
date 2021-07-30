import React, {useState, useEffect} from 'react';

const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(10)
    useEffect(() => {
        console.log('First render every FAKE ')
        //api.getUsers().then(')
        //setInterval
        //indexDB
        //document.getElementId
        // document.title = counter.toFixed(2)
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

export const SetTimeout = () => {
    const [counterSec, setCounterSec] = useState(0)
    const [counterMin, setCounterMin] = useState(0)
    const [counterHour, setCounterHour] = useState(0)

    useEffect(() => {
        setInterval( ()   => {
            console.log('Interval 1s' + counterSec)
            setCounterSec((state) => state +1)
        }, 1000)
        setInterval( ()   => {
            console.log('Interval 1m' + counterMin)
            setCounterMin((state) => state +1)
        }, 60000)
        setInterval( ()   => {
            console.log('Interval 1h' + counterHour)
            setCounterHour((state) => state +1)
        }, 3600000)

    }, [])

    return (
        <div>
            ---Hour:{counterHour}-Min:{counterMin}-Sec{counterSec}----
        </div>
    );
};

export default UseEffect;