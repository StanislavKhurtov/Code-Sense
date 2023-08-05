import React, { ChangeEvent, useEffect, useState } from "react";
import {Button} from "@mui/material";

export const ClockSettings = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [showDigitalClock, setShowDigitalClock] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
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
    }, []);

    const getDigitsString = (num: number) => (num < 10 ? `0${num}` : num.toString());

    useEffect(() => {
        document.title = `${getDigitsString(hour)}:${getDigitsString(minute)}:${getDigitsString(second)}`;
    }, [hour, minute, second]);

    const onChangeHoursHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let hourClock = parseInt(e.currentTarget.value);
        if (!isNaN(hourClock) && hourClock >= 0 && hourClock <= 23) {
            setHour(hourClock);
        }
    };

    const onChangeMinutesHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minuteClock = parseInt(e.currentTarget.value);
        if (!isNaN(minuteClock) && minuteClock >= 0 && minuteClock <= 59) {
            setMinute(minuteClock);
        }
    };

    const toggleClock = () => {
        setShowDigitalClock((prevShowDigitalClock) => !prevShowDigitalClock);
    };

    return (
        <div className='clockWrapper'>
            <div className="clockSettings">
                <input
                    type="number"
                    value={hour}
                    onChange={onChangeHoursHandler}
                    min="0"
                    max="23"
                />
                <input
                    type="number"
                    value={minute}
                    onChange={onChangeMinutesHandler}
                    min="0"
                    max="59"
                />
                <Button variant="contained" onClick={toggleClock}>
                    {showDigitalClock ? "Analog" : "Digital"}
                </Button>
            </div>
            {showDigitalClock ? (
                <div className={"clockDigital"}>
                    {getDigitsString(hour)}:{getDigitsString(minute)}:{getDigitsString(second)}
                </div>
            ) : (
                <div className="clockAnalog">
                    <div className="clockFace">
                        <div
                            className="hourHand"
                            style={{ transform: `rotate(${hour * 30}deg)` }}
                        />
                        <div
                            className="minuteHand"
                            style={{ transform: `rotate(${minute * 6}deg)` }}
                        />
                        <div
                            className="secondHand"
                            style={{ transform: `rotate(${second * 6}deg)` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};