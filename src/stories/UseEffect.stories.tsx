import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {


    const [counter, setCounter] = useState<number>(1)
    console.log('SimpleExample')

    useEffect(()=> {
        console.log('useEffect')
    })

    return <div>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </div>
}


