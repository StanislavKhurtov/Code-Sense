import React, {useEffect, useState} from "react";
import clock from "./Clock.module.css";
import {Button} from "@mui/material";

export const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [showDigitalClock, setShowDigitalClock] = useState<boolean>(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId) // Надо очищать setInterval, так функция асинхронная и она в фоне продолжает работать, если мы даже перешли на другую страничку. Для того чтобы ее остановить и не засорять память!!!, это важно, применяем clearInterval(id setInterval)
        }
    }, [])

    const getDigitsString = (num: number) => num < 10 ? `0${num}` : num

    useEffect(() => {
        document.title = `${getDigitsString(date.getHours())}:${getDigitsString(date.getMinutes())}:${getDigitsString(date.getSeconds())}`
    }, [])

    const toggleClock = () => {
        setShowDigitalClock((prevShowDigitalClock) => !prevShowDigitalClock);
    };


    return (
        <div className={clock.clockWrapper}>
            <Button
                variant="contained"
                onClick={toggleClock}>
                {showDigitalClock ? "Analog" : "Digital"}
            </Button>
            {showDigitalClock ? (
                <div className={clock.clockDigital}>
                    {getDigitsString(date.getHours())}:{getDigitsString(date.getMinutes())}:{getDigitsString(date.getSeconds())}
                </div>
            ) : (
                <div className={clock.clockAnalog}>
                    <div className={clock.clockFace}>
                        <span className={clock.hourHand} style={{transform: `rotate(${date.getHours() * 30}deg)`}}></span>
                        <span className={clock.minuteHand} style={{transform: `rotate(${date.getMinutes() * 6}deg)`}}></span>
                        <span className={clock.secondHand} style={{transform: `rotate(${date.getSeconds() * 6}deg)`}}></span>
                        <span className={clock.dot}></span>
                    </div>
                </div>
            )}
        </div>
    );
}

