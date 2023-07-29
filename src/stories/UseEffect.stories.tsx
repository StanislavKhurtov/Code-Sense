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

let hours = 12


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



export const SetTime = () => {
    const [hour, setHour] = useState(2);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(58);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("sec")
            setSecond((second) => {
                const newSecond = second + 1;
                if (newSecond >= 60) {
                    setMinute((minute) => {
                        const newMinute = minute + 1;
                        if (newMinute >= 60) {
                            setHour((hour) => (hour === 12 ? 1 : hour + 1));
                        }
                        return newMinute % 60;
                    });
                }
                return newSecond % 60;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    useEffect(()=> {
        document.title = `${hour}:${minute}:${second}`
    },[second])

    return (
        <div>
            time - {hour}:{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}
        </div>
    );
}