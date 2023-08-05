import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

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

    return (
        <div>
            time
            - {getDigitsString(date.getHours())}:{getDigitsString(date.getMinutes())}:{getDigitsString(date.getSeconds())}
        </div>
    );
}

//Сделать часы аналоговые и цифровые с кнопкой переключения