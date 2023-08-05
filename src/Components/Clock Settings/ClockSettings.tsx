import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import clock from "./ClockSettings.module.css";


export const ClockSettings = () => {
    const [hour, setHour] = useState<number>(0);
    const [minute, setMinute] = useState<number>(0);
    const [second, setSecond] = useState<number>(30);
    const [showDigitalClock, setShowDigitalClock] = useState<boolean>(true);

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
        if (!isNaN(hourClock)) {
            hourClock = hourClock % 24; // Ограничиваем значение от 0 до 23
            if (hourClock < 0) {
                hourClock = 24 + hourClock; // Обрабатываем отрицательные значения
            }
            setHour(hourClock);
        }
    };

    const onChangeMinutesHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minuteClock = parseInt(e.currentTarget.value);
        if (!isNaN(minuteClock)) {
            minuteClock = minuteClock % 60; // Ограничиваем значение от 0 до 59
            if (minuteClock < 0) {
                minuteClock = 60 + minuteClock; // Обрабатываем отрицательные значения
            }
            setMinute(minuteClock);
        }
    };
    const toggleClock = () => {
        setShowDigitalClock((prevShowDigitalClock) => !prevShowDigitalClock);
    };

    return (
        <div className={clock.clockWrapper}>
            <div className={clock.clockSettings}>
                <TextField
                    className={clock.textFieldClock}
                    value={hour}
                    onChange={onChangeHoursHandler}
                    id="standard-number"
                    label="Hours"
                    type='number'
                    size="small"
                />
                <TextField
                    className={clock.textFieldClock}
                    type="number"
                    value={minute}
                    onChange={onChangeMinutesHandler}
                    label="Minutes"
                    size="small"

                />
                <Button
                    variant="contained"
                    onClick={toggleClock}>
                    {showDigitalClock ? "Analog" : "Digital"}
                </Button>
            </div>
            {showDigitalClock ? (
                <div className={clock.clockDigital}>
                    {getDigitsString(hour)}:{getDigitsString(minute)}:{getDigitsString(second)}
                </div>
            ) : (
                <div className={clock.clockAnalog}>
                    <div className={clock.clockFace}>
                        <span className={clock.hourHand} style={{transform: `rotate(${hour * 30}deg)`}}></span>
                        <span className={clock.minuteHand} style={{transform: `rotate(${minute * 6}deg)`}}></span>
                        <span className={clock.secondHand} style={{transform: `rotate(${second * 6}deg)`}}></span>
                        <span className={clock.dot}></span>
                    </div>
                </div>
            )}
        </div>
    );
};