import React, {useState} from "react";

type OnOffType = {
    //highlight: boolean
}

export const OnOff = (props: OnOffType) => {
    console.log("OnOff rendering")

    let [on, setOn] = useState(false)
    console.log(`on: ${on}`)

    const onOffBlock = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
    }

    const onStyle = {
        transition: "all 1s ease 1s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: on ? "white" : "red",
        display: on ? "none" : "block",
        borderRadius: "20px",
    };
    const offStyle = {
        transition: "all 1s ease 1s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: on ? "green" : "white",
        display: on ? "block" : "none",
        paddingLeft: on ? "50px" : "0px",
        borderRadius: "20px",
    };
    const indicatorStyle = {
        transition: "1s",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid #000",
        backgroundColor: on ? "green" : "white",
    };


    return (
        <div style={onOffBlock}>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>Off
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>On
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}