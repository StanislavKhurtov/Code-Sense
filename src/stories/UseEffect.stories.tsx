import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <div>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        Hello, {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </div>
};

export const SetTimeOutExample = () => {

    const [fake, setFake] = useState()
    const [counter, setCounter] = useState(1)

    console.log('SetTimeOutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('tick: ' + counter)
            setCounter(state => state + 1)
        }, 1000);
    }, [])


    return <div>
        counter: {counter}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
    </div>
};


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered' + counter)

    useEffect(() => {
        console.log('Effect occurred:' + ' ' + counter)

        return () => {
            console.log('Reset Effect' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <div>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </div>
};



