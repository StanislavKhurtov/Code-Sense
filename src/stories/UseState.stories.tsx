import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log('generateData');
    return 1
}

export const Example1 = () => {

    console.log('Example1')

    const [counter, setCounter] = useState<number>(generateData)

    return <div>
        <button onClick={() => setCounter(state => state + 1)}>{counter}</button>
        {counter}
    </div>
}


