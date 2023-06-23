import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {ControlledOnOff} from "./ControlledOnOff";



export default {
    title: 'ControlledOnOff',
    component: ControlledOnOff,
}


export const OnMode = () => <ControlledOnOff on={true} onChange={action('on or off')} />;
export const OffMode = () => <ControlledOnOff on={false} onChange={action('on or off')} />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <ControlledOnOff on={value} onChange={setValue} />;
}
