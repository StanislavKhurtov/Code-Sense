import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,

};
const callback = "on or off"

function action(callback: string) {
    
}

export const OnMode = () => <OnOff on={true} onChange={action(callback)} />;
export const OffMode = () => <OnOff on={false} onChange={action(callback)} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onclick={setValue} />;
}
