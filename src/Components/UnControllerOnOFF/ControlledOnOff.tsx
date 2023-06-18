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


    return (
        <div style={onOffBlock}>
            <div style={offStyle} onClick={() => props.onChange(true)}>On
            </div>
            <div style={onStyle} onClick={() => props.onChange(false)}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}