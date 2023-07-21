import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordeon} from "./Accordeon";


export default {
    title: 'Accordeon',
    component: Accordeon,
}


export const CollapsedMode = () => <Accordeon titleValue={"Menu"} collapsed={true}
                                              onChange={action('accordeon mode change fired')} items={[]}
                                              onClick={action('accordeon mode change fired')}/>;
export const UnCollapsedMode = () => <Accordeon titleValue={"Users"} collapsed={false}
                                                onChange={action('accordeon mode change fired')}
                                                items={[{title: "Stas", value: 1}, {
                                                    title: "Egor",
                                                    value: 2
                                                }, {title: "Sofia", value: 3}]}
                                                onClick={action('accordeon mode change fired')}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordeon titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: "Stas", value: 1}, {title: "Egor", value: 2}, {title: "Sofia", value: 3}]}
                      onClick={(id) => {
                          alert(`user c number ${id} by happy`)
                      }}/>;
}
