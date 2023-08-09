import React, { useEffect, useState } from "react";
import clock from "./Clock.module.css";
import { Button } from "@mui/material";

export const Clock = () => {
    const [date, setDate] = useState(new Date());
    const [fullDate, setFullDate] = useState(new Date());
    const [showDigitalClock, setShowDigitalClock] = useState<boolean>(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            setDate(currentDate);
            setFullDate(currentDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const getDigitsString = (num: number) => (num < 10 ? `0${num}` : `${num % 60}`);

    useEffect(() => {
        document.title = `${getDigitsString(date.getHours())}:${getDigitsString(date.getMinutes())}:${getDigitsString(date.getSeconds())}`;
    }, [date]);

    const toggleClock = () => {
        setShowDigitalClock((prevShowDigitalClock) => !prevShowDigitalClock);
    };

    return (
        <div className={clock.clockWrapper}>
            <Button variant="contained" onClick={toggleClock}>
                {showDigitalClock ? "Analog" : "Digital"}
            </Button>
            {showDigitalClock ? (
                <div className={clock.clockDigital}>
                    {getDigitsString(date.getHours())}:{getDigitsString(date.getMinutes())}:{getDigitsString(date.getSeconds())}
                </div>
            ) : (
                <div className={clock.clockAnalog}>
                    <div className={clock.clockFace}>
                        <span className={clock.hourHand} style={{ transform: `rotate(${date.getHours() * 30}deg)` }}></span>
                        <span className={clock.minuteHand} style={{ transform: `rotate(${date.getMinutes() * 6}deg)` }}></span>
                        <span className={clock.secondHand} style={{ transform: `rotate(${date.getSeconds() * 6}deg)` }}></span>
                        <span className={clock.dot}></span>
                    </div>
                </div>
            )}
            <div className={clock.data}>
                {getDigitsString(fullDate.getDate())}/{getDigitsString(fullDate.getMonth() + 1)}/{fullDate.getFullYear()}
            </div>
        </div>
    );
};