import React, {useMemo, useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
}


export const OnMode = () => {
    const onOffComponent = useMemo(() => <OnOff on={true} onChange={action("on or off")} />, []);
    return onOffComponent;
};

export const OffMode = () => {
    const onOffComponent = useMemo(() => <OnOff on={false} onChange={action("on or off")} />, []);
    return onOffComponent;
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue} />;
}
