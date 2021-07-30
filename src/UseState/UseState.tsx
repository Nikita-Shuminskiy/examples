import React, {useMemo, useState} from 'react';

function generation() {
    console.log('generation')
    return 212121345
}

const UseState = () => {
    /*const initial = useMemo(generation, [])*/

    const [counter, setCounter] = useState(generation)

    function result(state: number) {
        console.log('123')
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(result)}>+</button>
        {counter}
    </>
};

export default UseState;