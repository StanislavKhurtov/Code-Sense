import React from "react";

type OnOffType = {
    on: boolean;
    onChange: (on: boolean) => void;
};

export const OnOff = React.memo((props: OnOffType) => {
    console.log("OnOff rendering");

    const onOffBlock = {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        fontWeight: "900",
    };

    const onStyle = {
        transition: "1s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: props.on ? "white" : "red",
        display: props.on ? "none" : "block",
        borderRadius: "20px",
    };
    const offStyle = {
        transition: "1s",
        border: "1px solid #000",
        padding: "5px 10px",
        backgroundColor: props.on ? "green" : "white",
        display: props.on ? "block" : "none",
        paddingLeft: props.on ? "50px" : "0px",
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
            <div
                style={onStyle}
                onClick={() => {
                    props.onChange(true);
                }}
            >
                Off
            </div>
            <div
                style={offStyle}
                onClick={() => {
                    props.onChange(false);
                }}
            >
                On
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
});