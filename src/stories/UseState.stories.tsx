import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log('generateData');
    return 328956235689
}




export const Example1 = () => {
    console.log('Example1')

    const initValue = useMemo(generateData,[])

    const [counter, setCounter] = useState(initValue)


    return <div>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        {counter}
    </div>
}


