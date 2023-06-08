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
        transition:"1s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: on ? "green" : "white",
        marginRight: on ? "50px" : "0px"
    };
    const offStyle = {
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        transition:"1s",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid #000",
        backgroundColor: on ? "green" : "white",
    };


    return (
        <div style={onOffBlock}>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}