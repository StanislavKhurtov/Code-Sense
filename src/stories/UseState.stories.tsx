import React, {useState} from "react";

export default {
    title: 'useState demo'
}


export const Example1 = () => {
    const [counter, setCounter] = useState(0)


    return <div>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        {counter}
    </div>
}


