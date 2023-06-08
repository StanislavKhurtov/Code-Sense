import React from "react";

type OnOffType = {
    //highlight: boolean
}

export const OnOff = (props: OnOffType) => {

    const on = false

    const onOffBlock = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    }

    const onStyle = {
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid #000",
        backgroundColor: on ? "green" : "white",
    };


    return (
        <div style={onOffBlock}>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}