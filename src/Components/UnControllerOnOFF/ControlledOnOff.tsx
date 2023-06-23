import React from "react";

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const ControlledOnOff = (props: OnOffType) => {
    console.log("OnOff rendering")

    console.log(`on: ${props.on}`)

    const onOffBlock = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    }

    const onStyle = {
        transition: "0.5s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: props.on ? "white" : "red",

        borderRadius: "20px",
    };
    const offStyle = {
        transition: "0.5s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: props.on ? "green" : "white",
        borderRadius: "20px",
    };
    const indicatorStyle = {
        transition: "1s",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid #000",
        backgroundColor: props.on ? "green" : "white",
    };


    const onClicked = () => {
        props.onChange(true)
    };
    const offClick = () => {
        props.onChange(false)
    };

    return (
        <div style={onOffBlock}>
            <div style={offStyle} onClick={onClicked}>On
            </div>
            <div style={onStyle} onClick={offClick}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}